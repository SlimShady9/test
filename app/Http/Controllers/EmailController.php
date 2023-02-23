<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use App\Mail\OrderShipped;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
 
class EmailController extends Controller
{
    /**
     * Ship the given order.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function emailPqrs(Request  $request)
    {   
        Mail::send([], [], function (Message $message) {
            $message
            ->to('gortega2001@gmail.com')
            ->subject('Order Shipped')
            ->html('<h1>HTML</h1>');
        });
    }
}