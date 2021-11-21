<?php

namespace App\Services;

use App\Repositories\UnidadeEnderecoRepositoryInterface;

class UnidadeEnderecoService extends Service {

    public function __construct(UnidadeEnderecoRepositoryInterface $endereco){
        $this->repository = $endereco;
    }

    public function getEnderecoUnidade(int $idUnidade){
		try {
			return $this->repository->getEnderecoUnidade($idUnidade);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }

}

