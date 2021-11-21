<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Medicamento;

class MedicamentoRepositoryEloquent extends RepositoryEloquent implements MedicamentoRepositoryInterface
{

    public function __construct(Medicamento $medicamento)
    {
        $this->model = $medicamento;
    }

    public function getMedicamentoUnidade(int $idUnidade) {
        return $this->model->select()->where('idUnidade',$idUnidade)->get();
    }

}
