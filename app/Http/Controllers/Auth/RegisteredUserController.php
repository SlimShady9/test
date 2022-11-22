<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

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
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'surname' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'doc' => 'required|string|max:255',
            'signature' => 'string|max:255',
            'phone' => 'required|string|max:20',
            'cellphone' => 'required|string|max:25',
            'notif' => 'string|max:2',
            't_user' => 'integer',
            'data' => 'string|max:255',

        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'surname' => $request->surname,
            'username' => $request->username,
            'doc' => $request->doc,
            'signature' => $request->signature,
            'phone' => $request->phone,
            'cellphone' => $request->cellphone,
            'notif' => $request->notif,
            't_user' => $request->t_user,
            'data' => $request->data,
        ]);


        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
