<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\Parameter;


use Barryvdh\Debugbar\Facade as Debugbar;
class TaskController extends Controller
{
    public function index() {
        return Task::all();
    }

    public function show($id) {

        return Task::find($id);
    }

    public function store(Request $request) {

        try {

            $request->validate([
                'name' => 'required|string|max:30',
                'entity' => 'required|string|max:30',
                'dependency' => 'required|string|max:255',
                'id_state' => 'required|Exists:state_tasks,id',
                'id_address' => 'Exists:addresses,id',
                'id_service' => 'required|Exists:services,id',
                'desc' => 'required|string|max:255',
                'responsible' => 'required|Exists:users,id',
                'limit_date' => 'required|date',
                'last_state_date' => 'required|date',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }
        
        $newTask = Task::create([
            'name' => $request->name,
            'entity' => $request->entity,
            'dependency' => $request->dependency,
            'id_state' => $request->id_state,
            'id_address' => $request->id_address,
            'id_service' =>  $request->id_service,
            'desc' => $request->desc,
            'responsible' => $request->responsible,
            'limit_date' => $request->limit_date,
            'last_state_date' => $request->last_state_date,
        ]);
        return $newTask;
    }


    public function update(Request $request, $id) {

        try {

            $request->validate([
                'name' => 'string|max:30',
                'entity' => 'string|max:30',
                'dependency' => 'string|max:255',
                'id_state' => 'Exists:state_tasks,id',
                'id_address' => 'Exists:addresses,id',
                'id_service' => 'Exists:services,id',
                'desc' => 'string|max:255',
                'responsible' => 'Exists:users,id',
                'limit_date' => 'date',
                'last_state_date' => 'date',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
        try {
            $Task = Task::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Task not found'], 404);
        }
        $Task->name = $request->name_service;
        $Task->entity = $request->entity;
        $Task->dependency = $request->dependency;
        $Task->state = $request->state; 
        $Task->address = $request->address;
        $Task->id_service = $request->id_service;
        $Task->desc = $request->desc;
        $Task->id_address = $request->id_state;
        $Task->responsible = $request->responsible; 
        $Task->limit_date = $request->limit_date;
        $Task->last_state_date = $request->last_state_date;
        $Task->save();
        return $Task;
    }

    public function destroy($id) {
        try {
            $Task = Task::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Task not found'], 404);
        }
        $Task->delete();
        return response()->json(['message' => 'Task deleted'], 200);
    }

}
