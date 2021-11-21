<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dependecias extends Model
{
    protected $table = 'dependencias';
    protected $primaryKey = 'idDependencia';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nome',
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
