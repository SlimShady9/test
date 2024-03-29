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

    public function costXWeight() {
        $costxSellBymonth = DB::select("SELECT DATE_FORMAT(start_date, '%M-%Y', 'es_ES') AS month, (c.units * c.unit_weight) as weigh, AVG(s.cost) AS cost, AVG(s.price) AS price, (AVG(s.price)-AVG(s.cost)) as profits FROM services s
        inner join contents  c where c.service = s.id GROUP BY weigh ORDER BY start_date");
        return $costxSellBymonth;
    }

    public function priceXTService() {
        $costxSellBymonth = DB::select("SELECT s.price, s.id_type_service  from services s group by s.id_type_service");
        return $costxSellBymonth;
    }

    public function costXTService() {
        $costxSellBymonth = DB::select("SELECT s.cost, s.id_type_service  from services s group by s.id_type_service");
        return $costxSellBymonth;
    }

    public function profitXTService() {
        $costxSellBymonth = DB::select("SELECT (s.price - s.cost) as ganancia, s.id_type_service  from services s group by s.id_type_service");
        return $costxSellBymonth;
    }

    public function profitXTContent() {
        $costxSellBymonth = DB::select("SELECT (s.price - s.cost) as ganancia, t_carga  from services s inner join contents on s.id = service group by t_carga");
        return $costxSellBymonth;
    }

    public function costXTContent() {
        $costxSellBymonth = DB::select("SELECT s.cost , t_carga  from services s inner join contents on s.id = service group by t_carga");
        return $costxSellBymonth;
    }

    public function priceXTContent() {
        $costxSellBymonth = DB::select("SELECT s.price , t_carga  from services s inner join contents on s.id = service group by t_carga");
        return $costxSellBymonth;
    }

    public function ServiceByTService() {
        $costxSellBymonth = DB::select("SELECT count(s.id), s.id_type_service  from services s group by s.id_type_service");
        return $costxSellBymonth;
    }

    public function ServiceByStateService() {
        $costxSellBymonth = DB::select("SELECT count(s.id) as id, s.id_state_service  from services s group by s.id_state_service");
        return $costxSellBymonth;
    }

    public function ServiceXTypeServicePerc() {
        $costxSellBymonth = DB::select("SELECT (count(*) * 100.0 / sum(count(*)) over()) as perc, id_type_service  from services group by id_type_service");
        return $costxSellBymonth;
    }
    


}