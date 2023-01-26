<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logistic extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_service',
        'has_logistic_bases',
        'needs_complete_service',
    ];


}
