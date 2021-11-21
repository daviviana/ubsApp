<?php

namespace App\Http\Controllers;

use App\Services\MedicamentoService;
use App\Http\Controllers\GenericController;

class MedicamentoController extends GenericController {

    public function __construct(MedicamentoService $medicamentoService)
    {
        $this->generic = $medicamentoService;
    }

}

