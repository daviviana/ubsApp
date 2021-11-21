<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Unidade;

class UnidadeRepositoryEloquent extends RepositoryEloquent implements UnidadeRepositoryInterface
{

    public function __construct(Unidade $unidade)
    {
        $this->model = $unidade;
    }

    public function list()
    {
        return $this->model->select()->join('unidadesenderecos', 'unidadesenderecos.idUnidadeEndereco', '=', 'unidades.idEndereco')->get();
    }

}
