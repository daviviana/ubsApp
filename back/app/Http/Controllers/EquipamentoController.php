<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\EquipamentoService;

class EquipamentoController extends GenericController
{

    public function __construct(EquipamentoService $equipamentoService)
    {
        $this->generic = $equipamentoService;
    }

}
