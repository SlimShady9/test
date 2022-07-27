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
        //\App\Models\User::factory(10)->create();

        /*\App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('secret'),
        ]); 
        
        \App\Models\T_service::factory(3)->create();
        \App\Models\Service::factory(3)->create([
            'name_service' => fake()->name(),
            'price_service' => fake()->numberBetween(100, 1000),
            't_service_id' => \App\Models\T_service::all()->random()->id,
        ]);
        */
    }
}
