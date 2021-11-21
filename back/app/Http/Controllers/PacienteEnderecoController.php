<?php

namespace App\Http\Controllers;

use App\Services\PacienteEnderecoService;
use App\Http\Controllers\GenericController;
use Illuminate\Http\Response;

class PacienteEnderecoController extends GenericController {

    public function __construct(PacienteEnderecoService $enderecoService)
    {
        $this->generic = $enderecoService;
    }

    public function listaPorPaciente(int $idPaciente) {
        $data = $this->generic->getEnderecoPaciente($idPaciente);
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

