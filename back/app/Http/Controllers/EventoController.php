<?php

namespace App\Http\Controllers;

use App\Http\Controllers\GenericController;
use App\Services\EventoService;

class EventoController extends GenericController
{

    public function __construct(EventoService $eventoService)
    {
        $this->generic = $eventoService;
    }

}
