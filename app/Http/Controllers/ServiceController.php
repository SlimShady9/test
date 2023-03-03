<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Address;
use App\Models\Parameter;
use App\Models\TypeService;
use App\Models\StateService;
use Illuminate\Support\Facades\DB;

use Barryvdh\Debugbar\Facade as Debugbar;

class ServiceController extends Controller {

    private $path = 'profileimg/';

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
                'id_type_service' => 'Exists:type_services,id',
                'description' => 'max:255',
                'start_date' => 'required|date',
                'price' => 'numeric|Between:0,9999999999',
                'cost' => 'numeric|Between:0,9999999999',
                'archive' => 'max:255',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
        
        $newService = Service::create([
            'name' => $request->name,
            'id_state_service' => $request->id_state_service,
            'id_type_service' => $request->id_type_service,
            'start_date' => $request->start_date,
            'description' => $request->description,
            'price' => $request->price,
            'cost' => $request->cost,
            'archive' => $request->archive,
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
                'name' => 'required|string|max:30',
                'id_state_service' => 'Exists:state_services,id',
                'id_type_service' => 'Exists:type_services,id',
                'description' => 'required|string|max:255',
                'start_date' => 'required|date',
                'price' => 'numeric|Between:0,9999999999',
                'cost' => 'numeric|Between:0,9999999999',
                'address' => 'Exists:addresses,id',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
        try {
            $service = Service::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Service not found'], 404);
        }
        $service->name = $request->name;
        $service->id_state_service = $request->id_state_service;
        $service->id_type_service = $request->id_type_service;
        $service->description = $request->description;
        $service->start_date = $request->start_date;
        $service->price = $request->price_service;
        $service->cost = $request->cost;
        $service->address = $request->address;
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

    public function addressByService($id_service) {
        return Address::find($id_service);
    }

    public function serviceByUser($id_user)
    { 
        $sql = 'SELECT s.tracking_id FROM services s 
        inner join orders o on s.id = o.id_service 
        inner join users u on u.id = o.id_user 
        where u.id = ' . $id_user;
        $products = DB::select($sql);
        return $products;
    }

    public function storeFile($serviceId, Request $request) {
        $service = Service::find($serviceId);
        if (!$service) {
            return response()->json(['message' => 'Service not found'], 404);
        }

        $name = $path. $user_id . '.' . $extension;

        $path = $this->path;
        $file = $request->file('file');
        $extension = $file->getClientOriginalExtension();
        // Change file name to avoid duplicates

        if ($service->archive) {
            Storage::disk('public')->delete($service->archive);
        }

        Storage::disk('public')->put($name, file_get_contents($file));
        $service->archive = $name;
        $service->save();
        return response()->json(['success' => 'File uploaded successfuly'], 200);



    }
    /**
     * Generate a random string
     * Of 30 characters
     */
    private function generateRandomString() {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < 30; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}