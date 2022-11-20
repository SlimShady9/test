<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Parameter;
use App\Models\User;

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
        User::create([
            'name' => 'Admin',
            'email' => 'slim.shady99q@gmail.com',
            'password' => bcrypt('Plumitas122302'),
            'id_t_user' => 1,
            'id_t_doc' => 1,
            'username' => 'admin',
            'surname' => 'admin',
            'doc' => '1019152187',
            'phone' => '3178874957',
            'cellphone' => '3178874957',
        ]);
    }
}
