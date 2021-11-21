<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\DataHoraConsulta;

class DataHoraConsultaRepositoryEloquent extends RepositoryEloquent implements DataHoraConsultaRepositoryInterface
{

    public function __construct(DataHoraConsulta $dataHoraConsulta)
    {
        $this->model = $dataHoraConsulta;
    }

}
