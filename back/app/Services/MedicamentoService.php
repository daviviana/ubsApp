<?php

namespace App\Services;

use App\Repositories\MedicamentoRepositoryInterface;

class MedicamentoService extends Service {

    public function __construct(MedicamentoRepositoryInterface $medicamento){
        $this->repository = $medicamento;
    }
}

