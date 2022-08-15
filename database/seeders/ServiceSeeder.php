<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Parameter;
use App\Models\TypeService;
use App\Models\User;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create Service Parameters
        Parameter::create([
            'label' => 'Tipo de Servicio',
            'extend'=> 2,
            'name' => 't_service',
            'type' => 'select',
            'required' => true,
            'table' => 'services',
        ]);

        Parameter::create([
            'label' => 'Precio',
            'extend'=> 1,
            'name' => 'price',
            'type' => 'input',
            'required' => true,
            'table' => 'services',
        ]);

        Parameter::create([
            'label' => 'Descripción',
            'extend'=> 1,
            'name' => 'description',
            'type' => 'input',
            'required' => true,
            'table' => 'services',
        ]);

        Parameter::create([
            'label' => 'Nombre',
            'extend'=> 1,
            'name' => 'name',
            'type' => 'input',
            'required' => true,
            'table' => 'services',
        ]);

        Parameter::create([
            'label' => 'Fecha',
            'extend'=> 2,
            'name' => 'date',
            'type' => 'date',
            'required' => true,
            'table' => 'services',
        ]);

        TypeService::create([
            'name' => 'Envíos',
        ]);

        TypeService::create([
            'name' => 'Correspondencia',
        ]);

        TypeService::create([
            'name' => 'Gestión de Mensajería',
        ]);

        TypeService::create([
            'name' => 'Gestión de Mensajería',
        ]);
        TypeService::create([
            'name' => 'Gestión de Mensajería',
        ]);
        TypeService::create([
            'name' => 'Gestión de Mensajería',
        ]);
        TypeService::create([
            'name' => 'Gestión de Mensajería',
        ]);
        TypeService::create([
            'name' => 'Gestión de Mensajería',
        ]);
        TypeService::create([
            'name' => 'Gestión de Mensajería',
        ]);
        TypeService::create([
            'name' => 'Gestión de Mensajería',
        ]);
        TypeService::create([
            'name' => 'Gestión de Mensajería',
        ]);
        TypeService::create([
            'name' => 'Gestión de Mensajería',
        ]);
        TypeService::create([
            'name' => 'Gestión de Mensajería',
        ]);

    }
}
