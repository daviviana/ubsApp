<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Unidade;

class UnidadeRepositoryEloquent extends RepositoryEloquent implements UnidadeRepositoryInterface
{

    public function __construct(Unidade $unidade)
    {
        $this->model = $unidade;
    }

}
