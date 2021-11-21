<?php

namespace App\Services;

use App\Repositories\ProcedimentoFeitoRepositoryInterface;

class ProcedimentoFeitoService extends Service {

    public function __construct(ProcedimentoFeitoRepositoryInterface $procedimentoFeito){
        $this->repository = $procedimentoFeito;
    }

    public function getProcedimentoByPaciente(int $idPaciente) {
		try {
			return $this->repository->getProcedimentoByPaciente($idPaciente);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }

}

