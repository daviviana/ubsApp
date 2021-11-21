<?php

namespace App\Services;

use App\Repositories\ProcedimentoFeitoRepositoryInterface;

class ProcedimentoFeitoService extends Service {

    public function __construct(ProcedimentoFeitoRepositoryInterface $procedimentoFeito){
        $this->repository = $procedimentoFeito;
    }

    public function getProcedimetnoByPaciente(int $idPaciente) {
		try {
			return $this->repository->getProcedimetnoByPaciente($idPaciente);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }

}

