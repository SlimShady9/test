<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Parameter;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Parameter::create([
            'label' => 'Nombre',
            'name' => 'name',
            'type' => 'text',
            'required' => true,
            'table' => 'addresses',
        ]);

        Parameter::create([
            'label' => 'Pais',
            'name' => 'country',
            'type' => 'select',
            'required' => true,
            'table' => 'addresses',
        ]);


        Parameter::create([
            'label' => 'Region',
            'name' => 'region',
            'type' => 'select',
            'required' => true,
            'table' => 'addresses',
        ]);

        Parameter::create([
            'label' => 'Ciudad',
            'name' => 'city',
            'type' => 'select',
            'required' => true,
            'table' => 'addresses',
        ]);

        Parameter::create([
            'label' => 'Dirección',
            'name' => 'addr',
            'type' => 'input',
            'required' => true,
            'table' => 'addresses',
        ]);

        Parameter::create([
            'label' => 'Información adicional',
            'name' => 'addr_detail',
            'type' => 'textarea',
            'required' => true,
            'table' => 'addresses',
        ]);
    }
}
