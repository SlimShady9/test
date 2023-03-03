<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        't_carga',
        'units',
        'unit_weight',
        'length',
        'width',
        'height',
        'commercial_value',
        'id_exception',
        'service',
    ];

}
