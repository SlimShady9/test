<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Messaging extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_service',
        'id_user',
        'id_address',
        'name',
        'entity',
        'charge',
        'cost_center',
        'dependency',
        'intern_order',
        'id_content',
        'transporter',
        'id_transporter_tracking',
        
    ];

}
