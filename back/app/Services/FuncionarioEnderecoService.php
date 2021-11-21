<?php

namespace App\Services;

use App\Repositories\FuncionarioEnderecoRepositoryInterface;

class FuncionarioEnderecoService extends Service {

    public function __construct(FuncionarioEnderecoRepositoryInterface $endereco){
        $this->repository = $endereco;
    }

    public function getEnderecoFuncionario(int $idFuncionario){
		try {
			return $this->repository->getEnderecoFuncionario($idFuncionario);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }

}

