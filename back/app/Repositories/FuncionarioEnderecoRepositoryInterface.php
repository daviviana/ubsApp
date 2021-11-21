<?php
namespace App\Repositories;

interface FuncionarioEnderecoRepositoryInterface extends RepositoryInterface
{
    public function getEnderecoFuncionario(int $idFuncionario);
}
