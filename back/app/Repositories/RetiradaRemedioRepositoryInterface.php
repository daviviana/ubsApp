<?php
namespace App\Repositories;

interface RetiradaRemedioRepositoryInterface extends RepositoryInterface
{
    public function getRetiradaRemedioByDateUnidade(string $date = null, int $idUnidade = null);
}
