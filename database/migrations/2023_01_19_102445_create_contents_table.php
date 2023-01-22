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
            $table->string('unit_weight');
            $table->string('length');
            $table->string('width');
            $table->string('height');
            $table->string('commercial_value');

        });

        Schema::table('contents', function (Blueprint $table) {
            $table->foreign('t_carga')->references('id')->on('type_contents');
            $table->foreign('id_exception')->references('id')->on('type_exceptions');

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
