<?php
namespace App\Repositories;

interface MedicoRepositoryInterface extends RepositoryInterface
{
    public function getMedicoByEspecialidade(int $idEspecialidade);
}
