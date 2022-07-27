<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParamTypeService extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_t_service',
        'id_param',    
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
