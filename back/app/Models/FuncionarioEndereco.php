<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FuncionarioEndereco extends Model
{
    protected $table = 'funcionariosenderecos';
    protected $primaryKey = 'idFuncionarioEndereco';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'endereco',
        'numero',
        'bairro',
        'cidade',
        'complemento',
        'cep',
        'idFuncionario',
    ];

    public $timestamps = false;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [

    ];

}
