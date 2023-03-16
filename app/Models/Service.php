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
        'end_date',
        'description',
        'price',
        'cost',
        'archive',
        'address',
        'id_exception',
        'signature',
        'state'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function save(array $options = [])
    {
        if($this->tracking_id == null){
            $this->tracking_id = $this->generateTrackingId();
        }
        if($this->state == null){
            $this->state = 1;
        }
        parent::save($options);
        parent::save(state);
    }

    public function generateTrackingId()
    {
        $trackingId = '';
        $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        for ($i = 0; $i < 12; $i++) {
            $trackingId .= $characters[rand(0, $charactersLength - 1)];
        }
        return $trackingId;
    }
}
