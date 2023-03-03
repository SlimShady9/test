<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Messaging;
use App\Models\Parameter;

class MessagingController extends Controller
{
    public function index() {
        return Messaging::all();
    }

    public function show($id) {

        return Messaging::where('id_service', $id)->get();
    }

    public function store(Request $request) {

        try {

            $request->validate([
                'name' => 'required|string|max:30',
                'entity' => 'required|string|max:30',
                'charge' => 'required|string|max:50',
                'id_service' => 'required|Exists:services,id',
                'cost_center' => 'required|string|max:255',
                'id_user' => 'required|Exists:users,id',
                'dependency' => 'required|string|max:30',
                'intern_order' => 'required|string|max:30',
                'transporter' => 'required|string|max:30',
                'id_transporter_tracking' => 'required|string|max:255',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }

        
        $newMessaging = Messaging::create([
            'name' => $request->name,
            'entity' => $request->entity,
            'dependency' => $request->dependency,
            'id_user' => $request->id_user,
            'id_service' =>  $request->id_service,
            'charge' => $request->charge,
            'cost_center' => $request->cost_center,
            'intern_order' => $request->intern_order,
            'transporter' => $request->transporter,
            'id_transporter_tracking' => $request->id_transporter_tracking,
        ]);
        return $newMessaging;
    }


    public function update(Request $request, $id) {

        try {

            $request->validate([
                'name' => 'string|max:30',
                'entity' => 'string|max:30',
                'charge' => 'string|max:50',
                'id_service' => 'Exists:services,id',
                'cost_center' => 'string|max:255',
                'id_user' => 'Exists:users,id',
                'dependency' => 'string|max:30',
                'intern_order' => 'string|max:30',
                'transporter' => 'string|max:30',
                'id_transporter_tracking' => 'string|max:255',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
        try {
            $Messaging = Messaging::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Messaging not found'], 404);
        }
        $Messaging->name = $request->name_service;
        $Messaging->entity = $request->entity;
        $Messaging->dependency = $request->dependency;
        $Messaging->id_user = $request->id_user;
        $Messaging->id_service = $request->id_service;
        $Messaging->charge = $request->charge;
        $Messaging->cost_center = $request->cost_center;
        $Messaging->intern_order = $request->intern_order;
        $Messaging->transporter = $request->transporter;
        $Messaging->id_transporter_tracking = $request->id_transporter_tracking;
        $Messaging->save();
        return $Messaging;
    }

    public function destroy($id) {
        try {
            $Messaging = Messaging::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Messaging not found'], 404);
        }
        $Messaging->delete();
        return response()->json(['message' => 'Messaging deleted'], 200);
    }
}
