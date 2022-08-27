<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class T_document extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'leght'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
