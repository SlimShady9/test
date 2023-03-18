<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\T_user;
use App\Models\T_document;
use App\Models\Parameter;
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
        $name = $request->query('name');
        $state = $request->query('state');

        return User::query()
            ->whereIn('id_t_user', $id_t_user == '' ? T_user::all()->pluck('id') : [$id_t_user])
            ->where('name', 'like', '%' . $name . '%')
            ->where('state', '=', $state)
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
            'cellphone' => $request->cellphone
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
        $parameter = User::findOrFail($id);
        $parameters = [
            [
                'label' => 'Nombre de usuario',
                'name' => 'username',
                'type' => 'text',
                'required' => true,
                'table' => 'users',
                'value' => $parameter->username,
                'alpaNumeric' => true,
                'minLenght' => 8,
                'maxLenght' => 15,
            ],
            [
                'label' => 'Nombre',
                'name' => 'name',
                'type' => 'text',
                'required' => true,
                'value' => $parameter->name,
                'onlyLetters' => true,
                'minLenght' => 3,
                'maxLenght' => 50,
            ],
            [
                'label' => 'Apellido',
                'name' => 'surname',
                'type' => 'text',
                'required' => true,
                'value' => $parameter->surname,
                'onlyLetters' => true,
                'minLenght' => 3,
                'maxLenght' => 50,
            ],
            [
                'label' => 'Correo electronico',
                'name' => 'email',
                'type' => 'text',
                'required' => true,
                'value' => $parameter->email,
                'email' => true,
            ],
            [
                'label' => 'Documento',
                'name' => 'doc',
                'type' => 'text',
                'required' => true,
                'value' => $parameter->doc,
                'onlyNumbers' => true,
                'minLenght' => 4,
                'maxLenght' => 30,
            ],
            [
                'label' => 'Telefono',
                'name' => 'phone',
                'type' => 'text',
                'required' => true,
                'value' => $parameter->phone,
                'onlyNumbers' => true,
                'minLenght' => 4,
                'maxLenght' => 20,
            ],
            [
                'label' => 'Celular',
                'name' => 'cellphone',
                'type' => 'text',
                'required' => true,
                'value' => $parameter->cellphone,
                'onlyNumbers' => true,
                'minLenght' => 4,
                'maxLenght' => 30,
            ],
        ];
        
        $options = [
            'type' => 'select',
            'label' => 'Tipo de usuario',
            'name' => 'id_t_user',
            'options' => [],
            'value' => [],
            'required' => true,
        ];

        $typesU = T_user::all();
        foreach ($typesU as $typesU) {
            if($typesU->id == $parameter->id_t_user){
                array_push($options['value'],[
                    'label' => $typesU->name,
                    'value' => $typesU->id,
                ]);
            }
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
            'value' => [],
            'required' => true,
        ];
        foreach ($typeD as $typeD) {
            if($typeD->id == $parameter->id_t_doc){
                array_push($optionsD['value'], [
                    'label' => $typeD->name,
                    'value' => $typeD->id,
                ]);
            }
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
            'email' => 'required|email|max:255',
            'username' => 'required|string|max:15',
            'doc' => 'required|string|max:30',
            'phone' => 'required|string|max:20',
            'cellphone' => 'required|string|max:30',
            //'notif' => 'max:2',
            //'data' => 'max:255',
            'id_t_user' => 'required',
            'id_t_doc' => 'required',
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
        $user->email = $request->email;
        $user->surname = $request->surname;
        $user->username = $request->username;
        $user->doc = $request->doc;
        $user->phone = $request->phone;
        $user->cellphone = $request->cellphone;
        //$user->notif = $request->notif;
        //$user->data = $request->data;
        $user->picture = $request->picture;
        $user->signature = $request->signature;
        $user->id_t_user = $request->id_t_user;
        $user->id_t_doc = $request->id_t_doc;
        if ($request->state != null) {
            $user->state = true;
        } else {
            $user->state = false;
        }
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
