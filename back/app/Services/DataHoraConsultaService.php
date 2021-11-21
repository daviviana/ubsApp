<?php

namespace App\Services;

use App\Repositories\DataHoraConsultaRepositoryInterface;

class DataHoraConsultaService extends Service {

    public function __construct(DataHoraConsultaRepositoryInterface $dataHoraConsulta){
        $this->repository = $dataHoraConsulta;
    }

    public function getDataHoraConsultaByDate(string $data){
		try {
			return $this->repository->getDataHoraConsultaByDate($data);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }

}

