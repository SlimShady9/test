<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContentController extends Controller
{
    public function index() {
        return Doc_management::all();
    }

    public function show($id) {

        return Doc_management::find($id);
    }

    public function store(Request $request) {

        try {

            $request->validate([
                'exception' => 'required|Exists:type_exceptions,id',
                't_carga' => 'required|Exists:type_contents,id',
                'content' => 'required|string|max:30',
                'units' => 'required|string|max:30',
                'unit_weight' => 'required|string|max:30',
                'length' => 'required|string|max:30',
                'width' => 'required|string|max:30',
                'height' => 'required|string|max:30',
                'commercial_value' => 'required|string|max:30',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
        
        $newDoc_management = Doc_management::create([
           
            'exception' =>  $request->exception,
            't_carga' => $request->t_carga,
            'content' => $request->content,
            'units' =>  $request->units,
            'unit_weight' => $request->unit_weight,
            'length' => $request->length,
            'width' =>  $request->width,
            'height' => $request->height,
            'commercial_value' => $request->commercial_value,
        ]);
        return $newDoc_management;
    }


    public function update(Request $request, $id) {

        try {

            $request->validate([
                'exception' => 'Exists:type_exceptions,id',
                't_carga' => 'Exists:type_contents,id',
                'content' => 'string|max:30',
                'units' => 'string|max:30',
                'unit_weight' => 'string|max:30',
                'length' => 'string|max:30',
                'width' => 'string|max:30',
                'height' => 'string|max:30',
                'commercial_value' => 'string|max:30',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
        try {
            $Doc_management = Doc_management::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Doc_management not found'], 404);
        }
        $Doc_management->content = $request->content;
        $Doc_management->t_carga = $request->t_carga;
        $Doc_management->units = $request->units; 
        $Doc_management->unit_weight = $request->unit_weight;
        $Doc_management->exception = $request->exception;
        $Doc_management->length = $request->length; 
        $Doc_management->width = $request->width;
        $Doc_management->height = $request->height;
        $Doc_management->commercial_value = $commercial_value->units; 
        $Doc_management->save();
        return $Doc_management;
    }

    public function destroy($id) {
        try {
            $Doc_management = Doc_management::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Doc_management not found'], 404);
        }
        $Doc_management->delete();
        return response()->json(['message' => 'Doc_management deleted'], 200);
    }
}
