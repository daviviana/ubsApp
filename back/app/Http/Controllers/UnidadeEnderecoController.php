<?php

namespace App\Http\Controllers;

use App\Services\UnidadeEnderecoService;
use App\Http\Controllers\GenericController;

class UnidadeEnderecoController extends GenericController {

    public function __construct(UnidadeEnderecoService $unidadeEndereco)
    {
        $this->generic = $unidadeEndereco;
    }

    public function listaPorUnidade(int $idUnidade) {
        $data = $this->generic->getEnderecoUnidade($idUnidade);
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

