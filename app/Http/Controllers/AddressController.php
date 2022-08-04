<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Address;

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
                'country' => 'required|string|max:30',
                'region' => 'required|string|max:30',
                'city' => 'required|string|max:30',
                'street' => 'required|string|max:30',
                'addr' => 'required|string|max:50',
                'addr_detail' => 'required|string|max:30',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }

        $newAddress = Address::create([
            'name' => $request->name,
            'country' => $request->country,
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
                'name' => 'string|max:30',
                'country' => 'string|max:30',
                'region' => 'string|max:30',
                'city' => 'string|max:30',
                'street' => 'string|max:30',
                'addr' => 'string|max:50',
                'addr_detail' => 'string|max:30',
            ]);
            
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
            $address = Address::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Service not found'], 404);
        }
        $address->delete();
        return response()->json(['message' => 'Address deleted'], 200);
    }

    public function requestService() {
    }
}
