<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\Models\Menu;

class MenuRepositoryEloquent extends RepositoryEloquent implements MenuRepositoryInterface
{

    public function __construct(Menu $menu)
    {
        $this->model = $menu;
    }

    public function getMenusPermissao(string $permissao) {
        return $this->model->select()->where('permissao',$permissao)->get();
    }

}
