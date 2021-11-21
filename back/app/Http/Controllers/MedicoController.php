<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\MedicoService;
use Illuminate\Http\Response;

class MedicoController extends GenericController
{

    public function __construct(MedicoService $medicoService)
    {
        $this->generic = $medicoService;
    }

    public function listarPorEspecialidade(int $idEspecialidade) {
        $data = $this->generic->getMedicoByEspecialidade($idEspecialidade);
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
