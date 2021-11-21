<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\VacinaService;

class VacinaController extends GenericController
{

    public function __construct(VacinaService $vacinaService)
    {
        $this->generic = $vacinaService;
    }

}
