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
        $query = $this->model->select()
            ->join('funcionarios', 'funcionarios.idFuncionario', '=', 'retiradaremedio.idFuncionario')
            ->join('pacientes', 'paciente.idPaciente', '=', 'retiradaremedio.idPaciente')
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
