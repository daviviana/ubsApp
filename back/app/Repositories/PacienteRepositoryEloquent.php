<?php
namespace App\Repositories;

use App\Models\Paciente;
use App\Repositories\RepositoryEloquent;

class PacienteRepositoryEloquent extends RepositoryEloquent implements PacienteRepositoryInterface
{

    public function __construct(Paciente $paciente)
    {
        $this->model = $paciente;
    }

    public function get(int $id = null, string $cpf = null, string $cardSus = null)
    {
        $query = $this->model->select()
            ->join('pacientesenderecos', 'pacientesenderecos.idEndereco', '=', 'pacientes.idPaciente');
        if ($id) {
            $query = $query->where('pacientes.idPaciente', $id);
        }

        if ($cpf) {
            $query = $query->where('pacientes.cpf', $cpf);
        }
        if ($cardSus) {
            $query = $query->where('pacientes.cartaoSus', $cardSus);
        }
        return $query->get();
    }

}
