<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\ServiceSeeder;
use Database\Seeders\AddressSeeder;
use Database\Seeders\UserSeeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Tipos de servicios
        \App\Models\TypeService::create([
            'name' => 'Correspondencia',
        ]);
        \App\Models\TypeService::create([
            'name' => 'Mensajería especializada',
        ]);
        \App\Models\TypeService::create([
            'name' => 'Mensajería masiva',
        ]);
        \App\Models\TypeService::create([
            'name' => 'Mensajería internacional',
        ]);
        \App\Models\TypeService::create([
            'name' => 'Logística de mensajería',
        ]);
        \App\Models\TypeService::create([
            'name' => 'Gestión documental',
        ]);
        // Estados de los servicios
        \App\Models\StateService::create([
            'name' => 'En proceso',
        ]);
        \App\Models\StateService::create([
            'name' => 'Finalizado',
        ]);
        \App\Models\StateService::create([
            'name' => 'Cancelado',
        ]);
        \App\Models\StateService::create([
            'name' => 'Rechazado',
        ]);
        \App\Models\StateService::create([
            'name' => 'Pendiente',
        ]);
        //Tipo de usuario
        \App\Models\T_user::create([
            'name' => 'Administrador',
        ]);
        \App\Models\T_user::create([
            'name' => 'Coordinador',
        ]);
        \App\Models\T_user::create([
            'name' => 'Mensajero',
        ]);
        \App\Models\T_user::create([
            'name' => 'Cliente',
        ]);
        //Tipo de documento
        \App\Models\T_document::create([
            'name' => 'Cédula',
            'length' => '11'
        ]);
        \App\Models\T_document::create([
            'name' => 'Pasaporte',
            'length' => '20'
        ]);
        \App\Models\T_document::create([
            'name' => 'Cédula de extranjeria',
            'length' => '11'
        ]);

        \App\Models\State_task::create([
            'name' => 'Creado',
        ]);
        \App\Models\State_task::create([
            'name' => 'Hecho',
        ]);
        \App\Models\State_task::create([
            'name' => 'Pendiente',
        ]);
        \App\Models\State_task::create([
            'name' => 'Aplazado',
        ]);
        
        // Seeder para crear servicios
        $addr = new AddressSeeder();
        $addr->run();
        $service = new ServiceSeeder();
        $service->run();
        $user = new UserSeeder();
        $user->run();
    }
}
