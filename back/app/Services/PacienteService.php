<?php

namespace App\Services;

use App\Repositories\PacienteRepositoryInterface;

class PacienteService extends Service
{

    public function __construct(PacienteRepositoryInterface $paciente)
    {
        $this->repository = $paciente;
    }

    public function get(int $id = null,string $cpf = null, string $cardSus = null)
    {
        try {
            return $this->repository->get($id,$cpf, $cardSus);
        } catch (QueryException $e) {
            return ['error' => $e->getMessage()];
        }
    }

}
