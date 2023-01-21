<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Parameter;
use App\Models\TypeService;
use App\Models\StateService;

use Barryvdh\Debugbar\Facade as Debugbar;

class ServiceController extends Controller {

    public function index() {
        return Service::all();
    }

    public function show($id) {

        return Service::find($id);
    }

    public function store(Request $request) {

        try {

            $request->validate([
                'name' => 'required|string|max:30',
                'id_state_service' => 'Exists:state_services,id',
                //'id_type_service' => 'required|Exists:type_services,id',
                'description' => 'required|string|max:255',
                'price' => 'numeric|Between:0,9999999999',
                'id_address' => 'required|Exists:addresses,id',
                'cost' => 'numeric|Between:0,9999999999',
                'date' => 'required|date',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }

        Debugbar::info($request->id_type_service);
        
        $newService = Service::create([
            'name' => $request->name,
            'id_state_service' => StateService::where('name', 'En proceso')->first()->id,
            'id_type_service' =>  $request->id_type_service,
            'description' => $request->description,
            'price' => $request->price,
            'id_address' => $request->id_address,
            'cost' => $request->cost,
        ]);
        return $newService;
    }

    public function edit($id) {

        Parameters::findOrFail($id);

        $parameters = [
            [
                'label' => 'Nombre',
                'name' => 'name',
                'type' => 'input',
                'required' => true,
                'value' => $parameter->name,
            ],
            [
                'label' => 'Descripción',
                'name' => 'description',
                'type' => 'input',
                'required' => true,
                'value' => $parameter->description,
            ],
            [
                'label' => 'Precio',
                'name' => 'price',
                'type' => 'input',
                'required' => true,
                'value' => $parameter->price,
            ],
            [
                'label' => 'Fecha',
                'name' => 'date',
                'type' => 'date',
                'required' => true,
                'value' => $parameter->date,
            ],
        ];

        $type_services_options = TypeService::all();
        $options = [
            'type' => 'select',
            'label' => 'Tipo de servicio',
            'name' => 'id_type_service',
            'options' => [],
            'value' => $parameter->id_type_service,
        ];

        foreach ($type_services as $type_services_options) {
            array_push($options['options'], [
                'label' => $type_service->name,
                'value' => $type_service->id,
            ]);
        }

        array_push($parameters, $options);

        return response()->json([
            'parameters' => $parameters,
            ], 200)->header('Content-Type', 'application/json');
    }

    public function update(Request $request, $id) {

        try {

            $request->validate([
                'name_service' => 'string|max:30',
                'price_service' => 'numeric|Between:0,9999999999',
                'id_type_service' => 'Exists:t_services,id',
                'state_service_id' => 'Exists:state_services,id',
                'description_service' => 'string|max:255',
                'id_address' => 'Exists:addresses,id',
                'cost' => 'numeric|Between:0,9999999999',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
        try {
            $service = Service::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Service not found'], 404);
        }
        $service->name = $request->name_service;
        $service->price = $request->price_service;
        $service->cost = $request->cost;
        $service->id_type_service = $request->id_type_service;
        $service->id_state_service = 5; // 5 = 'Pendiente'
        $service->save();
        return $service;
    }

    public function destroy($id) {
        try {
            $service = Service::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Service not found'], 404);
        }
        $service->delete();
        return response()->json(['message' => 'Service deleted'], 200);
    }

    public function  create() {
        $parameters = Parameter::where('table', 'services')->get();
        $type_services = TypeService::all();

        $options = [
            'type' => 'select',
            'label' => 'Tipo de servicio',
            'name' => 'id_type_service',
            'options' => [],
        ];

        foreach ($type_services as $type_service) {
            array_push($options['options'], [
                'label' => $type_service->name,
                'value' => $type_service->id,
            ]);
        }

        $parameters->push($options);

        return response()->json([
            'parameters' => $parameters,
            ], 200)->header('Content-Type', 'application/json');
    }
}