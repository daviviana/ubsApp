<?php

namespace App\Services;

use App\Repositories\DependeciaRepositoryInterface;

class DependeciaService extends Service {

    public function __construct(DependeciaRepositoryInterface $dependecia){
        $this->repository = $dependecia;
    }
}

