<?php
namespace App\Repositories;

interface ProcedimentoFeitoRepositoryInterface extends RepositoryInterface
{
    public function getProcedimentoByPaciente(int $idPaciente);
}
