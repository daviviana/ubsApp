<?php
namespace App\Repositories;

interface MedicamentoRepositoryInterface extends RepositoryInterface
{
    public function getMedicamentoUnidade(int $idUnidade);
}
