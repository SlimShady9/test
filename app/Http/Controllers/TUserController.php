<?php

namespace App\Http\Controllers;

use App\Models\T_user;
use App\Models\Parameter;
use Illuminate\Http\Request;

class TUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return T_user::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()->json(['error' => 'Not implemented'], 501);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Return error code not implemented
        return response()->json(['error' => 'Not implemented'], 501);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\T_user  $t_action
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return T_user::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\T_user  $t_action
     * @return \Illuminate\Http\Response
     */
    public function edit(T_user $t_action)
    {
        return response()->json(['error' => 'Not implemented'], 501);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\T_user  $t_action
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return response()->json(['error' => 'Not implemented'], 501);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\T_user  $t_action
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return response()->json(['error' => 'Not implemented'], 501);

    }
}
