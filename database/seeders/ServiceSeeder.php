<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Parameter;

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
            'label' => 'Precio',
            'name' => 'price',
            'type' => 'input',
            'required' => true,
            'table' => 'services',
        ]);

        Parameter::create([
            'label' => 'Descripción',
            'name' => 'description',
            'type' => 'input',
            'required' => true,
            'table' => 'services',
        ]);

        Parameter::create([
            'label' => 'Nombre',
            'name' => 'name',
            'type' => 'input',
            'required' => true,
            'table' => 'services',
        ]);

        Parameter::create([
            'label' => 'Fecha',
            'name' => 'date',
            'type' => 'date',
            'required' => true,
            'table' => 'services',
        ]);

    }
}
