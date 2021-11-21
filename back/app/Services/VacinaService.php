<?php

namespace App\Services;

use App\Repositories\VacinaRepositoryInterface;

class VacinaService extends Service {

    public function __construct(VacinaRepositoryInterface $vacina){
        $this->repository = $vacina;
    }
}

