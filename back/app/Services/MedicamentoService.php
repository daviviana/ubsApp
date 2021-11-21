<?php

namespace App\Services;

use App\Repositories\MedicamentoRepositoryInterface;

class MedicamentoService extends Service {

    public function __construct(MedicamentoRepositoryInterface $medicamento){
        $this->repository = $medicamento;
    }

    public function getMedicamentoUnidade(int $idUnidade){
		try {
			return $this->repository->getMedicamentoUnidade($idUnidade);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }

}

