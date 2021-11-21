<?php

namespace App\Services;

use App\Repositories\AtendimentoRepositoryInterface;

class AtendimentoService extends Service {

    public function __construct(AtendimentoRepositoryInterface $atendimento){
        $this->repository = $atendimento;
    }
}

