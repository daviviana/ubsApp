<?php

namespace App\Http\Controllers;

use App\Services\UnidadeService;
use App\Http\Controllers\GenericController;

class UnidadeController extends GenericController {

    public function __construct(UnidadeService $unidadeService)
    {
        $this->generic = $unidadeService;
    }

}

