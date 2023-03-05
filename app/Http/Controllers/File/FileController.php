<?php

namespace App\Http\Controllers\File;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use MrMadClown\LaravelMultipartResponse\Http\MultipartResponse;

class FileController extends Controller
{
    // Path of resources
    private $path = 'storage/';

    private function str_random($length)
    {
        $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
        return substr(str_shuffle(str_repeat($alphabet, $length)), 0, $length);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json("Metodo no implementado", 404);
    }

    /**
     * Store a newly created resource in storage.
     *
     * Es necesario tener cuidado con dejar archivos
     * que no tienen referencia en ningun lado del sistema
     * Ocupan espacio y la unica forma de eliminarlos es a traves
     * de un tecnico
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $path = $this->path;
        $file = $request->file('file');
        $extension = $file->getClientOriginalExtension();

        // Generate a random name for the file with 30 characters
        $name = $this->str_random(30);
        
        
        // Change file name to avoid duplicates
        $res = $path. $name . '.' . $extension;
        Storage::disk('public')->put($res, file_get_contents($file));
        return response()->json(['success' => 'File uploaded successfuly', 'name' => $name.'.'.$extension], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $path = $this->path;
        if (!Storage::disk('public')->exists($path.$id)) {
            return response()->json(['message' => 'File not found'], 404);
        }
        $file = Storage::disk('public')->get($path.$id);
        // Return the file as octect stream
        return response($file, 200)->header('Content-Type', 'application/octet-stream');
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
        return response()->json("Metodo no implementado", 404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $path = $this->path;
        if (!Storage::disk('public')->exists($path.$id)) {
            return response()->json(['message' => 'File not found'], 404);
        }
        Storage::disk('public')->delete($path.$id);
        return response()->json(['success' => 'File deleted successfuly'], 200);
    }

    
}
