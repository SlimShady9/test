<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Parameter;
use App\Models\TypeService;

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
                'id_state_service' => 'required|Exists:state_services,id',
                'id_t_service' => 'required|Exists:t_services,id',
                'description' => 'required|string|max:255',
                'price' => 'required|numeric|Between:0,9999999999',
                'id_address' => 'required|Exists:addresses,id',
                'data' => 'required|json',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }

        $newService = Service::create([
            'name' => $request->name,
            'id_state_service' => 1, // 1 = 'En proceso'
            'id_t_service' => $request->t_service_id,
            'description' => $request->description,
            'price' => $request->price,
            'id_address' => $request->id_address,
            'data' => $request->data,
        ]);
        return $newService;
    }

    public function update(Request $request, $id) {

        try {

            $request->validate([
                'name_service' => 'required|string|max:30',
                'price_service' => 'required|numeric|Between:0,9999999999',
                't_service_id' => 'required|Exists:t_services,id',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
        try {
            $service = Service::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Service not found'], 404);
        }
        $service->name_service = $request->name_service;
        $service->price_service = $request->price_service;
        $service->t_service_id = $request->t_service_id;
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

    public function requestService() {
        
    }


    public function  requestBasicInputFields() {
        $parameters = [];
        array_push($parameters, Parameter::find(1));
        array_push($parameters, Parameter::find(2));
        array_push($parameters, Parameter::find(3));
        array_push($parameters, Parameter::find(4));

        $type_services = TypeService::all();

        $options = [
            'type' => 'select',
            'label' => 'Tipo de servicio',
            'name' => 't_service_id',
            'options' => [],
        ];

        foreach ($type_services as $type_service) {
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
}