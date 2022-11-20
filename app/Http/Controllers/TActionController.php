<?php

namespace App\Http\Controllers;

use App\Models\T_action;
use App\Models\Parameter;
use Illuminate\Http\Request;

class TActionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return T_action::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Parameter::where('table', 't_actions')->get();
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
        
        $newTAction = Service::create([
            'name' => $request->name,
        ]);
        return $newTAction;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\T_action  $t_action
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return T_action::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\T_action  $t_action
     * @return \Illuminate\Http\Response
     */
    public function edit(T_action $t_action)
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
            $t_action = T_action::find($id);
                
            } catch (\Illuminate\Validation\ValidationException $e) {
                return response()->json(['error' => $e->getMessage()], 422);
            }
            try {
                $t_action = T_action::findOrFail($id);
            } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
                return response()->json(['error' => 'User not found'], 404);
            }
           
            $t_action->name = $request->name;
            $t_action->save();
            return $t_action;
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
            $t_action = T_action::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'T_action not found'], 404);
        }
        $t_action->delete();
        return response()->json(['message' => 'T_action deleted'], 200);
    }
}
