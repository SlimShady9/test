<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'tracking_id',
        'name',
        'id_state_service',
        'id_t_service',
        'date',
        'description',
        'price',
        'id_address',
        'data',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
