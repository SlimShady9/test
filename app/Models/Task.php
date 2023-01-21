<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'entity',
        'name',
        'dependency',
        'state',
        'address',
        'id_service',
        'desc',
        'responsible',
        'limit_date',
        'last_state_date',
        
    ];

}
