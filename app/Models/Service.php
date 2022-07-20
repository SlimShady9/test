<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_service',
        'price_service',
    ];

    protected $hidden = [
        'id',
        //'t_service_id',
    ];

    public function t_service()
    {
        return $this->hasMany(T_service::class, 'id', 't_service_id');
    }
}
