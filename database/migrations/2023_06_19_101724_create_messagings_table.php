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
            $table->bigInteger('id_address')->unsigned();
            $table->string('dependency');
            $table->string('intern_order');
            $table->bigInteger('id_content')->unsigned();
            $table->string('transporter');
            $table->string('cost_center');
            $table->string('id_transporter_tracking');
        });

        Schema::table('messagings', function (Blueprint $table) {
            $table->foreign('id_service')->references('id')->on('services');
            $table->foreign('id_address')->references('id')->on('addresses');
            $table->foreign('id_user')->references('id')->on('users');
            $table->foreign('id_content')->references('id')->on('contents');
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
