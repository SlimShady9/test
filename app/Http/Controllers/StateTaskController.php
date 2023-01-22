<?php

namespace App\Http\Controllers;

use App\Models\State_Task;
use App\Models\Parameter;
use Illuminate\Http\Request;

class StateTaskController extends Controller
    {
        /**
         * Display a listing of the resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function index()
        {
            return State_Task::all();
        }
    
        /**
         * Show the form for creating a new resource.
         *
         * @return \Illuminate\Http\Response
         */
        public function create()
        {
            return Parameter::where('table', 'state_tasks')->get();
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
            
            $newTcontent = State_Task::create([
                'name' => $request->name,
            ]);
            return $newTcontent;
        }
    
        /**
         * Display the specified resource.
         *
         * @param  \App\Models\T_action  $t_action
         * @return \Illuminate\Http\Response
         */
        public function show($id)
        {
            return State_Task::find($id);
        }
    
        /**
         * Show the form for editing the specified resource.
         *
         * @param  \App\Models\Type_content  $t_action
         * @return \Illuminate\Http\Response
         */
        public function edit(State_Task $t_action)
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
                $Tcontent = Type_content::find($id);
                    
                } catch (\Illuminate\Validation\ValidationException $e) {
                    return response()->json(['error' => $e->getMessage()], 422);
                }
                try {
                    $Tcontent = Type_content::findOrFail($id);
                } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
                    return response()->json(['error' => 'User not found'], 404);
                }
               
                $Tcontent->name = $request->name;
                $Tcontent->save();
                return $Tcontent;
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
                $Tcontent = State_Task::findOrFail($id);
            } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
                return response()->json(['error' => 'Tcontent not found'], 404);
            }
            $Tcontent->delete();
            return response()->json(['message' => 'Tcontent deleted'], 200);
        }
}
