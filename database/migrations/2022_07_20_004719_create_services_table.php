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
            // Column name 'tracking_id' as a unique string of 12 characters.
            $table->string('tracking_id', 12)->unique();
            $table->string('name');
            $table->bigInteger('id_state_service')->unsigned();
            $table->bigInteger('id_type_service')->unsigned();
            $table->timestamp('date')->useCurrent();
            $table->string('description');
            $table->unsignedDouble('price');
            $table->timestamps();
            $table->bigInteger('id_address')->unsigned();
            $table->json('data');
        });

        Schema::table('services', function (Blueprint $table) {
            $table->foreign('id_type_service')->references('id')->on('type_services');
            $table->foreign('id_address')->references('id')->on('addresses');
            $table->foreign('id_state_service')->references('id')->on('state_services');
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
