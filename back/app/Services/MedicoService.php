<?php

namespace App\Services;

use App\Repositories\MedicoRepositoryInterface;

class MedicoService extends Service {

    public function __construct(MedicoRepositoryInterface $medico){
        $this->repository = $medico;
    }

    public function getMedicoByEspecialidade(int $idEspecialidade) {
		try {
			return $this->repository->getMedicoByEspecialidade($idEspecialidade);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }

}

