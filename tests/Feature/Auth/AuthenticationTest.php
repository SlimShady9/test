<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function test_login_screen_can_be_rendered()
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }

    public function test_users_can_authenticate_using_the_login_screen()
    {

        $user = User::factory()->create([
            'password' => bcrypt('password123'),
        ]);
        
        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => 'password123',
        ]);
        
        $response->assertRedirect(RouteServiceProvider::HOME);
        
        // Check if the user is authenticated
        if (is_string(config('auth.defaults.guard'))) {
            $this->assertAuthenticated(config('auth.defaults.guard'));
        } else {
            $this->assertAuthenticated();
        }
    }

    public function test_users_can_not_authenticate_with_invalid_password()
    {

        $user = User::factory()->create();

        $this->post('/login', [
            'email' => $user->email,
            'password' => 'wrong-password',
        ]);

        $this->assertGuest();
    }
}
