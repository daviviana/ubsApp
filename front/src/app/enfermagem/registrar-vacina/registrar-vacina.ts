import { Funcionario } from "src/app/administrativo/funcionario";

export class Vacina {
    idVacina?: String | undefined;
    data: String | undefined;
    nomeVacina: String | undefined;
    dose: String | undefined;
    nome: Funcionario | undefined;
}

export class RegistrarVacinas {
    vacina: String | undefined;
}