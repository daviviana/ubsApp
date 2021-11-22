<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Medico;

class MedicoRepositoryEloquent extends RepositoryEloquent implements MedicoRepositoryInterface
{

    public function __construct(Medico $medico)
    {
        $this->model = $medico;
    }

    public function getMedicoByEspecialidade(int $idEspecialidade) {
        return $this->model->select('funcionarios.*')->join('funcionarios.idFuncionario','=','medicos.idFuncionario')->where('idEspecialidade',$idEspecialidade)->get();
    }

}
