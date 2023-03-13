<?php

namespace App\Http\Controllers\Graphs;
use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Address;
use App\Models\Parameter;
use App\Models\TypeService;
use App\Models\StateService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use Barryvdh\Debugbar\Facade as Debugbar;

class GraphController extends Controller {

    public function index() {
        
    }

    public function show($id) {
       
    }

    public function servicesxTimeRange() {
        $servicesxTimeRange = DB::select("SELECT COUNT(*) AS servicios, MONTHNAME(start_date) AS month FROM services GROUP BY MONTHNAME(start_date)");
        return $servicesxTimeRange;
    }

    public function costxSellBymonth() {
        $costxSellBymonth = DB::select("SELECT DATE_FORMAT(start_date, '%M', 'es_ES') AS month, SUM(cost) AS cost, SUM(price) AS price FROM services  GROUP BY MONTH(start_date)");
        return $costxSellBymonth;
    }

    public function costXVolumen() {
        $costxSellBymonth = DB::select("SELECT (c.width * c.height * c.length  ) as volumen, SUM(s.cost) AS cost, SUM(s.price) AS price, (s.price-s.cost) as ganancia FROM services s
        inner join contents  c where c.service = s.id GROUP BY volumen");
        return $costxSellBymonth;
    }


}