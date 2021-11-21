<?php

namespace App\Services;

use App\Repositories\UserRepositoryInterface;

class UserService extends Service {

    public function __construct(UserRepositoryInterface $user){
        $this->repository = $user;
    }

    public function getUserEmail(string $email){
		try {
			return $this->repository->getUserEmail($email);
		} catch (QueryException $e) {
			return ['error' => $e->getMessage()];
		}
    }
}

