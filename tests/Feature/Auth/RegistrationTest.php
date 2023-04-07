<?php

namespace Tests\Feature\Auth;

use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_screen_can_be_rendered()
    {
        $response = $this->get('/register');

        $response->assertStatus(200);
    }

    public function test_new_users_can_register()
    {
        $response = $this->post('/register', [
            'name' => 'Test User',
            'surname' => 'Test',
            'username' => 'testUser',
            'doc' => 'null',
            'phone' => '3212223455',
            'cellphone' => '3222222222',
            'email' => 'test@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
            'id_t_user' => 1,
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    }
}
