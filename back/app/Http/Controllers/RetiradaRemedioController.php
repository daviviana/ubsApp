<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\RetiradaRemedioService;

class RetiradaRemedioController extends GenericController
{

    public function __construct(RetiradaRemedioService $retiradaRemedioService)
    {
        $this->generic = $retiradaRemedioService;
    }

    public function listaRemediosPorDataUnidade(string $date = null, int $idUnidade = null)
    {
        $data = $this->generic->getRetiradaRemedioByDateUnidade($date,$idUnidade);
        if (isset($data['error'])) {
            return response()->json($data, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        if ($data) {
            return response()->json($data, Response::HTTP_OK);
        } else {
            return response()->json([], Response::HTTP_OK);
        }
    }

}
