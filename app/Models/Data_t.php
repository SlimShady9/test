<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data_t extends Model
{
    use HasFactory;

    protected $fillable = [
        'label_data',
        'name_data',
        'type_data',
        'value_data',
        'required_data',
        'item_data',
        
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
