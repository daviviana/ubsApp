<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            'App\Repositories\UserRepositoryInterface',
            'App\Repositories\UserRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\MenuRepositoryInterface',
            'App\Repositories\MenuRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\FuncionarioRepositoryInterface',
            'App\Repositories\FuncionarioRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\FuncionarioEnderecoRepositoryInterface',
            'App\Repositories\FuncionarioEnderecoRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\PacienteRepositoryInterface',
            'App\Repositories\PacienteRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\PacienteEnderecoRepositoryInterface',
            'App\Repositories\PacienteEnderecoRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\UnidadeRepositoryInterface',
            'App\Repositories\UnidadeRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\UnidadeEnderecoRepositoryInterface',
            'App\Repositories\UnidadeEnderecoRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\EventoRepositoryInterface',
            'App\Repositories\EventoRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\FornecedorRepositoryInterface',
            'App\Repositories\FornecedorRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\MedicamentoRepositoryInterface',
            'App\Repositories\MedicamentoRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\EquipamentoRepositoryInterface',
            'App\Repositories\EquipamentoRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\DependeciaRepositoryInterface',
            'App\Repositories\DependeciaRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\AtendimentoRepositoryInterface',
            'App\Repositories\AtendimentoRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\EspecialidadeRepositoryInterface',
            'App\Repositories\EspecialidadeRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\EscalaRepositoryInterface',
            'App\Repositories\EscalaRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\DataHoraConsultaRepositoryInterface',
            'App\Repositories\DataHoraConsultaRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\RetiradaRemedioRepositoryInterface',
            'App\Repositories\RetiradaRemedioRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\VacinaRepositoryInterface',
            'App\Repositories\VacinaRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\VacinacaoRepositoryInterface',
            'App\Repositories\VacinacaoRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\ProcedimentosRepositoryInterface',
            'App\Repositories\ProcedimentosRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\ProcedimentoFeitoRepositoryInterface',
            'App\Repositories\ProcedimentoFeitoRepositoryEloquent'
        );

        $this->app->bind(
            'App\Repositories\MedicoRepositoryInterface',
            'App\Repositories\MedicoRepositoryEloquent'
        );

    }

    /* Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {}
}
