<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

// Rotas desprotegidas
Route::post('auth/login', 'AuthController@login');
Route::post('auth/refresh', 'AuthController@refresh');
Route::post('auth/register', 'AuthController@register');
Route::post('auth/resetPassword', 'AuthController@novaSenha');
Route::get('auth/logout', 'AuthController@logout');

// Rota Protegida => Precisa do Token no reader da requisição.
Route::group(['middleware' => 'jwt.auth'], function () {
    Route::group(['prefix' => '/funcionario'], function () {
        Route::get('/', 'FuncionarioController@list');
        Route::get('/diretor', 'FuncionarioController@listaPorDiretos');
        Route::get('/{id?}/{cpf?}/{cadastroPrefeitura?}', 'FuncionarioController@get');
        Route::post('/', 'FuncionarioController@create');
        Route::put('/{id}', 'FuncionarioController@update');
        Route::delete('/{id}', 'FuncionarioController@delete');
    });
    Route::group(['prefix' => '/menu'], function () {
        Route::get('/', 'MenuController@list');
        Route::get('/{id}', 'MenuController@get');
        Route::get('/permissao/{permissao}', 'MenuController@listaPorPermisao');
        Route::post('/', 'MenuController@create');
        Route::put('/{id}', 'MenuController@update');
        Route::delete('/{id}', 'MenuController@delete');
    });

    Route::group(['prefix' => '/paciente'], function () {
        Route::get('/', 'PacienteController@list');
        Route::get('/{id?}/{cpf?}/{cardSus?}', 'PacienteController@get');
        Route::post('/', 'PacienteController@create');
        Route::put('/{id}', 'PacienteController@update');
        Route::delete('/{id}', 'PacienteController@delete');
    });

    Route::group(['prefix' => '/unidade'], function () {
        Route::get('/', 'UnidadeController@list');
        Route::get('/{id}', 'UnidadeController@get');
        Route::post('/', 'UnidadeController@create');
        Route::put('/{id}', 'UnidadeController@update');
        Route::delete('/{id}', 'UnidadeController@delete');
    });

    Route::group(['prefix' => '/endereco/funcionario'], function () {
        Route::get('/', 'FuncionarioEnderecoController@list');
        Route::get('/{id}', 'FuncionarioEnderecoController@get');
        Route::get('/func/{idFuncionario}', 'FuncionarioEnderecoController@listaPorFuncionario');
        Route::post('/', 'FuncionarioEnderecoController@create');
        Route::put('/{id}', 'FuncionarioEnderecoController@update');
        Route::delete('/{id}', 'FuncionarioEnderecoController@delete');
    });

    Route::group(['prefix' => '/endereco/paciente'], function () {
        Route::get('/', 'PacienteEnderecoController@list');
        Route::get('/{id}', 'PacienteEnderecoController@get');
        Route::get('/paci/{idPaciente}', 'PacienteEnderecoController@listaPorPaciente');
        Route::post('/', 'PacienteEnderecoController@create');
        Route::put('/{id}', 'PacienteEnderecoController@update');
        Route::delete('/{id}', 'PacienteEnderecoController@delete');
    });

    Route::group(['prefix' => '/endereco/unidade'], function () {
        Route::get('/', 'UnidadeEnderecoController@list');
        Route::get('/{id}', 'UnidadeEnderecoController@get');
        Route::get('/uni/{idUnidade}', 'UnidadeEnderecoController@listaPorUnidade');
        Route::post('/', 'UnidadeEnderecoController@create');
        Route::put('/{id}', 'UnidadeEnderecoController@update');
        Route::delete('/{id}', 'UnidadeEnderecoController@delete');
    });

    Route::group(['prefix' => '/fornecedor'], function () {
        Route::get('/', 'FornecedorController@list');
        Route::get('/{id}', 'FornecedorController@get');
        Route::post('/', 'FornecedorController@create');
        Route::put('/{id}', 'FornecedorController@update');
        Route::delete('/{id}', 'FornecedorController@delete');
    });

    Route::group(['prefix' => '/medicamento'], function () {
        Route::get('/', 'MedicamentoController@list');
        Route::get('/{id}', 'MedicamentoController@get');
        Route::get('/unidade/{idUnidade}', 'MedicamentoController@listaPorUnidade');
        Route::post('/', 'MedicamentoController@create');
        Route::put('/{id}', 'MedicamentoController@update');
        Route::delete('/{id}', 'MedicamentoController@delete');
    });

    Route::group(['prefix' => '/evento'], function () {
        Route::get('/', 'EventoController@list');
        Route::get('/{id}', 'EventoController@get');
        Route::post('/', 'EventoController@create');
        Route::put('/{id}', 'EventoController@update');
        Route::delete('/{id}', 'EventoController@delete');
    });

    Route::group(['prefix' => '/equipamento'], function () {
        Route::get('/', 'EquipamentoController@list');
        Route::get('/{id}', 'EquipamentoController@get');
        Route::post('/', 'EquipamentoController@create');
        Route::put('/{id}', 'EquipamentoController@update');
        Route::delete('/{id}', 'EquipamentoController@delete');
    });

    Route::group(['prefix' => '/dependecia'], function () {
        Route::get('/', 'DependeciaController@list');
        Route::get('/{id}', 'DependeciaController@get');
        Route::post('/', 'DependeciaController@create');
        Route::put('/{id}', 'DependeciaController@update');
        Route::delete('/{id}', 'DependeciaController@delete');
    });

    Route::group(['prefix' => '/atendimento'], function () {
        Route::get('/', 'AtendimentoController@list');
        Route::get('/{id}', 'AtendimentoController@get');
        Route::get('/paciente/{idPaciente}', 'AtendimentoController@listaAtendimentoPorPacientes');
        Route::get('/medico/{idFuncionario}/{data}', 'AtendimentoController@listaAtendimentoPorMedico');
        Route::post('/', 'AtendimentoController@create');
        Route::put('/{id}', 'AtendimentoController@update');
        Route::delete('/{id}', 'AtendimentoController@delete');
    });

    Route::group(['prefix' => '/escala'], function () {
        Route::get('/', 'EscalaController@list');
        Route::get('/{id}', 'EscalaController@get');
        Route::post('/', 'EscalaController@create');
        Route::put('/{id}', 'EscalaController@update');
        Route::delete('/{id}', 'EscalaController@delete');
    });

    Route::group(['prefix' => '/medico'], function () {
        Route::get('/', 'MedicoController@list');
        Route::get('/{id}', 'MedicoController@get');
        Route::get('/especialidade/{idEspecialidade}', 'MedicoController@listarPorEspecialidade');
        Route::post('/', 'MedicoController@create');
        Route::put('/{id}', 'MedicoController@update');
        Route::delete('/{id}', 'MedicoController@delete');
    });

    Route::group(['prefix' => '/especialidade'], function () {
        Route::get('/', 'EspecialidadeController@list');
        Route::get('/{id}', 'EspecialidadeController@get');
        Route::post('/', 'EspecialidadeController@create');
        Route::put('/{id}', 'EspecialidadeController@update');
        Route::delete('/{id}', 'EspecialidadeController@delete');
    });

    Route::group(['prefix' => '/dataconsulta'], function () {
        Route::get('/', 'DataHoraConsultaController@list');
        Route::get('/{id}', 'DataHoraConsultaController@get');
        Route::get('/data/{data}', 'DataHoraConsultaController@listaPorData');
        Route::post('/', 'DataHoraConsultaController@create');
        Route::put('/{id}', 'DataHoraConsultaController@update');
        Route::delete('/{id}', 'DataHoraConsultaController@delete');
    });

    Route::group(['prefix' => '/retirada'], function () {
        Route::get('/', 'RetiradaRemedioController@list');
        Route::get('/{id}', 'RetiradaRemedioController@get');
        Route::get('/data/{date?}/{idUnidade?}', 'RetiradaRemedioController@listaRemediosPorDataUnidade');
        Route::post('/', 'RetiradaRemedioController@create');
        Route::put('/{id}', 'RetiradaRemedioController@update');
        Route::delete('/{id}', 'RetiradaRemedioController@delete');
    });

    Route::group(['prefix' => '/vacina'], function () {
        Route::get('/', 'VacinaController@list');
        Route::get('/{id}', 'VacinaController@get');
        Route::post('/', 'VacinaController@create');
        Route::put('/{id}', 'VacinaController@update');
        Route::delete('/{id}', 'VacinaController@delete');
    });

    Route::group(['prefix' => '/vacinacao'], function () {
        Route::get('/', 'VacinacaoController@list');
        Route::get('/{id}', 'VacinacaoController@get');
        Route::get('/paciente/{id}', 'VacinacaoController@listaVacinacaoPorPacientes');
        Route::post('/', 'VacinacaoController@create');
        Route::put('/{id}', 'VacinacaoController@update');
        Route::delete('/{id}', 'VacinacaoController@delete');
    });

    Route::group(['prefix' => '/procedimento'], function () {
        Route::get('/', 'ProcedimentoController@list');
        Route::get('/{id}', 'ProcedimentoController@get');
        Route::post('/', 'ProcedimentoController@create');
        Route::put('/{id}', 'ProcedimentoController@update');
        Route::delete('/{id}', 'ProcedimentoController@delete');
    });

    Route::group(['prefix' => '/procedimentofeito'], function () {
        Route::get('/', 'ProcedimentoFeitoController@list');
        Route::get('/{id}', 'ProcedimentoFeitoController@get');
        Route::post('/', 'ProcedimentoFeitoController@create');
        Route::get('/paciente/{id}', 'ProcedimentoFeitoController@listaProcedimentoPorPacientes');
        Route::put('/{id}', 'ProcedimentoFeitoController@update');
        Route::delete('/{id}', 'ProcedimentoFeitoController@delete');
    });

});
