<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
            'name' => 'Envío',
        ]);
        \App\Models\TypeService::create([
            'name' => 'Correspondencia',
        ]);
        \App\Models\TypeService::create([
            'name' => 'Coordinación de mensajería',
        ]);
        \App\Models\TypeService::create([
            'name' => 'Mandado',
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
        

    }
}
