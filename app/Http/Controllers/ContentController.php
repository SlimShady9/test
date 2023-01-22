<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Content;
use App\Models\Parameter;

class ContentController extends Controller
{
    public function index() {
        return Content::all();
    }

    public function show($id) {

        return Content::find($id);
    }

    public function store(Request $request) {

        try {

            $request->validate([
                'id_exception' => 'required|Exists:type_exceptions,id',
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
        
        $newContent = Content::create([
           
            'id_exception' =>  $request->id_exception,
            't_carga' => $request->t_carga,
            'content' => $request->content,
            'units' =>  $request->units,
            'unit_weight' => $request->unit_weight,
            'length' => $request->length,
            'width' =>  $request->width,
            'height' => $request->height,
            'commercial_value' => $request->commercial_value,
        ]);
        return $newContent;
    }


    public function update(Request $request, $id) {

        try {

            $request->validate([
                'id_exception' => 'Exists:type_exceptions,id',
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
            $Content = Content::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Content not found'], 404);
        }
        $Content->content = $request->content;
        $Content->t_carga = $request->t_carga;
        $Content->units = $request->units; 
        $Content->unit_weight = $request->unit_weight;
        $Content->id_exception = $request->id_exception;
        $Content->length = $request->length; 
        $Content->width = $request->width;
        $Content->height = $request->height;
        $Content->commercial_value = $commercial_value->units; 
        $Content->save();
        return $Content;
    }

    public function destroy($id) {
        try {
            $Content = Content::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Content not found'], 404);
        }
        $Content->delete();
        return response()->json(['message' => 'Content deleted'], 200);
    }
}