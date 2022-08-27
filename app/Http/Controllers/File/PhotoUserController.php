<?php

namespace App\Http\Controllers\File;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\User;

class PhotoUserController extends Controller
{
    private $path = 'profileimg/';


    public function profileimg($user_id)
    {
        $user = User::find($user_id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        if (!$user->picture) {
            return response()->json(['message' => 'User has no picture'], 404);
        }
        if (!Storage::disk('public')->exists($user->picture)) {
            return response()->json(['message' => 'File not found'], 404);
        }
        $file = Storage::disk('public')->get($user->picture);
        return response($file, 200)->header('Content-Type', 'image/'. pathinfo($user->picture, PATHINFO_EXTENSION));

    }

    public function uploadprofileimg($user_id, Request $request)
    {
        $path = $this->path;
        $file = $request->file('file');

        // Get image type
        $extension = $file->getClientOriginalExtension();
        // Change file name to avoid duplicates
        $fileName = $file->getClientOriginalName();
        $name = $path. $user_id . '.' . $extension;
        $user = User::find($user_id);
        if ($user->picture) {
            Storage::disk('public')->delete($user->picture);
        }
        Storage::disk('public')->put($name, file_get_contents($file));
        $user->picture = $name;
        $user->save();
        return response()->json(['success' => 'File uploaded successfuly'], 200);

    }

    public function deleteprofileimg($user_id)
    {
        $img = User::where('id', $user_id)->first()->picture;
        if ($img) {
            Storage::disk('public')->delete($img);
            User::where('id', $user_id)->update(['picture' => null]);
            return response()->json(['success' => 'File deleted successfuly'], 200);
        } else {
            return response()->json(['error' => 'Image not found'], 404);
        }
    }
}
