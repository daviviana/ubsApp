<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Dependecias;

class DependeciaRepositoryEloquent extends RepositoryEloquent implements DependeciaRepositoryInterface
{

    public function __construct(Dependecias $dependecias)
    {
        $this->model = $dependecias;
    }

}
