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
            $table->timestamps();
            $table->string('name_service');
            $table->string('price_service');
            $table->bigInteger('t_service_id')->unsigned();
        });

        Schema::table('services', function (Blueprint $table) {
            $table->foreign('t_service_id')->references('id')->on('t_services');
            $table->region_service('region_service')->unsigned();
            $table->city_service('city_service')->unsigned();
            $table->address_service('address_service')->unsigned();
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
