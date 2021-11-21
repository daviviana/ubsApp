<?php
namespace App\Repositories;

class RepositoryEloquent {

    protected $model;

    public function __construct() {
        // Empty constructor
    }

    public function list() {
        return $this->model->all();
    }

    public function get(int $id) {
        return $this->model->find($id);
    }

    public function create(array $data) {
        return $this->model->create($data);
    }

    public function update(int $id, array $data) {
        return $this->model->find($id)->update($data);
    }

    public function delete(int $id) {
        return $this->model->find($id)->delete();
    }
}
