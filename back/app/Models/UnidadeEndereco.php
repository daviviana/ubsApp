<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UnidadeEndereco extends Model
{
    protected $table = 'unidadesenderecos';
    protected $primaryKey = 'idUnidadeEndereco';

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
        'idUnidade',
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
