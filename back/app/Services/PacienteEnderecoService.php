<?php

namespace App\Services;

use App\Repositories\PacienteEnderecoRepositoryInterface;

class PacienteEnderecoService extends Service {

    public function __construct(PacienteEnderecoRepositoryInterface $endereco){
        $this->repository = $endereco;
    }

    public function getEnderecoPaciente(int $idPaciente){
		try {
			return $this->repository->getEnderecoPaciente($idPaciente);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }

}

