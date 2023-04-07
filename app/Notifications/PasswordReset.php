<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PasswordReset extends Notification
{
    use Queueable;

    /**
     * The password reset token.
     *
     * @var string
     */
    public $token;
    public $nombreUsuario;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($token, $nombreUsuario)
    {
        $this->token = $token;
        $this->nombreUsuario = $nombreUsuario;
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
            ->subject('Solicitud de reinicio de contraseña')
            ->greeting('Querido usuario ' . $this->nombreUsuario)
            ->line('Hemos recibido tu solicitud de reinicio de contraseña') // Here are the lines you can safely override
            ->action('Reiniciar Contraseña', url('reset-password', $this->token))
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
