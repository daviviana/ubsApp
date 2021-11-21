<?php

namespace App\Services;

use App\Repositories\EquipamentoRepositoryInterface;

class EquipamentoService extends Service {

    public function __construct(EquipamentoRepositoryInterface $equipamento){
        $this->repository = $equipamento;
    }
}

