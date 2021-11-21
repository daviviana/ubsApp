<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Atendimento;

class AtendimentoRepositoryEloquent extends RepositoryEloquent implements AtendimentoRepositoryInterface
{

    public function __construct(Atendimento $atendimento)
    {
        $this->model = $atendimento;
    }

}
