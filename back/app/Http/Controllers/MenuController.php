<?php

namespace App\Http\Controllers;

use App\Services\MenuService;
use App\Http\Controllers\GenericController;
use Illuminate\Http\Response;

class MenuController extends GenericController {

    public function __construct(MenuService $menuService)
    {
        $this->generic = $menuService;
    }

    public function listaPorPermisao(string $permissao) {
        $data = $this->generic->getMenusPermissao($permissao);
        if(isset($data['error'])){
            return response()->json($data, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        if ($data) {
            return response()->json($data, Response::HTTP_OK);
        } else {
            return response()->json([], Response::HTTP_OK);
        }
    }

}

