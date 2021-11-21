<?php

namespace App\Services;

use App\Repositories\DataHoraConsultaRepositoryInterface;

class DataHoraConsultaService extends Service {

    public function __construct(DataHoraConsultaRepositoryInterface $dataHoraConsulta){
        $this->repository = $dataHoraConsulta;
    }
}

