<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Procedimento;

class ProcedimentosRepositoryEloquent extends RepositoryEloquent implements ProcedimentosRepositoryInterface
{

    public function __construct(Procedimento $procedimento)
    {
        $this->model = $procedimento;
    }

}
