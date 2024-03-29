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
            $table->bigInteger('id_param')->unsigned();
            $table->bigInteger('id_type_service')->unsigned();

            });

        Schema::table('param_t_services', function (Blueprint $table) {
            $table->foreign('id_param')->references('id')->on('parameters');
            $table->foreign('id_type_service')->references('id')->on('type_services');
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
