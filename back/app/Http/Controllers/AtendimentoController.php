<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\AtendimentoService;
use Illuminate\Http\Response;

class AtendimentoController extends GenericController
{

    public function __construct(AtendimentoService $atendimentoService)
    {
        $this->generic = $atendimentoService;
    }

    public function listaAtendimentoPorPacientes(int $idPaciente) {
        $data = $this->generic->getAtendimentoByPaciente($idPaciente);
        if(isset($data['error'])){
            return response()->json($data, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        if ($data) {
            return response()->json($data, Response::HTTP_OK);
        } else {
            return response()->json([], Response::HTTP_OK);
        }
    }

    public function listaAtendimentoPorMedico(int $idFuncionario, string $date) {
        $data = $this->generic->getAtendimentoByMedicoDate($idFuncionario,$date);
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
