<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Logistic;
use App\Models\Parameter;

class LogisticController extends Controller
{
 public function index() {
        return Logistic::all();
    }

    public function show($id) {

        return Logistic::find($id);
    }

    public function store(Request $request) {

        try {

            $request->validate([
                'id_service' => 'required|Exists:services,id',
                'has_logistic_bases' => 'required|boolean',
                'needs_complete_service' => 'required|boolean',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
        
        $newLogistic = Logistic::create([
           
            'id_service' =>  $request->id_service,
            'has_logistic_bases' => $request->has_logistic_bases,
            'needs_complete_service' => $request->needs_complete_service,
        ]);
        return $newLogistic;
    }


    public function update(Request $request, $id) {

        try {

            $request->validate([
                'id_service' => 'Exists:services,id',
                'has_logistic_bases' => 'boolean',
                'needs_complete_service' => 'boolean',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
        try {
            $Logistic = Logistic::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Logistic not found'], 404);
        }
        $Logistic->id_service = $request->id_service;
        $Logistic->has_logistic_bases = $request->has_logistic_bases;
        $Logistic->needs_complete_service = $request->needs_complete_service; 
        $Logistic->save();
        return $Logistic;
    }

    public function destroy($id) {
        try {
            $Logistic = Logistic::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Logistic not found'], 404);
        }
        $Logistic->delete();
        return response()->json(['message' => 'Logistic deleted'], 200);
    }
}
