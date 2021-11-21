<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\PacienteEndereco;

class PacienteEnderecoRepositoryEloquent extends RepositoryEloquent implements PacienteEnderecoRepositoryInterface
{

    public function __construct(PacienteEndereco $endereco)
    {
        $this->model = $endereco;
    }

    public function getEnderecoPaciente(int $idPaciente) {
        return $this->model->select()->where('idPaciente',$idPaciente)->get();
    }

}
