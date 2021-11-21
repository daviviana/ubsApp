<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Funcionario;

class FuncionarioRepositoryEloquent extends RepositoryEloquent implements FuncionarioRepositoryInterface
{

    public function __construct(Funcionario $funcionario)
    {
        $this->model = $funcionario;
    }

    public function get(int $id = null, string $cpf = null, string $cadastroPrefeitura = null)
    {
        $query = $this->model->select()
            ->join('funcionariosenderecos', 'funcionariosenderecos.idFuncionarioEndereco', '=', 'funcionarios.idEndereco');
        if ($id) {
            $query = $query->where('funcionarios.idFuncionario', $id);
        }

        if ($cpf) {
            $query = $query->where('funcionarios.cpf', $cpf);
        }
        if ($cadastroPrefeitura) {
            $query = $query->where('funcionarios.cadastroPrefeitura', $cadastroPrefeitura);
        }
        return $query->first();
    }

    public function getFuncionarioDiretor() {
        return $this->model->select('funcionarios.*','unidades.nome as nomeUnidade')->where('cargo','Diretor')->join('unidades', 'unidades.idUnidade', '=', 'funcionarios.idUnidade')->get();
    }

}
