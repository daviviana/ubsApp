<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\ProcedimentoFeitoService;

class ProcedimentoFeitoController extends GenericController
{

    public function __construct(ProcedimentoFeitoService $procedimentoFeitoService)
    {
        $this->generic = $procedimentoFeitoService;
    }

    public function listaProcedimentoPorPacientes(int $idPaciente) {
        $data = $this->generic->getProcedimetnoByPaciente($idPaciente);
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
