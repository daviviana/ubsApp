<?php
namespace App\Repositories;

interface RepositoryInterface
{
    public function list();
    public function get(int $id);
    public function create(array $dados);
    public function update(int $id, array $dados);
    public function delete(int $id);
}
