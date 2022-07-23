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
        Schema::create('param_t_services', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('id_parameter')->unsigned();
            $table->bigInteger('id_t_service')->unsigned();

            });

            Schema::table('param_t_services', function (Blueprint $table) {
                $table->foreign('id_parameter')->references('id')->on('parameters');
                $table->foreign('id_t_service')->references('id')->on('t_services');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('param_t_services');
    }
};
