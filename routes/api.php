<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EnvioController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\File\PhotoUserController;
use App\Http\Controllers\TActionController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ActionController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\TDocumentController;
use App\Http\Controllers\TUserController;
use App\Http\Controllers\ServiceUserController;

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

Route::resource('service', ServiceController::class);

Route::resource('user', UserController::class);

Route::resource('service.user', ServiceUserController::class);


Route::resource('address', AddressController::class);

Route::resource('action', ActionController::class);

Route::resource('t_action', TActionController::class);

Route::resource('permission', PermissionController::class);


Route::resource('order', OrderController::class);

Route::resource('tdocument', TDocumentController::class);
Route::resource('tuser', TUserController::class);

// Tal vez con resource no se deba hacer el get, put, post, delete. Pero no sé
Route::get('/user/{user_id}/profileimg', [PhotoUserController::class, 'profileimg']);
Route::post('/user/{user_id}/profileimg', [PhotoUserController::class, 'uploadprofileimg']);
Route::delete('/user/{user_id}/profileimg', [PhotoUserController::class, 'deleteprofileimg']);
