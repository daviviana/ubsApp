<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\VacinacaoService;

class VacinacaoController extends GenericController
{

    public function __construct(VacinacaoService $vacinacaoService)
    {
        $this->generic = $vacinacaoService;
    }

    public function listaVacinacaoPorPacientes(int $idPaciente) {
        $data = $this->generic->getVacinacaoByPaciente($idPaciente);
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
