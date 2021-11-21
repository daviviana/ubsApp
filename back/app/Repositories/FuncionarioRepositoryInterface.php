<?php
namespace App\Repositories;

interface FuncionarioRepositoryInterface extends RepositoryInterface
{
    public function get(int $id = null, string $cpf = null, string $cadastroPrefeitura = null);
}
