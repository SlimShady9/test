<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doc_management extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_service',
        'doc_type',
        'avarage_docs',
    ];


}
