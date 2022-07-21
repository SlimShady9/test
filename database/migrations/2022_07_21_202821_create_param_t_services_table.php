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
            $table->bigInteger('data_t_id')->unsigned();
            $table->bigInteger('t_service_id')->unsigned();

            });

            Schema::table('param_t_services', function (Blueprint $table) {
                $table->foreign('data_t_id')->references('id')->on('data_ts');
                $table->foreign('t_service_id')->references('id')->on('t_services');

                

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
