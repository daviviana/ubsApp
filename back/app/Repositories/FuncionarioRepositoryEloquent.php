<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Funcionario;

class FuncionarioRepositoryEloquent extends RepositoryEloquent implements FuncionarioRepositoryInterface
{

    public function __construct(Funcionario $funcionario)
    {
        $this->model = $funcionario;
    }

}
