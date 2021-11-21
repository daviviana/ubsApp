<?php

namespace App\Services;

use App\Repositories\RetiradaRemedioRepositoryInterface;

class RetiradaRemedioService extends Service
{

    public function __construct(RetiradaRemedioRepositoryInterface $retiradaRemedio)
    {
        $this->repository = $retiradaRemedio;
    }

    public function getRetiradaRemedioByDateUnidade(string $date = null, int $idUnidade = null)
    {
        try {
            return $this->repository->getRetiradaRemedioByDateUnidade($date,$idUnidade);
        } catch (QueryException $e) {
            return ['error' => $e->getMessage()];
        }
    }

}
