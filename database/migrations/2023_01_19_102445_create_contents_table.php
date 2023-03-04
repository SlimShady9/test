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
        Schema::create('contents', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('content');
            $table->bigInteger('t_carga')->unsigned();
            $table->bigInteger('id_exception')->unsigned();
            $table->string('units');
            $table->integer('unit_weight');
            $table->integer('length');
            $table->integer('width');
            $table->integer('height');
            $table->double('commercial_value');
            $table->bigInteger('service')->unsigned();

        });

        Schema::table('contents', function (Blueprint $table) {
            $table->foreign('t_carga')->references('id')->on('type_contents');
            $table->foreign('id_exception')->references('id')->on('type_exceptions');
            $table->foreign('service')->references('id')->on('services');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contents');
    }
};
