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
            $table->bigInteger('data_t_id')->unsigned();
            $table->bigInteger('item_t_id')->unsigned();
        });

        Schema::table('item_sets', function (Blueprint $table) {
            $table->foreign('data_t_id')->references('id')->on('data_ts');
            $table->foreign('item_t_id')->references('id')->on('item_t_datas');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_sets');
    }
};
