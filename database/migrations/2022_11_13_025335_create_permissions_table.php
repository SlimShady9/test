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
        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('t_user')->unsigned();
            $table->bigInteger('t_action')->unsigned();
            $table->timestamps();
        });

        Schema::table('permissions', function (Blueprint $table) {
            $table->foreign('t_user')->references('id')->on('t_users');
            $table->foreign('t_action')->references('id')->on('t_actions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permissions');
    }
};
