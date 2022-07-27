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
        Schema::create('item_sets', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('id_parameter')->unsigned();
            $table->bigInteger('id_item')->unsigned();
        });

        Schema::table('item_sets', function (Blueprint $table) {
            $table->foreign('id_parameter')->references('id')->on('parameters');
            $table->foreign('id_item')->references('id')->on('items');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropForeign('id_parameter');
        Schema::dropForeign('id_t_service');
        Schema::dropIfExists('item_sets');
    }
};
