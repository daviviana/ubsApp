<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\FuncionarioEndereco;

class FuncionarioEnderecoRepositoryEloquent extends RepositoryEloquent implements FuncionarioEnderecoRepositoryInterface
{

    public function __construct(FuncionarioEndereco $endereco)
    {
        $this->model = $endereco;
    }

    public function getEnderecoFuncionario(int $idFuncionario) {
        return $this->model->select()->where('idFuncionario',$idFuncionario)->get();
    }

}
