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
        $servicesxTimeRange = DB::select("SELECT COUNT(*) AS servicios, DATE_FORMAT(start_date, '%M-%Y', 'es_ES') AS month FROM services GROUP BY MONTHNAME(start_date)
        ORDER BY start_date");
        return $servicesxTimeRange;
    }

    public function costxSellBymonth() {
        $costxSellBymonth = DB::select("SELECT DATE_FORMAT(start_date, '%M-%Y-%D', 'es_ES') AS month, SUM(cost) AS cost, SUM(price) AS price, (SUM(price)-SUM(cost)) as profits FROM services GROUP BY MONTH(start_date) ORDER BY start_date");
        return $costxSellBymonth;
    }

    public function costXVolumen() {
        $costxSellBymonth = DB::select("SELECT DATE_FORMAT(start_date, '%M-%Y', 'es_ES') AS month, (c.width * c.height * c.length  ) as volumen, AVG(s.cost) AS cost, AVG(s.price) AS price, (AVG(s.price)-AVG(s.cost)) as profits FROM services s
        inner join contents  c where c.service = s.id GROUP BY volumen ORDER BY start_date");
        return $costxSellBymonth;
    }


}