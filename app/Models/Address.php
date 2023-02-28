<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'country',
        'region',
        'city',
        'street',
        'addr',
        'addr_detail',
        'postal_code',
        'neighborhood',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}