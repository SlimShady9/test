<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EnvioController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\File\PhotoUserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('envios', EnvioController::class);

Route::resource('services', ServiceController::class)->names([
    'index' => 'services.index',
    'show' => 'services.show',
    'store' => 'services.store',
    'update' => 'services.update',
    'destroy' => 'services.destroy',
]);
Route::resource('user', UserController::class)->names([
    'index' => 'user.index',
    'show' => 'user.show',
    'store' => 'user.store',
    'update' => 'user.update',
    'destroy' => 'user.destroy',
]);

Route::resource('address', AddressController::class)->names([
    'index' => 'addresses.index',
    'show' => 'addresses.show',
    'store' => 'addresses.store',
    'update' => 'addresses.update',
    'destroy' => 'addresses.destroy',
    'edit' => 'addresses.edit',
]);

// Tal vez con resource no se deba hacer el get, put, post, delete. Pero no sé
Route::get('/user/{user_id}/profileimg', [PhotoUserController::class, 'profileimg']);
Route::post('/user/{user_id}/profileimg', [PhotoUserController::class, 'uploadprofileimg']);
Route::delete('/user/{user_id}/profileimg', [PhotoUserController::class, 'deleteprofileimg']);
Route::put('/user/{user_id}/profileimg', [PhotoUserController::class, 'updateprofileimg']);