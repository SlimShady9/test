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

Route::resource('envio', EnvioController::class);

Route::resource('service', ServiceController::class)->names([
    'index' => 'service.index',
    'show' => 'service.show',
    'store' => 'service.store',
    'update' => 'service.update',
    'destroy' => 'service.destroy',
]);

Route::resource('user', UserController::class)->names([
    'index' => 'user.index',
    'show' => 'user.show',
    'store' => 'user.store',
    'update' => 'user.update',
    'destroy' => 'user.destroy',
    'create' => 'user.create',
    'edit' => 'user.edit',
]);


Route::resource('address', AddressController::class)->names([
    'index' => 'address.index',
    'show' => 'address.show',
    'store' => 'address.store',
    'update' => 'address.update',
    'destroy' => 'address.destroy',
    'edit' => 'address.edit',
]);

// Tal vez con resource no se deba hacer el get, put, post, delete. Pero no sé
Route::get('/user/{user_id}/profileimg', [PhotoUserController::class, 'profileimg']);
Route::post('/user/{user_id}/profileimg', [PhotoUserController::class, 'uploadprofileimg']);
Route::delete('/user/{user_id}/profileimg', [PhotoUserController::class, 'deleteprofileimg']);
Route::put('/user/{user_id}/profileimg', [PhotoUserController::class, 'updateprofileimg']);