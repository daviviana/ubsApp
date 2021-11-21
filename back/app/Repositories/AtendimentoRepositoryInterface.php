<?php
namespace App\Repositories;

interface AtendimentoRepositoryInterface extends RepositoryInterface
{
    public function getAtendimentoByPaciente(int $idPaciente);
    public function getAtendimentoByMedicoDate(int $idFuncionario, string $date);
}
