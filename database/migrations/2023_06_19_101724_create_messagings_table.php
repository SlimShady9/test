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
        Schema::create('messagings', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->bigInteger('id_user')->unsigned();
            $table->bigInteger('id_service')->unsigned();
            $table->string('entity');
            $table->string('charge');
            $table->unsignedDouble('price')->nullable();
            $table->timestamps();
            $table->string('dependency')->nullable();
            $table->string('intern_order')->nullable();
            $table->string('transporter')->nullable();
            $table->string('cost_center')->nullable();
            $table->string('id_transporter_tracking')->nullable();
        });

        Schema::table('messagings', function (Blueprint $table) {
            $table->foreign('id_service')->references('id')->on('services');
            $table->foreign('id_user')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messagings');
    }
};
