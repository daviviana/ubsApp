<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\UnidadeEndereco;

class UnidadeEnderecoRepositoryEloquent extends RepositoryEloquent implements UnidadeEnderecoRepositoryInterface
{

    public function __construct(UnidadeEndereco $endereco)
    {
        $this->model = $endereco;
    }

    public function getEnderecoUnidade(int $idUnidade) {
        return $this->model->select()->where('idUnidade',$idUnidade)->get();
    }

}
