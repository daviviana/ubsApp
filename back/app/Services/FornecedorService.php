<?php

namespace App\Services;

use App\Repositories\FornecedorRepositoryInterface;

class FornecedorService extends Service {

    public function __construct(FornecedorRepositoryInterface $fornecedor){
        $this->repository = $fornecedor;
    }
}

