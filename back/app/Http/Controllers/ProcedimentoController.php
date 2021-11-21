<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\ProcedimentoService;

class ProcedimentoController extends GenericController
{

    public function __construct(ProcedimentoService $procedimentoService)
    {
        $this->generic = $procedimentoService;
    }

}
