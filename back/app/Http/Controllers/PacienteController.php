<?php

namespace App\Http\Controllers;

use App\Services\PacienteService;
use App\Http\Controllers\GenericController;

class PacienteController extends GenericController {

    public function __construct(PacienteService $pacienteService)
    {
        $this->generic = $pacienteService;
    }

}

