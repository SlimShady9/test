<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Parameter;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Parameter::create([
            'label' => 'Nombre de usuario',
            'name' => 'username',
            'type' => 'text',
            'required' => true,
            'table' => 'users',
        ]);
        Parameter::create([
            'label' => 'Apellido',
            'name' => 'surname',
            'type' => 'text',
            'required' => true,
            'table' => 'users',
        ]);

        Parameter::create([
            'label' => 'Nombre',
            'name' => 'name',
            'type' => 'text',
            'required' => true,
            'table' => 'users',
        ]);


        Parameter::create([
            'label' => 'Correo electronico',
            'name' => 'email',
            'type' => 'text',
            'required' => true,
            'table' => 'users',
        ]);

        Parameter::create([
            'label' => 'Documento',
            'name' => 'doc',
            'type' => 'text',
            'required' => true,
            'table' => 'users',
        ]);

        Parameter::create([
            'label' => 'Telefono',
            'name' => 'phone',
            'type' => 'text',
            'required' => true,
            'table' => 'users',
        ]);

        Parameter::create([
            'label' => 'Celular',
            'name' => 'cellphone',
            'type' => 'text',
            'required' => true,
            'table' => 'users',
        ]);
    }
}
