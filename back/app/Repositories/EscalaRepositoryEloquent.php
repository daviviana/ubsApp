<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Escala;

class EscalaRepositoryEloquent extends RepositoryEloquent implements EscalaRepositoryInterface
{

    public function __construct(Escala $escala)
    {
        $this->model = $escala;
    }

}
