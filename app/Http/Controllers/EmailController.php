<?php
 
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\OrderShipped;
use Illuminate\Mail\Message;
use App\Models\Email;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Notifications\AnonymousNotifiable;
use App\Notifications\PQRSNotification;

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
        $notifiable = new AnonymousNotifiable;
        $idServicio = Service::find(request()->servicio)->pluck('tracking_id');

        
        $data = [
            'comentario' => request()->comentario,
            'usuario' => request()->tUsuario . ' '.request()->usuario,
            'estado' => request()->stateService,
            'idServicio' => $idServicio,
            'comentario' => request()->comentario,
        ];

        

        $notifiable->route('mail', 'slim.shady99q@gmail.com')
            ->notify(new PQRSNotification($data));
        
    }
}