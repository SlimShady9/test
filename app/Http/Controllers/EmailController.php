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
    public function emailPqrs($servicio, $comentario, $usuario)
    {   
        Mail::raw("El servicio ". $servicio." tuvo dificultades para el usuario, por favor contactar con el /n"
        ." El usuario ". $usuario . " ha tenido el siguiente comentario /n ". $comentario, function ($message) {
            $message->to('juandaflorez11@gmail.com')
              ->subject("Tiquet para el servicio ". $servicio);
          });
    }
}