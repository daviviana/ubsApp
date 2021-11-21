<?php

namespace App\Services;

use App\Repositories\PacienteRepositoryInterface;

class PacienteService extends Service {

    public function __construct(PacienteRepositoryInterface $paciente){
        $this->repository = $paciente;
    }
}

