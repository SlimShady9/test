
   Illuminate\Database\QueryException 

  SQLSTATE[HY000] [2002] No connection could be made because the target machine actively refused it (SQL: select * from information_schema.tables where table_schema = test and table_name = migrations and table_type = 'BASE TABLE')

  at C:\Users\juand\OneDrive\Escritorio\Proyectos\test\vendor\laravel\framework\src\Illuminate\Database\Connection.php:760
    756Γûò         // If an exception occurs when attempting to run a query, we'll format the error
    757Γûò         // message to include the bindings with SQL, which will make this exception a
    758Γûò         // lot more helpful to the developer instead of just the database's errors.
    759Γûò         catch (Exception $e) {
  Γ₧£ 760Γûò             throw new QueryException(
    761Γûò                 $query, $this->prepareBindings($bindings), $e
    762Γûò             );
    763Γûò         }
    764Γûò     }

  1   C:\Users\juand\OneDrive\Escritorio\Proyectos\test\vendor\laravel\framework\src\Illuminate\Database\Connectors\Connector.php:70
      PDOException::("SQLSTATE[HY000] [2002] No connection could be made because the target machine actively refused it")

  2   C:\Users\juand\OneDrive\Escritorio\Proyectos\test\vendor\laravel\framework\src\Illuminate\Database\Connectors\Connector.php:70
      PDO::__construct()
