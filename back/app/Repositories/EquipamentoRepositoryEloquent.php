<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Equipamento;

class EquipamentoRepositoryEloquent extends RepositoryEloquent implements EquipamentoRepositoryInterface
{

    public function __construct(Equipamento $equipamento)
    {
        $this->model = $equipamento;
    }

}
