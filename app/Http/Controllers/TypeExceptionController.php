<?php

namespace App\Http\Controllers;

use App\Models\Type_Exception;
use App\Models\Parameter;
use Illuminate\Http\Request;

class TypeExceptionController extends Controller
{
 /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Type_Exception::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Parameter::where('table', 'type_exception')->get();
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
        
        $newTexception = Type_Exception::create([
            'name' => $request->name,
        ]);
        return $newTexception;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Type_exception  $Texception
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Type_Exception::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Type_exception  $Texception
     * @return \Illuminate\Http\Response
     */
    public function edit(Type_exception $Texception)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Type_exception  $Texception
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:30',
            ]);
            $Texception = Type_exception::find($id);
                
            } catch (\Illuminate\Validation\ValidationException $e) {
                return response()->json(['error' => $e->getMessage()], 422);
            }
            try {
                $Texception = Type_exception::findOrFail($id);
            } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
                return response()->json(['error' => 'User not found'], 404);
            }
           
            $Texception->name = $request->name;
            $Texception->save();
            return $Texception;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Type_exception  $Texception
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $Texception = Type_Exception::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Type_exception not found'], 404);
        }
        $Texception->delete();
        return response()->json(['message' => 'Type_exception deleted'], 200);
    }
}
