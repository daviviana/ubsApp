<?php
namespace App\Repositories;

interface VacinacaoRepositoryInterface extends RepositoryInterface
{
    public function getVacinacaoByPaciente(int $idPaciente);
}
