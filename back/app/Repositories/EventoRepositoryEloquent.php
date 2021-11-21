<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Evento;

class EventoRepositoryEloquent extends RepositoryEloquent implements EventoRepositoryInterface
{

    public function __construct(Evento $evento)
    {
        $this->model = $evento;
    }

}
