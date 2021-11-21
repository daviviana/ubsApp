<?php

namespace App\Services;

use App\Repositories\FuncionarioRepositoryInterface;

class FuncionarioService extends Service
{

    public function __construct(FuncionarioRepositoryInterface $funcionario)
    {
        $this->repository = $funcionario;
    }

    public function get(int $id = null, string $cpf = null, string $cadastroPrefeitura = null)
    {
        try {
            return $this->repository->get($id, $cpf, $cadastroPrefeitura);
        } catch (QueryException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function getFuncionarioDiretor(){
		try {
			return $this->repository->getFuncionarioDiretor();
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }

}
