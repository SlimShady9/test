<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    protected $model = User::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => bcrypt('password'),
            'surname' => $this->faker->lastName(),
            'username' => $this->faker->userName(),
            'doc' => $this->faker->randomNumber(8),
            'id_t_doc' => $this->faker->numberBetween(1, 3),
            'id_t_user' => $this->faker->numberBetween(1, 3),
            'phone' => $this->faker->phoneNumber(),
            'cellphone' => $this->faker->phoneNumber(),
            'state' => '1',
            'email_verified_at' => now(),
        ];
    }
}
