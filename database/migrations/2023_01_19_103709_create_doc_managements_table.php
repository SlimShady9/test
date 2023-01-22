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
        Schema::create('doc_managements', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('id_service')->unsigned();
            $table->bigInteger('doc_type')->unsigned();
            $table->string('average_docs');


        });

        Schema::table('doc_managements', function (Blueprint $table) {
            $table->foreign('id_service')->references('id')->on('services');
            $table->foreign('doc_type')->references('id')->on('type_documents');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doc_managements');
    }
};
