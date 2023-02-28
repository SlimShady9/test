<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'tracking_id',
        'id_state_service',
        'id_type_service',
        'created_date',
        'start_date',
        'description',
        'price',
        'cost',
        'archive',
        'address',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function save(array $options = [])
    {
        $this->tracking_id = $this->generateTrackingId();
        parent::save($options);
    }

    public function generateTrackingId()
    {
        $trackingId = '';
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        for ($i = 0; $i < 12; $i++) {
            $trackingId .= $characters[rand(0, $charactersLength - 1)];
        }
        return $trackingId;
    }
}
