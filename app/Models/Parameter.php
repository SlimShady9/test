<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parameter extends Model
{
    use HasFactory;

    protected $fillable = [
        'label',
        'name',
        'type',
        'required',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
