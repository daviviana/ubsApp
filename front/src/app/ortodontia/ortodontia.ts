import { Paciente } from "../atendente/paciente";

export class Consulta {
    idAtendimento: String | undefined;
    paciente: Paciente | undefined;
    data: String | undefined;
    horario: String | undefined;
    nomeFuncionario: any | undefined;
    nomeEspecialidade: any | undefined;
    status: String | undefined;
}