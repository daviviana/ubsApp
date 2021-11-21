<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\EscalaService;

class EscalaController extends GenericController
{

    public function __construct(EscalaService $escalaService)
    {
        $this->generic = $escalaService;
    }

}
