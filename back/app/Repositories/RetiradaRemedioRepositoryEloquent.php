<?php
namespace App\Repositories;

use App\Models\RetiradaRemedio;
use App\Repositories\RepositoryEloquent;

class RetiradaRemedioRepositoryEloquent extends RepositoryEloquent implements RetiradaRemedioRepositoryInterface
{

    public function __construct(RetiradaRemedio $retiradaRemedio)
    {
        $this->model = $retiradaRemedio;
    }

    public function getRetiradaRemedioByDateUnidade(string $date = null, int $idUnidade = null)
    {
        $query = $this->model->select(
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
            'retiradaremedio.*',
            'medicamentos.nome as nomeMedicamento'
        )
            ->join('medicamentos', 'medicamentos.idMedicamento', '=', 'retiradaremedio.idMedicamento')
            ->join('funcionarios', 'funcionarios.idFuncionario', '=', 'retiradaremedio.idFuncionario')
            ->join('pacientes', 'pacientes.idPaciente', '=', 'retiradaremedio.idPaciente')
            ->join('unidades', 'unidades.idUnidade', '=', 'retiradaremedio.idUnidade');
        if ($date) {
            $query = $query->where('retiradaremedio.data', '=', $date);
        }
        if ($idUnidade) {
            $query = $query->where('retiradaremedio.idUnidade', '=', $idUnidade);
        }
        return $query->get();
    }

}
