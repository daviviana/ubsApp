<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Especialidade;

class EspecialidadeRepositoryEloquent extends RepositoryEloquent implements EspecialidadeRepositoryInterface
{

    public function __construct(Especialidade $especialidade)
    {
        $this->model = $especialidade;
    }

}
