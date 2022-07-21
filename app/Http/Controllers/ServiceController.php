<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;

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
                'name_service' => 'required|string|max:30',
                'price_service' => 'required|numeric|Between:0,9999999999',
                't_service_id' => 'required|Exists:t_services,id',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }

        $newService = Service::create([
            'name_service' => $request->name_service,
            'price_service' => $request->price_service,
            't_service_id' => $request->t_service_id,
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
}