<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\EspecialidadeService;

class EspecialidadeController extends GenericController
{

    public function __construct(EspecialidadeService $especialidadeService)
    {
        $this->generic = $especialidadeService;
    }

}
