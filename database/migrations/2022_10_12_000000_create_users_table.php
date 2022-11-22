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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_t_user')->unsigned();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('username');
            $table->string('surname');
            $table->string('doc');
            $table->bigInteger('id_t_doc')->unsigned();
            $table->string('picture')->nullable();
            $table->string('signature')->nullable();
            $table->string('phone')->nullable();
            $table->string('cellphone')->nullable();
            $table->bigInteger('id_address')->unsigned()->nullable();
            $table->boolean('notif')->nullable();
            $table->string('data')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

       Schema::table('users', function (Blueprint $table) {
            $table->foreign('id_t_user')->references('id')->on('t_users');
            $table->foreign('id_address')->references('id')->on('addresses');
            $table->foreign('id_t_doc')->references('id')->on('t_documents');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
