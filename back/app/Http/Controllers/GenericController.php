<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Database\QueryException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class GenericController extends Controller {

    protected $generic;

    public function __construct() {
    }

    public function list() {
        $data = $this->generic->list();
        if(isset($data['error'])){
            return response()->json($data, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        if (count($data) > 0) {
            return response()->json($data, Response::HTTP_OK);
        } else {
            return response()->json([], Response::HTTP_OK);
        }
    }

    public function get(int $id) {
        $data = $this->generic->get($id);
        if(isset($data['error'])){
            return response()->json($data, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        if ($data) {
            return response()->json($data, Response::HTTP_OK);
        } else {
            return response()->json([], Response::HTTP_OK);
        }
    }

    public function create(Request $request) {
        $validation = $this->validationCreate($request->all());
        if($validation['result'] == false){
            return response()->json($validation->errors(), Response::HTTP_BAD_REQUEST);
        }else{
            $data = $this->generic->create($request->all());
            if(isset($data['error'])){
                return response()->json($data, Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            return response()->json($data, Response::HTTP_OK);
        }
    }

    public function update(int $id, Request $request) {
        $validation = $this->validationCreate($request->all());
        if($validation['result'] == false){
            return response()->json($validation->errors(), Response::HTTP_BAD_REQUEST);
        }else{
            $data = $this->generic->update(
                $id,
                $request->all()
            );
            if(isset($data['error'])){
                return response()->json($data, Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            return response()->json($data, Response::HTTP_OK);
        }
    }

    public function delete(int $id) {
        try {
            return response()->json($this->generic->delete($id));
        } catch (QueryException $e) {
            return response()->json(['error' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    protected function validationCreate(array $dados){
        $validation = Validator::make(
			$dados,
			[],
			[
				'required'     => 'O campo :attribute é obrigatório.',
				'numeric'      => 'O campo :attribute deve ser numérico.',
				'exists'       => 'O :attribute deve estar cadastrado.',
				'max'          => 'O :attribute deve ter no maximo :max caracteres.'
			]
		);
		if ($validation->fails()) {
			return ['result' => false,'data' => ($validation->errors())];
		} else {
            return ['result' => true];
        }
    }

    protected function validationUpdate(array $dados){
        $validation = Validator::make(
			$dados,
			[],
			[
				'required'     => 'O campo :attribute é obrigatório.',
				'numeric'      => 'O campo :attribute deve ser numérico.',
				'exists'       => 'O :attribute deve estar cadastrado.',
				'max'          => 'O :attribute deve ter no maximo :max caracteres.'
			]
		);
		if ($validation->fails()) {
			return ['result' => false,'data' => ($validation->errors())];
		} else {
            return ['result' => true];
        }
    }

}
