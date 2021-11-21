<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\DataHoraConsultaService;

class DataHoraConsultaController extends GenericController
{

    public function __construct(DataHoraConsultaService $dataHoraConsultaService)
    {
        $this->generic = $dataHoraConsultaService;
    }

    public function listaPorData(string $data) {
        $data = $this->generic->getDataHoraConsultaByDate($data);
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
