<?php

namespace App\Services;

use App\Repositories\FuncionarioRepositoryInterface;

class FuncionarioService extends Service {

    public function __construct(FuncionarioRepositoryInterface $funcionario){
        $this->repository = $funcionario;
    }
}

