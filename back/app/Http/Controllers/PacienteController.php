<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\PacienteService;

class PacienteController extends GenericController
{

    public function __construct(PacienteService $pacienteService)
    {
        $this->generic = $pacienteService;
    }

    public function get(int $id = null,string $cpf = null, string $cardSus = null)
    {
        $data = $this->generic->get($id,$cpf,$cardSus);
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
