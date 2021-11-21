<?php
namespace App\Repositories;

use App\Models\Atendimento;
use App\Repositories\RepositoryEloquent;

class AtendimentoRepositoryEloquent extends RepositoryEloquent implements AtendimentoRepositoryInterface
{

    public function __construct(Atendimento $atendimento)
    {
        $this->model = $atendimento;
    }

    public function getAtendimentoByPaciente(int $idPaciente)
    {
        return $this->model->select()
            ->join('pacientes', 'pacientes.idPaciente', '=', 'atendimentos.idPaciente')
            ->where('atendimentos.idPaciente', $idPaciente)->get();
    }

    public function getAtendimentoByMedicoDate(int $idFuncionario, string $date)
    {
        return $this->model->select()
            ->join('funcionarios', 'funcionarios.idFuncionario', '=', 'atendimentos.idFuncionario')
            ->where('atendimentos.idFuncionario', $idFuncionario)
            ->where('atendimentos.data', $date)
            ->get();
    }

}
