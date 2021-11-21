<?php

namespace App\Services;

use App\Repositories\EspecialidadeRepositoryInterface;

class EspecialidadeService extends Service {

    public function __construct(EspecialidadeRepositoryInterface $especialidade){
        $this->repository = $especialidade;
    }
}

