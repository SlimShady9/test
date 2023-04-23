<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Notifications\EmailConfirmation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Illuminate\Auth\Events\Verified;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:50',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required', 'confirmed',
            'surname' => 'required|string|max:50 ',
            'username' => 'required|string|max:15',
            'doc' => 'required|string|max:30',
            'phone' => 'required|string|max:30',
            'id_t_user' => 'required',
            'id_t_doc' => 'required',
            'cellphone' => 'required|string|max:30'
            ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'surname' => $request->surname,
            'username' => $request->username,
            'doc' => $request->doc,
            'id_t_doc' => $request->id_t_doc,
            'id_t_user' => $request->id_t_user,
            'phone' => $request->phone,
            'cellphone' => $request->cellphone
        ]);

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
