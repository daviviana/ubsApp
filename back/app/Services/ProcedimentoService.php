<?php

namespace App\Services;

use App\Repositories\ProcedimentosRepositoryInterface;

class ProcedimentoService extends Service {

    public function __construct(ProcedimentosRepositoryInterface $procedimento){
        $this->repository = $procedimento;
    }
}

