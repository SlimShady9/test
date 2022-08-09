<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Address;
use App\Models\Parameter;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        return Address::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Parameter::where('table', 'addresses')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'string|max:255',
            'county' => 'required|string',
            'region' => 'required|string',
            'city' => 'required|string',
            'street' => 'required|string',
            'addr' => 'required|string',
            'addr_detail' => 'required|string|max:255',
        ]);

        $newAddress = Address::create([
            'name' => $request->name,
            'county' => $request->county,
            'region' => $request->region,
            'city' => $request->city,
            'street' => $request->street,
            'addr' => $request->addr,
            'addr_detail' => $request->addr_detail,
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
        return Address::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Address::find($id);

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
        $request->validate([
            'name' => 'string|max:255',
            'county' => 'required|string',
            'region' => 'required|string',
            'city' => 'required|string',
            'street' => 'required|string',
            'addr' => 'required|string',
            'addr_detail' => 'required|string|max:255',
        ]);
        $address = Address::find($id);
        $address->name = $request->name;
        $address->county = $request->county;
        $address->region = $request->region;
        $address->city = $request->city;
        $address->street = $request->street;
        $address->addr = $request->addr;
        $address->addr_detail = $request->addr_detail;
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
            $address = Address::findorfail($id);
            $address->delete();
            return response()->json(['message' => 'Address deleted successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Address not found'], 404);
        }
    }
}
