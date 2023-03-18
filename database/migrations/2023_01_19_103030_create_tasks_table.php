<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('id_state')->unsigned();
            $table->bigInteger('id_address')->unsigned()->nullable();
            $table->bigInteger('id_service')->unsigned();
            $table->bigInteger('responsible')->unsigned();
            $table->string('entity');
            $table->string('name');
            $table->string('dependency');
            $table->string('desc')->nullable();
            $table->dateTime('limit_date');
            $table->dateTime('last_state_date');

        });

        Schema::table('tasks', function (Blueprint $table) {
            $table->foreign('id_service')->references('id')->on('services');
            $table->foreign('id_address')->references('id')->on('addresses');
            $table->foreign('id_state')->references('id')->on('state_tasks');
            $table->foreign('responsible')->references('id')->on('users');

        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
};
