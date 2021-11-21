<?php
namespace App\Repositories;

interface DataHoraConsultaRepositoryInterface extends RepositoryInterface
{
    public function getDataHoraConsultaByDate(string $data);
}
