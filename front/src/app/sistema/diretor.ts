export class Diretor {
    nome: string = '';
    genero: string ='';
    dataNasc: string = '';
    cpf: string = ''
    endereco: Endereco = new Endereco();
    contato: Contato = new Contato();
    cargo: string = '';
    cadastroPref: string = '';
    credencial: string = '';
    especialidade: string = '';
    unidade: string = '';
}

export class DiretorSimples {
    nome: string = '';
    cadastroPref: string = '';
    credencial: string = '';
    especialidade: string = '';
    unidade: string = '';
}

export class Endereco {
    rua: string = '';
    bairro: string = '';
    numero: string = '';
    cidade: string = '';
    cep: string = '';
    complemento: string = '';
}

export class Contato {
    email: string = '';
    telefone: string = '';
    numeroEmergencia: string = '';
}