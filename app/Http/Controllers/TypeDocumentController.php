<?php

namespace App\Http\Controllers;

use App\Models\Type_document;
use App\Models\Parameter;
use Illuminate\Http\Request;

class TypeDocumentController extends Controller
{
  /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index()
        {
            return Type_document::all();
        }
    
        /**
         * Show the form for creating a new resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function create()
        {
            return Parameter::where('table', 'type_document')->get();
        }
    
        /**
         * Store a newly created resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @return \Illuminate\Http\Response
         */
        public function store(Request $request)
        {
            try {
    
                $request->validate([
                    'name' => 'required|string|max:30',
    
                ]);
                
            } catch (\Illuminate\Validation\ValidationException $e) {
                return response()->json(['error' => $e->getMessage()], 403);
            }
            
            $newTdocument = Type_document::create([
                'name' => $request->name,
            ]);
            return $newTdocument;
        }
    
        /**
         * Display the specified resource.
         *
         * @param  \App\Models\T_action  $t_action
         * @return \Illuminate\Http\Response
         */
        public function show($id)
        {
            return Type_document::find($id);
        }
    
        /**
         * Show the form for editing the specified resource.
         *
         * @param  \App\Models\Type_document  $t_action
         * @return \Illuminate\Http\Response
         */
        public function edit(Type_document $t_action)
        {
            //
        }
    
        /**
         * Update the specified resource in storage.
         *
         * @param  \Illuminate\Http\Request  $request
         * @param  \App\Models\T_action  $t_action
         * @return \Illuminate\Http\Response
         */
        public function update(Request $request, $id)
        {
            try {
                $request->validate([
                    'name' => 'required|string|max:30',
                ]);
                $Tdocument = Type_document::find($id);
                    
                } catch (\Illuminate\Validation\ValidationException $e) {
                    return response()->json(['error' => $e->getMessage()], 422);
                }
                try {
                    $Tdocument = Type_document::findOrFail($id);
                } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
                    return response()->json(['error' => 'User not found'], 404);
                }
               
                $Tdocument->name = $request->name;
                $Tdocument->save();
                return $Tdocument;
        }
    
        /**
         * Remove the specified resource from storage.
         *
         * @param  \App\Models\T_action  $t_action
         * @return \Illuminate\Http\Response
         */
        public function destroy($id)
        {
            try {
                $Tdocument = Type_document::findOrFail($id);
            } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
                return response()->json(['error' => 'Tdocument not found'], 404);
            }
            $Tdocument->delete();
            return response()->json(['message' => 'Tdocument deleted'], 200);
        }
}
