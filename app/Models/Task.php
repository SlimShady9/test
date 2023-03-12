<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'entity',
        'name',
        'dependency',
        'id_state',
        'id_address',
        'id_service',
        'desc',
        'responsible',
        'limit_date',
        'last_state_date',
        
    ];

    // OnUpdate -> trigger AfterUpdate
    public function save(array $options = [])
    {
        // Check if all tasks related with this service are completed
        // If yes, change service state to completed
        parent::save($options);
        $service = Service::find($this->id_service);
        $tasks = Task::where('id_service', $service->id)->get();
        $allCompleted = true;
        foreach ($tasks as $task) {
            if ($task->id_state != 3) {
                $allCompleted = false;
            }
            print($task->id_state);
        }
        if ($allCompleted) {
            $service->end_date = now('-5');
            $service->id_state_service = 3;
            $service->save();
        }
        
    }

}
