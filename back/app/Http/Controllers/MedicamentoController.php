<?php

namespace App\Http\Controllers;

use App\Services\MedicamentoService;
use App\Http\Controllers\GenericController;

class MedicamentoController extends GenericController {

    public function __construct(MedicamentoService $medicamentoService)
    {
        $this->generic = $medicamentoService;
    }

    public function listaPorUnidade(int $idUnidade) {
        $data = $this->generic->getMedicamentoUnidade($idUnidade);
        if(isset($data['error'])){
            return response()->json($data, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        if ($data) {
            return response()->json($data, Response::HTTP_OK);
        } else {
            return response()->json([], Response::HTTP_OK);
        }
    }

}

