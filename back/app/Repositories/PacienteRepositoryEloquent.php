<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Paciente;

class PacienteRepositoryEloquent extends RepositoryEloquent implements PacienteRepositoryInterface
{

    public function __construct(Paciente $paciente)
    {
        $this->model = $paciente;
    }

}
