<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PacienteEndereco extends Model
{
    protected $table = 'pacientesenderecos';
    protected $primaryKey = 'idPacienteEndereco';

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
        'idPaciente',
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
