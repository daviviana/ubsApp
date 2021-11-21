<?php

namespace App\Services;

use App\Repositories\ProcedimentoRepositoryInterface;

class ProcedimentoService extends Service {

    public function __construct(ProcedimentoRepositoryInterface $procedimento){
        $this->repository = $procedimento;
    }
}

