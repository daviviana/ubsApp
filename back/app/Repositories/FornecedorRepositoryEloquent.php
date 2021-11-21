<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Fornecedor;

class FornecedorRepositoryEloquent extends RepositoryEloquent implements FornecedorRepositoryInterface
{

    public function __construct(Fornecedor $fornecedor)
    {
        $this->model = $fornecedor;
    }

}
