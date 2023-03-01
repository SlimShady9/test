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
        try {

            $request->validate([
                'name' => 'string|max:30',
                'country' => 'required|string|max:30',
                'region' => 'required|string|max:30',
                'city' => 'required|string|max:30',
                'country_iso' => 'required|string|max:30',
                'region_iso' => 'required|string|max:30',
                'city_id' => 'required|string|max:30',
                'addr' => 'required|string|max:50',
                'addr_detail' => 'string|max:255',
                'postal_code' => 'required|string|max:10',
                'neighborhood' => 'required|string|max:30',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }

        $newAddress = Address::create([
            'name' => $request->name,
            'country' => $request->country,
            'region' => $request->region,
            'city' => $request->city,
            'country_iso' => $request->country_iso,
            'region_iso' => $request->region_iso,
            'city_id' => $request->city_id,
            'addr' => $request->addr,
            'addr_detail' => $request->addr_detail,
            'postal_code' => $request->postal_code,
            'neighborhood' => $request->neighborhood,
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
        try {
        $request->validate([
            'name' => 'string|max:255',
            'country' => 'required|string',
            'region' => 'required|string',
            'city' => 'required|string',
            'country_iso' => 'required|string',
            'region_iso' => 'required|string',
            'city_id' => 'required|string',
            'street' => 'required|string',
            'addr' => 'required|string',
            'addr_detail' => 'string|max:255',
            'neighborhood' => 'required|string|max:255',
        ]);
        $address = Address::find($id);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
        try {
            $address = Address::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Address not found'], 404);
        }
        $address->name = $request->name;
        $address->country = $request->country;
        $address->region = $request->region;
        $address->city = $request->city;
        $address->country = $request->country_iso;
        $address->region = $request->region_iso;
        $address->city = $request->city_id;
        $address->street = $request->street;
        $address->addr = $request->addr;
        $address->addr_detail = $request->addr_detail;
        $address->neighborhood = $request->neighborhood;
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
        $address->delete();
        return response()->json(['message' => 'Address deleted'], 200);
    }
}
