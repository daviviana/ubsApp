<?php
namespace App\Repositories;

use App\Repositories\RepositoryEloquent;
use App\User;

class UserRepositoryEloquent extends RepositoryEloquent implements UserRepositoryInterface
{

    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function getUserEmail(string $email) {
        return $this->model->select()->where('email',$email)->first();
    }

}
