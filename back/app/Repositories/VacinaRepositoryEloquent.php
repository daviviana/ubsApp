<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Vacina;

class VacinaRepositoryEloquent extends RepositoryEloquent implements VacinaRepositoryInterface
{

    public function __construct(Vacina $vacina)
    {
        $this->model = $vacina;
    }

}
