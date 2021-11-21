<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProcedimentoFeito extends Model
{
    protected $table = 'procedimentosfeitos';
    protected $primaryKey = 'idProcedimentoFeito';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'data',
        'idProcedimento',
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
