<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EnvioController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\File\PhotoUserController;
use App\Http\Controllers\File\FileController;
use App\Http\Controllers\TActionController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ActionController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\TDocumentController;
use App\Http\Controllers\TUserController;
use App\Http\Controllers\ServiceUserController;

use App\Http\Controllers\ContentController;
use App\Http\Controllers\DocManagementController;
use App\Http\Controllers\LogisticController;
use App\Http\Controllers\MessagingController;
use App\Http\Controllers\StateTaskController;
use App\Http\Controllers\TypeContentController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TypeDocumentController;
use App\Http\Controllers\TypeExceptionController;

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

Route::resource('content', ContentController::class)->names([
    'index' => 'content.index',
    'show' => 'content.show',
    'store' => 'content.store',
    'update' => 'content.update',
    'destroy' => 'content.destroy',
    'edit' => 'content.edit',
]);

Route::resource('docManagement', DocManagementController::class)->names([
    'index' => 'docManagement.index',
    'show' => 'docManagement.show',
    'store' => 'docManagement.store',
    'update' => 'docManagement.update',
    'destroy' => 'docManagement.destroy',
    'edit' => 'docManagement.edit',
]);

Route::resource('logistic', LogisticController::class)->names([
    'index' => 'logistic.index',
    'show' => 'logistic.show',
    'store' => 'logistic.store',
    'update' => 'logistic.update',
    'destroy' => 'logistic.destroy',
    'edit' => 'logistic.edit',
]);

Route::resource('messaging', MessagingController::class)->names([
    'index' => 'messaging.index',
    'show' => 'messaging.show',
    'store' => 'messaging.store',
    'update' => 'messaging.update',
    'destroy' => 'messaging.destroy',
    'edit' => 'messaging.edit',
]);

Route::resource('stateTask', StateTaskController::class)->names([
    'index' => 'stateTask.index',
    'show' => 'stateTask.show',
    'store' => 'stateTask.store',
    'update' => 'stateTask.update',
    'destroy' => 'stateTask.destroy',
    'edit' => 'stateTask.edit',
]);

Route::resource('task', TaskController::class)->names([
    'index' => 'task.index',
    'show' => 'task.show',
    'store' => 'task.store',
    'update' => 'task.update',
    'destroy' => 'task.destroy',
    'edit' => 'task.edit',
]);

Route::resource('typeContent', TypeContentController::class)->names([
    'index' => 'typeContent.index',
    'show' => 'typeContent.show',
    'store' => 'typeContent.store',
    'update' => 'typeContent.update',
    'destroy' => 'typeContent.destroy',
    'edit' => 'typeContent.edit',
]);

Route::resource('typeDocument', TypeDocumentController::class)->names([
    'index' => 'typeDocument.index',
    'show' => 'typeDocument.show',
    'store' => 'typeDocument.store',
    'update' => 'typeDocument.update',
    'destroy' => 'typeDocument.destroy',
    'edit' => 'typeDocument.edit',
]);

Route::resource('typeException', TypeExceptionController::class)->names([
    'index' => 'typeException.index',
    'show' => 'typeException.show',
    'store' => 'typeException.store',
    'update' => 'typeException.update',
    'destroy' => 'typeException.destroy',
    'edit' => 'typeException.edit',
]);

// Tal vez con resource no se deba hacer el get, put, post, delete. Pero no sé
Route::get('/user/{user_id}/profileimg', [PhotoUserController::class, 'profileimg']);
Route::post('/user/{user_id}/profileimg', [PhotoUserController::class, 'uploadprofileimg']);
Route::delete('/user/{user_id}/profileimg', [PhotoUserController::class, 'deleteprofileimg']);

Route::post('order/multiple', [OrderController::class, 'createMultiple']);

Route::resource('file', FileController::class);
