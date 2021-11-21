<?php

namespace App\Http\Controllers;

use App\Services\FuncionarioService;
use App\Http\Controllers\GenericController;

class FuncionarioController extends GenericController {

    public function __construct(FuncionarioService $funcionarioService)
    {
        $this->generic = $funcionarioService;
    }

}

