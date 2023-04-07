<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use App\Models\User;
use Illuminate\Auth\Notifications\VerifyEmail;

class EmailConfirmation extends VerifyEmail
{
    use Queueable;


    public $user;
    

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {

        return (new MailMessage)
            //->logo($logoUrl, 200)
            ->subject('Solicitud de validación correo electronico')
            ->greeting('Querido usuario ' . $this->user->username)
            ->line('Para validar su cuenta por favor haga click en el siguiente boton') // Here are the lines you can safely override
            ->action('Validar cuenta', $this->verificationUrl($notifiable))
            ->line('Si no solicito un reinicio de contraseña ignore este correo');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
