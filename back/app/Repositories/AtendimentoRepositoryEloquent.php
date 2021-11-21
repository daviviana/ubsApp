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
        return $this->model->select(
            'pacientes.idPaciente',
            'pacientes.nome as nomePaciente',
            'pacientes.cpf as cpfPaciente',
            'pacientes.dataNascimento as dataNascimentoPaciente',
            'pacientes.telefone as telefonePaciente',
            'pacientes.email as emailPaciente',
            'pacientes.sus as sus',
            'pacientes.idEndereco as idEnderecoPaciente',
            'funcionarios.idFuncionario',
            'funcionarios.nome as nomeFuncionario',
            'funcionarios.dataNascimento as dataNascimentoFuncionario',
            'funcionarios.cargo',
            'funcionarios.cpf as cpfFuncionario',
            'funcionarios.permissao',
            'funcionarios.idUnidade',
            'funcionarios.telefone as telefoneFuncionario',
            'funcionarios.cadastroPref',
            'funcionarios.idEndereco as idEnderecoFuncionario',
            'atendimentos.*',
            'especialidades.nome as nomeEspecialidade'
        )
            ->join('pacientes', 'pacientes.idPaciente', '=', 'atendimentos.idPaciente')
            ->join('funcionarios', 'funcionarios.idFuncionario', '=', 'atendimentos.idFuncionario')
            ->leftjoin('medicos', 'medicos.idFuncionario', '=', 'funcionarios.idFuncionario')
            ->leftjoin('especialidades', 'especialidades.idEspecialidade', '=', 'medicos.idEspecialidade')
            ->where('atendimentos.idPaciente', $idPaciente)->get();
    }

    public function getAtendimentoByMedicoDate(int $idFuncionario, string $date)
    {
        return $this->model->select()
            ->join('pacientes', 'pacientes.idPaciente', '=', 'atendimentos.idPaciente')
            ->join('datahoraconsulta', 'datahoraconsulta.idDataHoraConsulta', '=', 'atendimentos.idDataHoraConsulta')
            ->where('atendimentos.idFuncionario', $idFuncionario)
            ->where('atendimentos.data', '=', $date)
            ->get();
    }

}
