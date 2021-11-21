<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\DependenciaService;

class DependeciaController extends GenericController
{

    public function __construct(DependenciaService $dependenciaService)
    {
        $this->generic = $dependenciaService;
    }

}
