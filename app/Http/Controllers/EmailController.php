<?php
 
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\OrderShipped;
use Illuminate\Mail\Message;
use App\Models\Email;
use App\Models\Service;
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
    public function emailPqrs(Request  $request = null)
    {   
        Mail::send([], [], function (Message $message) {
            $servicio = Service::find(request()->servicio);
            $message
            ->to('juandaflorez11@gmail.com')
            ->subject('PQRs servicio '.$servicio->tracking_id)
            ->html('<h1>El usuario '. request()->usuario.' tiene el siguiente comentario sobre el servicio con el identificador de rastreo:
                    '.$servicio->tracking_id.'</h1>
                    <h1>'.request()->comentario.'</h1>');
        });
    }
}