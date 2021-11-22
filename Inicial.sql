create database ubsteste;
use ubsteste;


CREATE TABLE `atendimentos` (
    `idAtendimento` int(11) NOT NULL AUTO_INCREMENT,
    `data` date NOT NULL,
    `statusAtendimento` varchar(1) NOT NULL,
    `observacao` varchar(120) DEFAULT NULL,
    `idPaciente` bigint(20) NOT NULL,
    `idFuncionario` int(11) NOT NULL,
    `idDataHoraConsulta` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`idAtendimento`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `datahoraconsulta` (
    `idDataHoraConsulta` int(11) NOT NULL AUTO_INCREMENT,
    `data` date DEFAULT NULL,
    `hora` time DEFAULT NULL,
    `disponivel` tinyint(4) DEFAULT NULL,
    PRIMARY KEY (`idDataHoraConsulta`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `dependencias` (
    `idDependencia` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(70) NOT NULL,
    `idUnidade` int(11) NOT NULL,
    PRIMARY KEY (`idDependencia`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `equipamentos` (
    `idEquipamento` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(100) NOT NULL,
    `dataRecebimento` date NOT NULL,
    `validade` date NOT NULL,
    `finalidade` varchar(600) NOT NULL,
    `reutilizavel` tinyint(1) NOT NULL,
    `idFornecedor` int(11) NOT NULL,
    `idDependencia` int(11) NOT NULL,
    PRIMARY KEY (`idEquipamento`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `escalas` (
    `idEscala` int(11) NOT NULL AUTO_INCREMENT,
    `idFuncionario` int(11) NOT NULL,
    `data` date NOT NULL,
    PRIMARY KEY (`idEscala`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `especialidades` (
    `idEspecialidade` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`idEspecialidade`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `eventos` (
    `idEvento` int(11) NOT NULL AUTO_INCREMENT,
    `evento` varchar(60) DEFAULT NULL,
    `datahora` datetime DEFAULT NULL,
    `mensagem` varchar(700) DEFAULT NULL,
    `idFuncionario` int(11) DEFAULT NULL,
    PRIMARY KEY (`idEvento`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `fornecedores` (
    `idFornecedor` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(100) NOT NULL,
    PRIMARY KEY (`idFornecedor`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `funcionarios` (
    `idFuncionario` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(45) NOT NULL,
    `dataNascimento` date NOT NULL,
    `cargo` varchar(100) NOT NULL,
    `cpf` varchar(14) NOT NULL,
    `permissao` varchar(1) NOT NULL,
    `idUnidade` int(11) DEFAULT NULL,
    `telefone` varchar(13) NOT NULL,
    `cadastroPref` varchar(40) NOT NULL,
    `idEndereco` int(11) DEFAULT NULL,
    `status` tinyint(4) DEFAULT NULL,
    PRIMARY KEY (`idFuncionario`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `funcionariosenderecos` (
    `idFuncionarioEndereco` int(11) NOT NULL AUTO_INCREMENT,
    `endereco` varchar(255) NOT NULL,
    `numero` varchar(255) NOT NULL,
    `bairro` varchar(255) NOT NULL,
    `cidade` varchar(255) NOT NULL,
    `complemento` varchar(255) DEFAULT NULL,
    `cep` int(11) NOT NULL,
    PRIMARY KEY (`idFuncionarioEndereco`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `medicamentos` (
    `idMedicamento` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(200) DEFAULT NULL,
    `lote` varchar(200) DEFAULT NULL,
    `dataChegada` date DEFAULT NULL,
    `validade` date DEFAULT NULL,
    `quantidade` int(11) DEFAULT NULL,
    `fornecedor` varchar(200) DEFAULT NULL,
    `idUnidade` int(11) DEFAULT NULL,
    PRIMARY KEY (`idMedicamento`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `medicos` (
    `idMedico` int(11) NOT NULL AUTO_INCREMENT,
    `credencial` varchar(255) NOT NULL,
    `idEspecialidade` int(11) NOT NULL,
    `idFuncionario` int(11) DEFAULT NULL,
    PRIMARY KEY (`idMedico`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `menus` (
    `idMenu` int(11) NOT NULL AUTO_INCREMENT,
    `class` varchar(255) NOT NULL,
    `route` varchar(255) NOT NULL,
    `permissao` varchar(255) NOT NULL,
    `name` varchar(111) DEFAULT NULL,
    PRIMARY KEY (`idMenu`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `pacientes` (
    `idPaciente` bigint(20) NOT NULL AUTO_INCREMENT,
    `nome` varchar(100) NOT NULL,
    `cpf` varchar(14) NOT NULL,
    `dataNascimento` date NOT NULL,
    `telefone` varchar(13) DEFAULT NULL,
    `email` varchar(40) DEFAULT NULL,
    `sus` varchar(45) DEFAULT NULL,
    `idEndereco` int(11) DEFAULT NULL,
    `nomeMae` varchar(255) DEFAULT NULL,
    `status` tinyint(4) DEFAULT NULL,
    PRIMARY KEY (`idPaciente`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `pacientesenderecos` (
    `idPacienteEndereco` int(11) NOT NULL AUTO_INCREMENT,
    `endereco` varchar(255) NOT NULL,
    `numero` varchar(255) NOT NULL,
    `bairro` varchar(255) NOT NULL,
    `cidade` varchar(255) NOT NULL,
    `complemento` varchar(255) DEFAULT NULL,
    `cep` int(11) NOT NULL,
    PRIMARY KEY (`idPacienteEndereco`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `procedimentos` (
    `idProcedimento` int(11) NOT NULL,
    `nome` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`idProcedimento`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `procedimentosfeitos` (
    `idProcedimentoFeito` int(11) NOT NULL AUTO_INCREMENT,
    `data` date DEFAULT NULL,
    `idProcedimento` int(11) DEFAULT NULL,
    `idPaciente` int(11) DEFAULT NULL,
    `idFuncionario` int(11) DEFAULT NULL,
    PRIMARY KEY (`idProcedimentoFeito`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `retiradaremedio` (
    `idRetiradaRemedio` int(11) NOT NULL,
    `data` date DEFAULT NULL,
    `idFuncionario` int(11) DEFAULT NULL,
    `idPaciente` int(11) DEFAULT NULL,
    `idUnidade` int(11) DEFAULT NULL,
    `idMedicamento` int(11) DEFAULT NULL,
    PRIMARY KEY (`idRetiradaRemedio`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `unidades` (
    `idUnidade` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(255) DEFAULT NULL,
    `idEndereco` int(11) DEFAULT NULL,
    `idFuncionario` int(11) DEFAULT NULL,
    `telefone` varchar(45) DEFAULT NULL,
    `email` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`idUnidade`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `unidadesenderecos` (
    `idUnidadeEndereco` int(11) NOT NULL AUTO_INCREMENT,
    `endereco` varchar(255) NOT NULL,
    `numero` varchar(255) NOT NULL,
    `bairro` varchar(255) NOT NULL,
    `cidade` varchar(255) NOT NULL,
    `complemento` varchar(255) DEFAULT NULL,
    `cep` int(11) NOT NULL,
    PRIMARY KEY (`idUnidadeEndereco`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(255) DEFAULT NULL,
    `password` varchar(255) DEFAULT NULL,
    `isActive` varchar(45) DEFAULT NULL,
    `created_at` datetime DEFAULT NULL,
    `updated_at` datetime DEFAULT NULL,
    `idFuncionario` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;

CREATE TABLE `vacina` (
    `idVacina` int(11) NOT NULL,
    `nome` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`idVacina`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE `vacinacao` (
    `idVacinacao` int(11) NOT NULL,
    `data` date DEFAULT NULL,
    `dose` int(11) DEFAULT NULL,
    `idPaciente` int(11) DEFAULT NULL,
    `idVacina` int(11) DEFAULT NULL,
    `idFuncionario` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`idVacinacao`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (1,'person_add','atendente/cadastro-paciente','A','Cadastro de paciente');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (2,'calendar_today','atendente/marca-consulta','A','Marcação de consulta');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (3,'search','atendente/encontrar-paciente','A','Encontrar Paciente');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (4,'groups','administrativo/gerenciar-plantoes','D','Gerenciar Plantões');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (5,'search','administrativo/encontrar-funcionario','D','Encontrar Funcionário');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (6,'person_add','administrativo/cadastro-funcionario','D','Cadastro de Funcionário');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (7,'app_registration','sistema/cadastrar-unidade','S','Cadastrar Unidade');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (8,'view_list','sistema/listar-unidades','S','Listar Unidades');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (9,'how_to_reg','sistema/cadastrar-diretor','S','Cadastrar Diretor');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (10,'manage_accounts','sistema/listar-diretores','S','Listar Diretores');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (11,'description','medico/listar-consultas','M','Lista de Consultas');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (13,'inventory_2','farmacia/estoque','F','Estoque');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (14,'file_download','farmacia/abastecimento','F','Abastecimento');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (15,'outbox','farmacia/historico','F','Historico');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (16,'vaccines','enfermagem/registrar-vacina','E','Registrar Vacina');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (17,'local_hospital','enfermagem/registrar-procedimento','E','Registrar Procedimento');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (18,'description','ortodontia/listar-consultas','O','Lista de Consultas');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (19,'description','psicologia/listar-consultas','P','Lista de Consultas');

INSERT INTO `unidadesenderecos` (`idUnidadeEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (1,'R. Lions','40','Jardim Iporanga','Guarulhos','Jardim Iporanga',7124090);
INSERT INTO `unidadesenderecos` (`idUnidadeEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (2,'R. Pessegueiro, 111','111','Parque Continental II','Guarulhos','Parque Continental II',7084250);
INSERT INTO `unidadesenderecos` (`idUnidadeEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (3,'Av.Brigadeiro Faria Lima','1361','Jardim Cocaia','Guarulhos','Jardim Cocaia',7130000);

INSERT INTO `unidades` (`idUnidade`,`nome`,`idEndereco`,`idFuncionario`,`telefone`,`email`) VALUES (1,'UBS Vila Rio de Janeiro\n',1,1,'+551124574664','http://www.guarulhos.sp.gov.br/');
INSERT INTO `unidades` (`idUnidade`,`nome`,`idEndereco`,`idFuncionario`,`telefone`,`email`) VALUES (2,'UBS Continental ',2,2,'+551124567946','http://www.guarulhos.sp.gov.br/');
INSERT INTO `unidades` (`idUnidade`,`nome`,`idEndereco`,`idFuncionario`,`telefone`,`email`) VALUES (3,'UBS Jardim Jovaia\n',3,3,'+551124014808','http://www.guarulhos.sp.gov.br/');

INSERT INTO `funcionariosenderecos` (`idFuncionarioEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (1,'Viela Pérsia','12','Jardim Silvia','Guarulhos','Jardim Silvia',7141330);
INSERT INTO `funcionariosenderecos` (`idFuncionarioEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (2,'Rua Nassau','13','Aguazul','Guarulhos','Aguazul',7159530);
INSERT INTO `funcionariosenderecos` (`idFuncionarioEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (3,'Viela Particular','14','Recreio São Jorge','Guarulhos','Recreio São Jorge',7144675);
INSERT INTO `funcionariosenderecos` (`idFuncionarioEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (4,'Rua Antônio Carlos Gomes','21','Vila Nisia','Guarulhos','Vila Nisia',7093070);
INSERT INTO `funcionariosenderecos` (`idFuncionarioEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (5,'Rua Lafaiete Coutinho','32','Rua Lafaiete Coutinho','Guarulhos','Rua Lafaiete Coutinho',7171280);
INSERT INTO `funcionariosenderecos` (`idFuncionarioEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (6,'Avenida Lino Antônio Nogueira','431','Jardim Santa Francisca','Guarulhos','Jardim Santa Francisca',7024030);
INSERT INTO `funcionariosenderecos` (`idFuncionarioEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (7,'Viela Boqueirão','153','Jardim Moreira','Guarulhos','Jardim Moreira',7082241);
INSERT INTO `funcionariosenderecos` (`idFuncionarioEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (8,'Rua Arroio Chuí','231','Vila Flora','Guarulhos','Vila Flora',7042170);
INSERT INTO `funcionariosenderecos` (`idFuncionarioEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (9,'Rua Mendes','563','Jardim Santa Edwirges','Guarulhos','Jardim Santa Edwirges',7145319);
INSERT INTO `funcionariosenderecos` (`idFuncionarioEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (10,'Viela Moçambique','31','Cidade Seródio','Guarulhos','Cidade Seródio',7150576);
INSERT INTO `funcionariosenderecos` (`idFuncionarioEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (11,'Rua Santa Cecília','431','Vila Paraíso','Guarulhos','Vila Paraíso',7241300);

INSERT INTO `funcionarios` (`idFuncionario`,`nome`,`dataNascimento`,`cargo`,`cpf`,`permissao`,`idUnidade`,`telefone`,`cadastroPref`,`idEndereco`,`status`) VALUES (1,'Salomão Milheiriço Tinoco','1970-05-08','Diretor','42711560007','D',1,'(16) 3823-4281','174528978',1,1);
INSERT INTO `funcionarios` (`idFuncionario`,`nome`,`dataNascimento`,`cargo`,`cpf`,`permissao`,`idUnidade`,`telefone`,`cadastroPref`,`idEndereco`,`status`) VALUES (2,'Mariano Natal Ventura','1970-09-16','Diretor','87537249091','D',2,'(11) 3477-7542','438885739',2,1);
INSERT INTO `funcionarios` (`idFuncionario`,`nome`,`dataNascimento`,`cargo`,`cpf`,`permissao`,`idUnidade`,`telefone`,`cadastroPref`,`idEndereco`,`status`) VALUES (3,'Angela Quintela Bezerril','1972-06-16','Diretor','82182981004','D',3,'(18) 2692-0163','218264628',3,1);
INSERT INTO `funcionarios` (`idFuncionario`,`nome`,`dataNascimento`,`cargo`,`cpf`,`permissao`,`idUnidade`,`telefone`,`cadastroPref`,`idEndereco`,`status`) VALUES (4,'Adélia Moreira Liberato','1973-03-02','Administrativa','55314305070','D',1,'(13) 2609-1464','207271835',4,1);
INSERT INTO `funcionarios` (`idFuncionario`,`nome`,`dataNascimento`,`cargo`,`cpf`,`permissao`,`idUnidade`,`telefone`,`cadastroPref`,`idEndereco`,`status`) VALUES (5,'Samantha Montenegro Almada','1975-02-06','Atendente SUS','92353265081','A',1,'(14) 2668-5215','265376762',5,1);
INSERT INTO `funcionarios` (`idFuncionario`,`nome`,`dataNascimento`,`cargo`,`cpf`,`permissao`,`idUnidade`,`telefone`,`cadastroPref`,`idEndereco`,`status`) VALUES (6,'Gilson Grande Muniz','1977-11-03','Clínica','13781425002','M',1,'(17) 3496-7426','381814087',6,1);
INSERT INTO `funcionarios` (`idFuncionario`,`nome`,`dataNascimento`,`cargo`,`cpf`,`permissao`,`idUnidade`,`telefone`,`cadastroPref`,`idEndereco`,`status`) VALUES (7,'Bia Barcelos Garcia','1979-09-07','Odontologia','53303749019','O',1,'(19) 2435-2617','459688273',7,1);
INSERT INTO `funcionarios` (`idFuncionario`,`nome`,`dataNascimento`,`cargo`,`cpf`,`permissao`,`idUnidade`,`telefone`,`cadastroPref`,`idEndereco`,`status`) VALUES (8,'Maurício Valadim Carreira','1982-09-13','Psicologia','22559285070','P',1,'(17) 3453-8608','324409679',8,1);
INSERT INTO `funcionarios` (`idFuncionario`,`nome`,`dataNascimento`,`cargo`,`cpf`,`permissao`,`idUnidade`,`telefone`,`cadastroPref`,`idEndereco`,`status`) VALUES (9,'Teresinha Amaral Pestana','1985-02-13','Sistema','58372132011','S',1,'(18) 2398-4049','360242261',9,1);
INSERT INTO `funcionarios` (`idFuncionario`,`nome`,`dataNascimento`,`cargo`,`cpf`,`permissao`,`idUnidade`,`telefone`,`cadastroPref`,`idEndereco`,`status`) VALUES (10,'Heloisa Caetano Cachão','1985-08-07','Farmácia','47340700080','F',1,'(17) 2776-8280','311428988',10,1);
INSERT INTO `funcionarios` (`idFuncionario`,`nome`,`dataNascimento`,`cargo`,`cpf`,`permissao`,`idUnidade`,`telefone`,`cadastroPref`,`idEndereco`,`status`) VALUES (11,'Matei Toledo Camacho','1987-03-11','Enfermagem','16286150013','E',1,'(11) 3420-3491','216666909',11,1);

INSERT INTO `users` (`id`,`email`,`password`,`isActive`,`created_at`,`updated_at`,`idFuncionario`) VALUES (1,'174528978','$2y$10$lARwIy615pMr/73eOzDyYewfqjHsOnNurptj7KuZiFOJLdVAme1j.','1','2021-11-21 00:49:35','2021-11-21 00:49:35',1);
INSERT INTO `users` (`id`,`email`,`password`,`isActive`,`created_at`,`updated_at`,`idFuncionario`) VALUES (2,'438885739','$2y$10$lARwIy615pMr/73eOzDyYewfqjHsOnNurptj7KuZiFOJLdVAme1j.','1','2021-11-21 00:49:35','2021-11-21 00:49:35',2);
INSERT INTO `users` (`id`,`email`,`password`,`isActive`,`created_at`,`updated_at`,`idFuncionario`) VALUES (3,'218264628','$2y$10$lARwIy615pMr/73eOzDyYewfqjHsOnNurptj7KuZiFOJLdVAme1j.','1','2021-11-21 00:49:35','2021-11-21 00:49:35',3);
INSERT INTO `users` (`id`,`email`,`password`,`isActive`,`created_at`,`updated_at`,`idFuncionario`) VALUES (4,'207271835','$2y$10$lARwIy615pMr/73eOzDyYewfqjHsOnNurptj7KuZiFOJLdVAme1j.','1','2021-11-21 00:49:35','2021-11-21 00:49:35',4);
INSERT INTO `users` (`id`,`email`,`password`,`isActive`,`created_at`,`updated_at`,`idFuncionario`) VALUES (5,'265376762','$2y$10$lARwIy615pMr/73eOzDyYewfqjHsOnNurptj7KuZiFOJLdVAme1j.','1','2021-11-21 00:49:35','2021-11-21 00:49:35',5);
INSERT INTO `users` (`id`,`email`,`password`,`isActive`,`created_at`,`updated_at`,`idFuncionario`) VALUES (6,'381814087\n','$2y$10$lARwIy615pMr/73eOzDyYewfqjHsOnNurptj7KuZiFOJLdVAme1j.','1','2021-11-21 00:49:35','2021-11-21 00:49:35',6);
INSERT INTO `users` (`id`,`email`,`password`,`isActive`,`created_at`,`updated_at`,`idFuncionario`) VALUES (7,'459688273','$2y$10$lARwIy615pMr/73eOzDyYewfqjHsOnNurptj7KuZiFOJLdVAme1j.','1','2021-11-21 00:49:35','2021-11-21 00:49:35',7);
INSERT INTO `users` (`id`,`email`,`password`,`isActive`,`created_at`,`updated_at`,`idFuncionario`) VALUES (8,'324409679','$2y$10$lARwIy615pMr/73eOzDyYewfqjHsOnNurptj7KuZiFOJLdVAme1j.','1','2021-11-21 00:49:35','2021-11-21 00:49:35',8);
INSERT INTO `users` (`id`,`email`,`password`,`isActive`,`created_at`,`updated_at`,`idFuncionario`) VALUES (9,'360242261','$2y$10$lARwIy615pMr/73eOzDyYewfqjHsOnNurptj7KuZiFOJLdVAme1j.','1','2021-11-21 00:49:35','2021-11-21 00:49:35',9);
INSERT INTO `users` (`id`,`email`,`password`,`isActive`,`created_at`,`updated_at`,`idFuncionario`) VALUES (10,'311428988','$2y$10$lARwIy615pMr/73eOzDyYewfqjHsOnNurptj7KuZiFOJLdVAme1j.','1','2021-11-21 00:49:35','2021-11-21 00:49:35',10);
INSERT INTO `users` (`id`,`email`,`password`,`isActive`,`created_at`,`updated_at`,`idFuncionario`) VALUES (11,'216666909','$2y$10$lARwIy615pMr/73eOzDyYewfqjHsOnNurptj7KuZiFOJLdVAme1j.','1','2021-11-21 00:49:35','2021-11-21 00:49:35',11);

INSERT INTO `pacientesenderecos` (`idPacienteEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (1,'Rua Colônia Leopoldina','123','Cidade Industrial Satélite de São Paulo','Guarulhos','Cidade Industrial Satélite de São Paulo',7220040);
INSERT INTO `pacientesenderecos` (`idPacienteEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (2,'Rua Barão de Grajaú','321','Parque das Nações','Guarulhos','Parque das Nações',7243210);
INSERT INTO `pacientesenderecos` (`idPacienteEndereco`,`endereco`,`numero`,`bairro`,`cidade`,`complemento`,`cep`) VALUES (3,'Rua Timbiras','221','Jardim Brasil','Guarulhos','Jardim Brasil',7270330);

INSERT INTO `pacientes` (`idPaciente`,`nome`,`cpf`,`dataNascimento`,`telefone`,`email`,`sus`,`idEndereco`,`nomeMae`,`status`) VALUES (1,'Gabriela Baptista Muniz','44299279018','1980-06-03','(13) 2707-848','dell_batz@gmail.com','176608706450009',1,'Vânia Fagundes Domingues',1);
INSERT INTO `pacientes` (`idPaciente`,`nome`,`cpf`,`dataNascimento`,`telefone`,`email`,`sus`,`idEndereco`,`nomeMae`,`status`) VALUES (2,'Patrício Mateus Carvalho','64839440042','1982-02-19','(18) 3585-005','amya.kozey66@hotmail.com','145746114730003',2,'Jasmeet Lara Pacheco',1);
INSERT INTO `pacientes` (`idPaciente`,`nome`,`cpf`,`dataNascimento`,`telefone`,`email`,`sus`,`idEndereco`,`nomeMae`,`status`) VALUES (3,'Hossana Melgaço Noronha','84112839090','1983-04-15','(13) 3935-370','georgette_zieme@hotmail.com','909622795450009',3,'Janaína Tigre Brásio',1);

INSERT INTO `especialidades` (`idEspecialidade`,`nome`) VALUES (1,'Odontologia');
INSERT INTO `especialidades` (`idEspecialidade`,`nome`) VALUES (2,'Psicologia');
INSERT INTO `especialidades` (`idEspecialidade`,`nome`) VALUES (3,'Clínica');
INSERT INTO `especialidades` (`idEspecialidade`,`nome`) VALUES (4,'Farmacêutica');
INSERT INTO `especialidades` (`idEspecialidade`,`nome`) VALUES (5,'Enfermagem');

INSERT INTO `medicos` (`idMedico`,`credencial`,`idEspecialidade`,`idFuncionario`) VALUES (1,'74416447',1,7);
INSERT INTO `medicos` (`idMedico`,`credencial`,`idEspecialidade`,`idFuncionario`) VALUES (2,'41355313',2,8);
INSERT INTO `medicos` (`idMedico`,`credencial`,`idEspecialidade`,`idFuncionario`) VALUES (3,'78644142',3,6);
INSERT INTO `medicos` (`idMedico`,`credencial`,`idEspecialidade`,`idFuncionario`) VALUES (4,'44649749',4,10);
INSERT INTO `medicos` (`idMedico`,`credencial`,`idEspecialidade`,`idFuncionario`) VALUES (5,'79466479',5,11);

INSERT INTO `vacina` (`idVacina`,`nome`) VALUES (1,'Vacina 1');
INSERT INTO `vacina` (`idVacina`,`nome`) VALUES (2,'Vacina 2');
INSERT INTO `vacina` (`idVacina`,`nome`) VALUES (3,'Vacina 3');

INSERT INTO `vacinacao` (`idVacinacao`,`data`,`dose`,`idPaciente`,`idVacina`,`idFuncionario`) VALUES (1,'2021-02-11',1,1,1,'10');
INSERT INTO `vacinacao` (`idVacinacao`,`data`,`dose`,`idPaciente`,`idVacina`,`idFuncionario`) VALUES (2,'2021-08-02',2,2,2,'10');
INSERT INTO `vacinacao` (`idVacinacao`,`data`,`dose`,`idPaciente`,`idVacina`,`idFuncionario`) VALUES (3,'2021-08-27',2,3,3,'10');

INSERT INTO `procedimentos` (`idProcedimento`,`nome`) VALUES (1,'Procedimento 1');
INSERT INTO `procedimentos` (`idProcedimento`,`nome`) VALUES (2,'Procedimento 2');
INSERT INTO `procedimentos` (`idProcedimento`,`nome`) VALUES (3,'Procedimento 3');

INSERT INTO `procedimentosfeitos` (`idProcedimentoFeito`,`data`,`idProcedimento`,`idPaciente`,`idFuncionario`) VALUES (1,'2021-11-17',1,1,10);
INSERT INTO `procedimentosfeitos` (`idProcedimentoFeito`,`data`,`idProcedimento`,`idPaciente`,`idFuncionario`) VALUES (2,'2021-12-09',2,2,10);
INSERT INTO `procedimentosfeitos` (`idProcedimentoFeito`,`data`,`idProcedimento`,`idPaciente`,`idFuncionario`) VALUES (3,'2021-11-15',3,3,10);

INSERT INTO `datahoraconsulta` (`idDataHoraConsulta`,`data`,`hora`,`disponivel`) VALUES (1,'2021-11-21','12:00:00',1);
INSERT INTO `datahoraconsulta` (`idDataHoraConsulta`,`data`,`hora`,`disponivel`) VALUES (2,'2021-11-21','11:00:00',1);
INSERT INTO `datahoraconsulta` (`idDataHoraConsulta`,`data`,`hora`,`disponivel`) VALUES (3,'2021-11-21','11:30:00',1);
INSERT INTO `datahoraconsulta` (`idDataHoraConsulta`,`data`,`hora`,`disponivel`) VALUES (4,'2021-11-22','11:30:00',1);
INSERT INTO `datahoraconsulta` (`idDataHoraConsulta`,`data`,`hora`,`disponivel`) VALUES (5,'2021-11-22','11:40:00',1);
INSERT INTO `datahoraconsulta` (`idDataHoraConsulta`,`data`,`hora`,`disponivel`) VALUES (6,'2021-11-22','11:30:00',1);
INSERT INTO `datahoraconsulta` (`idDataHoraConsulta`,`data`,`hora`,`disponivel`) VALUES (7,'2021-11-23','12:00:00',1);

INSERT INTO `atendimentos` (`idAtendimento`,`data`,`statusAtendimento`,`observacao`,`idPaciente`,`idFuncionario`,`idDataHoraConsulta`) VALUES (1,'2021-11-21','1','Paciente calmo',1,6,'1');
INSERT INTO `atendimentos` (`idAtendimento`,`data`,`statusAtendimento`,`observacao`,`idPaciente`,`idFuncionario`,`idDataHoraConsulta`) VALUES (2,'2021-11-21','1','Paciente irritado',2,7,'2');
INSERT INTO `atendimentos` (`idAtendimento`,`data`,`statusAtendimento`,`observacao`,`idPaciente`,`idFuncionario`,`idDataHoraConsulta`) VALUES (3,'2021-11-21','1','Paciente sensivel',3,8,'3');
INSERT INTO `atendimentos` (`idAtendimento`,`data`,`statusAtendimento`,`observacao`,`idPaciente`,`idFuncionario`,`idDataHoraConsulta`) VALUES (4,'2021-11-22','1','Paciente sensivel',3,6,'4');
INSERT INTO `atendimentos` (`idAtendimento`,`data`,`statusAtendimento`,`observacao`,`idPaciente`,`idFuncionario`,`idDataHoraConsulta`) VALUES (5,'2021-11-22','1','Paciente irritado',2,7,'5');
INSERT INTO `atendimentos` (`idAtendimento`,`data`,`statusAtendimento`,`observacao`,`idPaciente`,`idFuncionario`,`idDataHoraConsulta`) VALUES (6,'2021-11-22','1','Paciente calmo',1,8,'6');
INSERT INTO `atendimentos` (`idAtendimento`,`data`,`statusAtendimento`,`observacao`,`idPaciente`,`idFuncionario`,`idDataHoraConsulta`) VALUES (7,'2021-11-23','1','Paciente calmo',1,7,'7');

INSERT INTO `medicamentos` (`idMedicamento`,`nome`,`lote`,`dataChegada`,`validade`,`quantidade`,`fornecedor`,`idUnidade`) VALUES (1,'Medicamento 1','1','2021-08-27','2051-06-06',12,'Fornecedor 1',1);
INSERT INTO `medicamentos` (`idMedicamento`,`nome`,`lote`,`dataChegada`,`validade`,`quantidade`,`fornecedor`,`idUnidade`) VALUES (2,'Medicamento 2','1','2021-02-11','2052-07-01',31,'Fornecedor 2',1);
INSERT INTO `medicamentos` (`idMedicamento`,`nome`,`lote`,`dataChegada`,`validade`,`quantidade`,`fornecedor`,`idUnidade`) VALUES (3,'Medicamento 3','1','2021-10-20','2052-09-06',21,'Fornecedor 3',1);

INSERT INTO `retiradaremedio` (`idRetiradaRemedio`,`data`,`idFuncionario`,`idPaciente`,`idUnidade`,`idMedicamento`) VALUES (1,'2021-08-26',11,1,1,1);
INSERT INTO `retiradaremedio` (`idRetiradaRemedio`,`data`,`idFuncionario`,`idPaciente`,`idUnidade`,`idMedicamento`) VALUES (2,'2021-09-09',11,2,1,2);
INSERT INTO `retiradaremedio` (`idRetiradaRemedio`,`data`,`idFuncionario`,`idPaciente`,`idUnidade`,`idMedicamento`) VALUES (3,'2021-09-16',11,3,1,3);
