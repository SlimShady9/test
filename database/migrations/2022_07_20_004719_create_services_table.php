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
            $table->string('tracking_id');
            $table->string('name');
            $table->string('state');
            $table->bigInteger('id_t_service')->unsigned();
            $table->timestamp('date')->useCurrent();
            $table->string('description');
            $table->unsignedDouble('price');
            $table->timestamps();
            $table->bigInteger('id_address')->unsigned();
        });

        Schema::table('services', function (Blueprint $table) {
            $table->foreign('id_t_service')->references('id')->on('t_services');
            $table->foreign('id_address')->references('id')->on('addresses');
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
