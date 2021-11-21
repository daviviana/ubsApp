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

    }

    /* Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {}
}
