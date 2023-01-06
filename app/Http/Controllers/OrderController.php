<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Parameter;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Order::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return [];
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
                'id_user' => 'Exists:users,id',
                'id_service' => 'Exists:services,id',
                'rol' => 'string|max:30',
                'status' => 'required|string|max:30',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }

        $newOrder = Order::create([
            'id_user' => $request->id_user,
            'id_service' => $request->id_service,
            'rol' => $request->rol,
            'status' => $request->status,
        ]);

        return $newOrder;
    }

    /**
     * Display the specified resource by service id.
     *
     * @param  \App\Models\Order  $action
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Order::where('id_service', $id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $action
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $action)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Action  $action
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // TODO:: Validate logic for making and update of order
        // When can an order be updated?
        // What values will be updated?
        return response()->json(['error' => 'Not implemented'], 501);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $action
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $ids = $this->show($id)->pluck('id');
            $orders = Order::destroy($ids);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Order not found'], 404);
        }
        return response()->json(['message' => 'Order deleted'], 200);
    }
}
