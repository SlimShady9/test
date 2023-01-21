<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Doc_management;
use App\Models\Parameter;

class DocManagementController extends Controller
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
                'id_service' => 'required|Exists:services,id',
                'doc_type' => 'required|Exists:type_documents,id',
                'avarage_docs' => 'required|string|max:255',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
        
        $newDoc_management = Doc_management::create([
           
            'id_service' =>  $request->id_service,
            'doc_type' => $request->doc_type,
            'avarage_docs' => $request->avarage_docs,
        ]);
        return $newDoc_management;
    }


    public function update(Request $request, $id) {

        try {

            $request->validate([
                'id_service' => 'Exists:services,id',
                'doc_type' => 'Exists:type_documents,id',
                'avarage_docs' => 'string|max:255',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
        try {
            $Doc_management = Doc_management::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Doc_management not found'], 404);
        }
        $Doc_management->id_service = $request->id_service;
        $Doc_management->doc_type = $request->doc_type;
        $Doc_management->avarage_docs = $request->avarage_docs; 
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
