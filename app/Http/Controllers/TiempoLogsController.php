<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\tiempoLogs;
use App\Models\Parameter;


class TiempoLogsController extends Controller
{
    public function index()
    {
        return tiempoLogs::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Parameter::where('table', 'tiempo_logs')->get();
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
                'start_date' => 'date',
                'end_date' => 'date',
                
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }

        $newAddress = tiempoLogs::create([
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
        ]);

        return $newAddress;


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return tiempoLogs::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return tiempoLogs::find($id);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'end_date' => 'date'
            ]);
        $address = tiempoLogs::find($id);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
        try {
            $address = tiempoLogs::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Address not found'], 404);
        }
        $address->end_date = $request->end_date;
        $address->save();
        return $address;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $address = tiempoLogs::findorfail($id);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Address not found'], 404);
        }
        $address->delete();
        return response()->json(['message' => 'Address deleted'], 200);
    }
    public function lastTime() {
        $servicesxTimeRange = DB::select("select  tl.id from tiempo_logs tl where end_date is null order by tl.id desc limit 1");
        return $servicesxTimeRange;
    }
}
