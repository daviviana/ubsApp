<?php

namespace App\Services;

use App\Repositories\EventoRepositoryInterface;

class EventoService extends Service {

    public function __construct(EventoRepositoryInterface $evento){
        $this->repository = $evento;
    }
}

