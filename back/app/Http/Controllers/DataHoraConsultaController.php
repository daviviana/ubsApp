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

}
