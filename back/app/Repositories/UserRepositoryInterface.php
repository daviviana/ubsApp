<?php
namespace App\Repositories;

interface UserRepositoryInterface extends RepositoryInterface
{
    public function getUserEmail(string $email);
}
