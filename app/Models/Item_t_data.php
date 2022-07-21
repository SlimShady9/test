<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item_t_data extends Model
{
    use HasFactory;
    protected $fillable = [
        'name_item_data',
     
        
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
