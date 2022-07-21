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
        Schema::create('data_ts', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('label_data');
            $table->string('name_data');
            $table->string('type_data');
            $table->string('value_data');
            $table->string('required_data');
            $table->string('item_data');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data_ts');
    }
};
