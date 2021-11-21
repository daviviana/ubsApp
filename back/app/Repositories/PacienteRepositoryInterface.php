<?php
namespace App\Repositories;

interface PacienteRepositoryInterface extends RepositoryInterface
{
    public function get(int $id = null,string $cpf = null, string $cardSus = null);
}
