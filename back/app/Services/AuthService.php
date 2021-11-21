<?php

namespace App\Services;

use App\Services\UserService;
use Tymon\JWTAuth\JWTAuth;
use Hash;

class AuthService
{
    /**
     * @var JWTAuth
     */
    private $jwtAuth;
    private $userSrv;

    public function __construct(
        JWTAuth $jwtAuth,
        UserService $userSrv
    ) {
        $this->jwtAuth = $jwtAuth;
        $this->userSrv = $userSrv;

    }

    public function newPassword($data){
        $user = $this->userSrv->getUserEmail($data['email']);
        $credentials = [
            'email' => $data['email'],
            'password' => $data['oldPassword'],
        ];
        if (!$token = $this->jwtAuth->attempt($credentials)) {
            return ['error' => 'Senha incorreta'];
        }

        if ($data['newPassword'] == $data['confirmPassword']) {
            $password['password'] = Hash::make($data['newPassword']);
            $result = $this->userSrv->update($user['idUser'], $password);
            return $result;
        } else {
            return ['error' => 'As senhas não correspondem'];
        }
    }

    public function register($dados)
    {
        try {
            $dados['password'] = Hash::make($dados['password']);
            return $this->userSrv->create($dados);
        } catch (QueryException $e) {
            return ['error' => $e->getMessage()];
        }
    }

}
