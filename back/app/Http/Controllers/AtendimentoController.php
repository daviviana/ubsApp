<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\AtendimentoService;

class AtendimentoController extends GenericController
{

    public function __construct(AtendimentoService $atendimentoService)
    {
        $this->generic = $atendimentoService;
    }

}
