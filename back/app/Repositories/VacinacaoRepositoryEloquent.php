<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Vacinacao;

class VacinacaoRepositoryEloquent extends RepositoryEloquent implements VacinacaoRepositoryInterface
{

    public function __construct(Vacinacao $vacinacao)
    {
        $this->model = $vacinacao;
    }

    public function getVacinacaoByPaciente(int $idPaciente) {
        return $this->model->select('vacinacao.*','vacina.nome as nomeVacina','funcionarios.*')
        ->join('vacina', 'vacina.idVacina', '=', 'vacinacao.idVacina')
        ->join('funcionarios', 'funcionarios.idFuncionario', '=', 'vacinacao.idFuncionario')
        ->where('vacinacao.idPaciente','=', $idPaciente)
        ->get();
    }

}
