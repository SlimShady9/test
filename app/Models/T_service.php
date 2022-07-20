<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class T_service extends Model
{
    use HasFactory;

 
    public function make_rel()
    {
        return $this->belongsTo(Service::class, 'id', 't_service_id');
    }
}
