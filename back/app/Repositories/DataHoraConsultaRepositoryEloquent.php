<?php
namespace App\Repositories;

use App\Models\DataHoraConsulta;
use App\Repositories\RepositoryEloquent;

class DataHoraConsultaRepositoryEloquent extends RepositoryEloquent implements DataHoraConsultaRepositoryInterface
{

    public function __construct(DataHoraConsulta $dataHoraConsulta)
    {
        $this->model = $dataHoraConsulta;
    }

    public function getDataHoraConsultaByDate(string $data)
    {
        return $this->model->select()->where('data', $data)->get();
    }

}
