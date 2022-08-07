<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Model\ParamTypeService;
use App\Model\Item;
use App\Model\ItemSet;

class ParameterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create Parameters
        \App\Models\Parameter::create([
            'label' => 'Precio',
            'name' => 'price',
            'type' => 'input',
            'required' => true,
        ]);

        \App\Models\Parameter::create([
            'label' => 'Descripción',
            'name' => 'description',
            'type' => 'input',
            'required' => true,
        ]);

        \App\Models\Parameter::create([
            'label' => 'Name',
            'name' => 'name',
            'type' => 'input',
            'required' => true,
        ]);

        \App\Models\Parameter::create([
            'label' => 'Fecha',
            'name' => 'date',
            'type' => 'date',
            'required' => true,
        ]);


    }
}
