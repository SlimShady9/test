<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\T_user;
use App\Models\T_document;
use App\Models\Parameter;
use Barryvdh\Debugbar\Facade as Debugbar;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $id_t_user = $request->query('id_t_user');

        return User::query()
            ->whereIn('id_t_user', $id_t_user == '' ? T_user::all()->pluck('id') : [$id_t_user])
            ->paginate();
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       $parameters = Parameter::where('table', 'users')->get();
         $typesU = T_user::all();
         $typeD = T_document::all();

         $options = [
            'type' => 'select',
            'label' => 'Tipo de usuario',
            'name' => 'id_t_user',
            'options' => [],
        ];

        foreach ($typesU as $typesU) {
            array_push($options['options'], [
                'label' => $typesU->name,
                'value' => $typesU->id,
            ]);
        }

        $optionsD = [
            'type' => 'select',
            'label' => 'Tipo de documento',
            'name' => 'id_t_doc',
            'options' => [],
        ];

        foreach ($typeD as $typeD) {
            array_push($optionsD['options'], [
                'label' => $typeD->name,
                'value' => $typeD->id,
            ]);
        }

        $parameters->push($options);
        $parameters->push($optionsD);
        
       return response()->json([
        'parameters' => $parameters,
        ], 200)->header('Content-Type', 'application/json');
}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {

            $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required', 'confirmed',
            'surname' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'doc' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'id_t_user' => 'required',
            'id_t_doc' => 'required',
            'cellphone' => 'required|string|max:25',
            'notif' => 'string|max:2',
            'data' => 'string|max:255',
            ]);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 403);
        }

        $newUser = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'surname' => $request->surname,
            'username' => $request->username,
            'doc' => $request->doc,
            'id_t_doc' => $request->id_t_doc,
            'id_t_user' => $request->id_t_user,
            'phone' => $request->phone,
            'cellphone' => $request->cellphone,
            'notif' => $request->notif,
            'data' => $request->data,
        ]);

        return $newUser;


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        Debugbar::info($id);
        $parameter = User::findOrFail($id);
        $parameters = [
            [
                'label' => 'Nombre de usuario',
                'name' => 'username',
                'type' => 'text',
                'required' => true,
                'table' => 'users',
                'value' => $parameter->username,
            ],
            [
                'label' => 'Nombre',
                'name' => 'name',
                'type' => 'text',
                'required' => true,
                'value' => $parameter->name,
            ],
            [
                'label' => 'Apellido',
                'name' => 'surname',
                'type' => 'text',
                'required' => true,
                'value' => $parameter->surname,
            ],
            [
                'label' => 'Correo electronico',
                'name' => 'email',
                'type' => 'text',
                'required' => true,
                'value' => $parameter->email,
            ],
            [
                'label' => 'Documento',
                'name' => 'doc',
                'type' => 'text',
                'required' => true,
                'value' => $parameter->doc,
            ],
            [
                'label' => 'Telefono',
                'name' => 'phone',
                'type' => 'text',
                'required' => true,
                'value' => $parameter->phone,
            ],
            [
                'label' => 'Celular',
                'name' => 'cellphone',
                'type' => 'text',
                'required' => true,
                'value' => $parameter->cellphone,
            ],
        ];
        
        $options = [
            'type' => 'select',
            'label' => 'Tipo de usuario',
            'name' => 'id_t_user',
            'options' => [],
            'value' => T_user::find($parameter->id_t_user)->name,
        ];
        $typesU = T_user::all();
        Debugbar::info($typesU);
        foreach ($typesU as $typesU) {
            array_push($options['options'], [
                'label' => $typesU->name,
                'value' => $typesU->id,
            ]);
        }
        $typeD = T_document::all();
        $optionsD = [
            'type' => 'select',
            'label' => 'Tipo de documento',
            'name' => 'id_t_doc',
            'options' => [],
            'value' => T_document::find($parameter->id_t_doc)->name,
        ];
        foreach ($typeD as $typeD) {
            array_push($optionsD['options'], [
                'label' => $typeD->name,
                'value' => $typeD->id,
            ]);
        }

        array_push($parameters, $options);
        array_push($parameters, $optionsD);

        return response()->json([
            'parameters' => $parameters,
            ], 200)->header('Content-Type', 'application/json');

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'doc' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'cellphone' => 'required|string|max:25',
            'notif' => 'string|max:2',
            'data' => 'string|max:255',
        ]);
        $user = User::find($id);
            
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
        try {
            $user = User::findOrFail($id);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'User not found'], 404);
        }
       
        $user->name = $request->name;
        $user->surname = $request->surname;
        $user->username = $request->username;
        $user->doc = $request->doc;
        $user->phone = $request->phone;
        $user->cellphone = $request->cellphone;
        $user->notif = $request->notif;
        $user->data = $request->data;
        $user->save();
        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $user = User::findorfail($id);
            $user->delete();
            return response()->json(['message' => 'User deleted successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->delete();
        return response()->json(['message' => 'User deleted'], 200);
    }
}
