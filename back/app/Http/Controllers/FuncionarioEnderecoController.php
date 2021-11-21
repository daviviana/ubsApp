<?php

namespace App\Http\Controllers;

use App\Services\FuncionarioEnderecoService;
use App\Http\Controllers\GenericController;
use Illuminate\Http\Response;

class FuncionarioEnderecoController extends GenericController {

    public function __construct(FuncionarioEnderecoService $enderecoService)
    {
        $this->generic = $enderecoService;
    }

    public function listaPorFuncionario(int $idFuncionario) {
        $data = $this->generic->getEnderecoFuncionario($idFuncionario);
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

