<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\ProcedimentoFeito;

class ProcedimentoFeitoRepositoryEloquent extends RepositoryEloquent implements ProcedimentoFeitoRepositoryInterface
{

    public function __construct(ProcedimentoFeito $procedimentoFeito)
    {
        $this->model = $procedimentoFeito;
    }

    public function getProcedimentoByPaciente(int $idPaciente) {
        return $this->model->select('procedimentosfeitos.*','procedimentos.nome as nomeProcedimento','funcionarios.*')
        ->join('procedimentos', 'procedimentos.idProcedimento', '=', 'procedimentosfeitos.idProcedimento')
        ->join('funcionarios', 'funcionarios.idFuncionario', '=', 'procedimentosfeitos.idFuncionario')
        ->where('procedimentosfeitos.idPaciente','=', $idPaciente)
        ->get();
    }

}
