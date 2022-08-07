<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Model\Parameter;

class ParameterSeeder extends Seeder
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
        ]);

        Parameter::create([
            'label' => 'Descripción',
            'name' => 'description',
            'type' => 'input',
            'required' => true,
        ]);

        Parameter::create([
            'label' => 'Name',
            'name' => 'name',
            'type' => 'input',
            'required' => true,
        ]);

        Parameter::create([
            'label' => 'Fecha',
            'name' => 'date',
            'type' => 'date',
            'required' => true,
        ]);

        Parameter::create([
            'label' => 'Nombre',
            'name' => 'name',
            'type' => 'input',
            'required' => false,
        ]);

        Parameter::create([
            'label' => 'Pais',
            'name' => 'country',
            'type' => 'select',
            'required' => false,
        ]);
        
        Parameter::create([
            'label' => 'Region',
            'name' => 'region',
            'type' => 'select',
            'required' => false,
        ]);

        Parameter::create([
            'label' => 'Ciudad',
            'name' => 'city',
            'type' => 'sele',
            'required' => false,
        ]);

        Parameter::create([
            'label' => 'Calle',
            'name' => 'street',
            'type' => 'input',
            'required' => true,
        ]);

        Parameter::create([
            'label' => 'Detalles de la dirección',
            'name' => 'addr_detail',
            'type' => 'input',
            'required' => false,
        ]);

    }
}
