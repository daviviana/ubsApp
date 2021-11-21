<?php

namespace App\Services;

use App\Repositories\MenuRepositoryInterface;

class MenuService extends Service {

    public function __construct(MenuRepositoryInterface $menu){
        $this->repository = $menu;
    }

    public function getMenusPermissao(string $permissao){
		try {
			return $this->repository->getMenusPermissao($permissao);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }
}

