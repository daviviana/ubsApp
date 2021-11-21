<?php

namespace App\Services;

use App\Repositories\UnidadeRepositoryInterface;

class UnidadeService extends Service {

    public function __construct(UnidadeRepositoryInterface $unidade){
        $this->repository = $unidade;
    }
}

