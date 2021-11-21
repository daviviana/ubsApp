<?php


namespace App\Services;

use Illuminate\Database\QueryException;

class Service
{

    protected $repository;

    public function __construct() {
        // Empty constructor
    }

    public function list() {
		try {
			return $this->repository->list();
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
	}

	public function get(int $id) {
		try {
			return $this->repository->get($id);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
	}

	public function create(array $data) {
		try {
			return $this->repository->create($data);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
	}

	public function update(int $id, array $data) {
		try {
			return $this->repository->update($id, $data);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
	}

	public function delete(int $id) {
		try {
			return $this->repository->delete($id);
		} catch (QueryException $e) {
            return ['error' => $e->getMessage()];
		}
	}

}
