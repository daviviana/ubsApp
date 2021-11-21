<?php
namespace App\Repositories;

interface MenuRepositoryInterface extends RepositoryInterface
{
    public function getMenusPermissao(string $permissao);
}
