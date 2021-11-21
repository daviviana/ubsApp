<?php

namespace App\Services;

use App\Repositories\DependeciaRepositoryInterface;

class DependenciaService extends Service {

    public function __construct(DependeciaRepositoryInterface $dependecia){
        $this->repository = $dependecia;
    }
}

