<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Param_t_service extends Model
{
    use HasFactory;
    protected $fillable = [
        'data_t_id',
        't_service_id',
     
        
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
