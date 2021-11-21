/*
-- Query: select * from menus
-- Date: 2021-11-21 05:41
*/
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
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (12,'medication','medico/gerar-receita','M','Gerar Receita');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (13,'inventory_2','farmacia/estoque','F','Estoque');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (14,'file_download','farmacia/abastecimento','F','Abastecimento');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (15,'outbox','farmacia/historico','F','Historico');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (16,'vaccines','enfermagem/registrar-vacina','E','Registrar Vacina');
INSERT INTO `menus` (`idMenu`,`class`,`route`,`permissao`,`name`) VALUES (17,'local_hospital','enfermagem/registrar-procedimento','E','Registrar Procedimento');
