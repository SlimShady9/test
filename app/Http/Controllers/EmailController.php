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
use App\Notifications\MainPageNotification;

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
        $notifiable = new AnonymousNotifiable;
        $idServicio = Service::where('id',$request->servicio)->first()->tracking_id;
        
        $data = [
            'comentario' => request()->comentario,
            'usuario' => request()->tUsuario . ' '.request()->usuario,
            'estado' => request()->stateService,
            'idServicio' => $idServicio,
            'comentario' => request()->comentario,
        ];

        

        $notifiable->route('mail', 'comercial@servicurrier.com')
            ->notify(new PQRSNotification($data));
        
    }

    public function emailMainPage(Request $request)
    {
        $notifiable = new AnonymousNotifiable;
        
        $data = [
            'comentario' => request()->comentario,
            'contacto' => request()->contacto,
        ];


        $notifiable->route('mail', 'comercial@servicurrier.com')
            ->notify(new MainPageNotification($data));
        // return json response
        return response()->json(['success'=>'Mensaje enviado exitosamente.']);
    }
}