<?php
namespace App\Repositories;

interface PacienteEnderecoRepositoryInterface extends RepositoryInterface
{
    public function getEnderecoPaciente(int $idPaciente);
}
