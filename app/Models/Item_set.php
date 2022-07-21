<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item_set extends Model
{
    use HasFactory;
    protected $fillable = [
        'data_t_id',
        'item_t_id',
     
        
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
