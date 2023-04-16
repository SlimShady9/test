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
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name')->nullable();
            $table->string('country');
            $table->string('country_iso');
            $table->string('region');
            $table->string('region_iso');
            $table->string('city');
            $table->string('city_id');
            $table->string('addr');
            $table->string('addr_detail')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('neighborhood')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
};
