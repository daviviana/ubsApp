<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vacinacao extends Model
{
    protected $table = 'vacinacao';
    protected $primaryKey = 'idVacinacao';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'data',
        'dose',
        'idPaciente',
        'idVacina',
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
