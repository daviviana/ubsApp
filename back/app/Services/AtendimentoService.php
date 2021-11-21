<?php

namespace App\Services;

use App\Repositories\AtendimentoRepositoryInterface;

class AtendimentoService extends Service
{
    public function __construct(AtendimentoRepositoryInterface $atendimento)
    {
        $this->repository = $atendimento;
    }

    public function getAtendimentoByPaciente(int $idPaciente) {
		try {
			return $this->repository->getAtendimentoByPaciente($idPaciente);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }

    public function getAtendimentoByMedicoDate(int $idFuncionario, string $date){
		try {
			return $this->repository->getAtendimentoByMedicoDate($idFuncionario,$date);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }


}
