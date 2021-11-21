<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DataHoraConsulta extends Model
{
    protected $table = 'datahoraconsulta';
    protected $primaryKey = 'idDataHoraConsulta';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'data',
        'hora',
        'disponivel',
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
