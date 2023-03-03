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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            // Column name 'tracking_id' as a unique string of 12 characters.
            $table->string('tracking_id', 12)->unique();
            $table->bigInteger('id_state_service')->unsigned();
            $table->bigInteger('id_type_service')->unsigned();
            $table->timestamp('created_date')->useCurrent();
            $table->timestamp('start_date')->useCurrent();
            $table->string('description')->nullable();
            $table->unsignedDouble('price')->nullable();
            $table->unsignedDouble('cost')->nullable();
            $table->string('archive')->nullable();
            $table->bigInteger('address')->unsigned()->nullable();
            $table->timestamps();
        });

        Schema::table('services', function (Blueprint $table) {
            $table->foreign('id_type_service')->references('id')->on('type_services');
            $table->foreign('id_state_service')->references('id')->on('state_services');
            $table->foreign('address')->references('id')->on('addresses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services');
    }
};
