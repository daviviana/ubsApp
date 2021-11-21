<?php

namespace App\Http\Controllers;

use App\Models\Funcionario;
use App\Services\AuthService;
use App\Services\FuncionarioService;
use App\Services\MenuService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Tymon\JWTAuth\JWTAuth;
use Validator;

class AuthController extends Controller
{
    /**
     * @var JWTAuth
     */
    private $jwtAuth;
    private $autSrv;
    private $funcionarioSrv;
    private $menuSrv;

    public function __construct(
        JWTAuth $jwtAuth,
        AuthService $autSrv,
        FuncionarioService $funcionarioSrv,
        MenuService $menuSrv
    ) {
        $this->jwtAuth = $jwtAuth;
        $this->autSrv = $autSrv;
        $this->funcionarioSrv = $funcionarioSrv;
        $this->menuSrv = $menuSrv;
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!$token = $this->jwtAuth->attempt($credentials)) {
            return response()->json(['error' => 'Email ou Senha incorretos'], Response::HTTP_UNAUTHORIZED);
        }

        $user = $this->jwtAuth->authenticate($token);
        $token = 'Bearer ' . $token;
        $funcionario = $this->funcionarioSrv->get($user['idFuncionario']);
        $menus = $this->menuSrv->getMenusPermissao($funcionario['permissao']);
        return response()->json(compact('token','menus','funcionario'));
    }

    public function refresh()
    {
        $token = $this->jwtAuth->getToken();
        $token = $this->jwtAuth->refresh($token);
        return response()->json(compact('token'));
    }

    public function logout()
    {
        $token = $this->jwtAuth->getToken();
        $this->jwtAuth->invalidate($token);
        return response()->json(['logout']);
    }

    public function register(Request $request)
    {
        $validacao = Validator::make(
            $request->all(),
            [
                'email' => 'required|email|max:255',
                'password' => 'required|max:255',
            ],
            [
                'required' => 'O campo :attribute é obrigatório.',
                'email' => 'O campo :attribute deve ser um email valido',
                'max' => 'O :attribute deve ter no maximo :max caracteres',
                'min' => 'O :attribute deve ter no mínimo :min caracteres',
            ]
        );
        if ($validacao->fails()) {
            return response()->json($validacao->errors(), Response::HTTP_BAD_REQUEST);
        } else {
            $data = $request->all();
            return response()->json($this->autSrv->register($data), Response::HTTP_OK);
        }
    }

    public function novaSenha(Request $request)
    {
        $validacao = Validator::make(
            $request->all(),
            [
                'email'       => 'required|max:255',
                'oldPassword' => 'required|max:255',
                'newPassword' => 'required|max:255',
                'confirmPassword' => 'required|max:255',
            ],
            [
                'required' => 'O campo :attribute é obrigatório.',
                'email' => 'O campo :attribute deve ser um email valido',
                'max' => 'O :attribute deve ter no maximo :max caracteres',
                'min' => 'O :attribute deve ter no mínimo :min caracteres',
            ]
        );
        if ($validacao->fails()) {
            return response()->json($validacao->errors(), Response::HTTP_BAD_REQUEST);
        } else {
            $data = $request->all();
            $result = $this->autSrv->newPassword($data);
            if(isset($result['error'])){
                if($result['error'] == 'Senha incorreta'){
                    return response()->json($result['error'], Response::HTTP_UNAUTHORIZED);
                }elseif($result['error'] == 'As senhas não correspondem'){
                    return response()->json($result['error'], Response::HTTP_BAD_REQUEST);
                }
            } else {
                return response()->json($result, Response::HTTP_OK);
            }

        }
    }

}
