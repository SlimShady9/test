<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'hasHeader' => true,
        'hasFooter' => true,
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/profile', function () {
    return Inertia::render('Profile', [
    'api_token' => env('API_KEY_GEO'),
    ]);
})->middleware(['auth', 'verified'])->name('profile');

Route::get('/register', function () {
    return Inertia::render('Register', [
    'api_token' => env('API_KEY_GEO'),
    ]);
})->middleware(['auth', 'verified'])->name('register');

Route::get('/regUser', function () {
    return Inertia::render('RegisterUser', [
    'api_token' => env('API_KEY_GEO'),
    ]);
})->middleware(['auth', 'verified'])->name('regUser');

Route::get('/createService', function () {
    return Inertia::render('CreateService', [
    'api_token' => env('API_KEY_GEO'),
    ]);
})->middleware(['auth', 'verified'])->name('createService');

Route::get('/deliveryProof/{id}', function ($id) {
    return Inertia::render('DeliveryProof', [
        'serviceId' => $id,
    ]);
})->middleware(['auth', 'verified'])->name('deliveryProof');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/services', function () {
    return Inertia::render('Services', [
        'api_token' => env('API_KEY_GEO'),
    ]);
})->middleware(['auth', 'verified'])->name('services');

Route::get('/users', function () {
    return Inertia::render('Users');
})->middleware(['auth', 'verified'])->name('users');

Route::get('/pqrs/{id}', function ($id) {
    return Inertia::render('Pqrs', [
        'serviceId' => $id,
    ]);
})->middleware(['auth', 'verified'])->name('pqrs');

Route::get('/editService/{id}', function ($id) {
    return Inertia::render('EditService', [
        'serviceId' => $id,
        'api_token' => env('API_KEY_GEO'),
    ]);
})->middleware(['auth', 'verified'])->name('editService');

Route::get('/envios', function () {
    return Inertia::render('Envios');
})->middleware(['auth', 'verified'])->name('envios');

Route::get('/graph', function () {
    return Inertia::render('Graph');
})->middleware(['auth', 'verified'])->name('graph');

Route::get('/sales', function () {
    return Inertia::render('Sales');
})->middleware(['auth', 'verified'])->name('sales');

require __DIR__.'/auth.php';
