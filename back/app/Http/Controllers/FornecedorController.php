<?php

namespace App\Http\Controllers;

use App\Services\FornecedorService;
use App\Http\Controllers\GenericController;

class FornecedorController extends GenericController {

    public function __construct(FornecedorService $fornecedorService)
    {
        $this->generic = $fornecedorService;
    }

}

