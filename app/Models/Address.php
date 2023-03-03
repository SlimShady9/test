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
        'country_iso',
        'region_iso',
        'city_id',
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