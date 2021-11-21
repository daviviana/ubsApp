<?php

namespace App\Services;

use App\Repositories\VacinacaoRepositoryInterface;

class VacinacaoService extends Service {

    public function __construct(VacinacaoRepositoryInterface $vacinacao){
        $this->repository = $vacinacao;
    }

    public function getVacinacaoByPaciente(int $idPaciente) {
		try {
			return $this->repository->getVacinacaoByPaciente($idPaciente);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }

}

