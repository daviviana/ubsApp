<?php

namespace App\Http\Controllers;

use App\Services\FuncionarioService;
use App\Http\Controllers\GenericController;
use Illuminate\Http\Response;

class FuncionarioController extends GenericController {

    public function __construct(FuncionarioService $funcionarioService)
    {
        $this->generic = $funcionarioService;
    }

    public function get(int $id = null,string $cpf = null, string $cadastroPrefeitura = null)
    {
        $data = $this->generic->get($id,$cpf,$cadastroPrefeitura);
        if (isset($data['error'])) {
            return response()->json($data, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        if ($data) {
            return response()->json($data, Response::HTTP_OK);
        } else {
            return response()->json([], Response::HTTP_OK);
        }
    }


    public function listaPorDiretos() {
        $data = $this->generic->getFuncionarioDiretor();
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

