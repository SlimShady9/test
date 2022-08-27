<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
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
        User::create([
            'name' => 'Admin',
            'email' => 'slim.shady99q@gmail.com',
            'password' => bcrypt('Plumitas122302'),
            'username' => 'admin',
            'surname' => 'admin',
            'doc' => '1019152187',
            'phone' => '3178874957',
            'cellphone' => '3178874957',
        ]);
    }
}
