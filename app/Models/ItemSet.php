<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemSet extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_parameter',
        'id_item',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
