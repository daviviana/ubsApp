<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RetiradaRemedio extends Model
{
    protected $table = 'retiradaremedio';
    protected $primaryKey = 'idRetiradaRemedio';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'data',
        'idFuncionario',
        'idPaciente',
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
