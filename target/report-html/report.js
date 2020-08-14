$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de contas",
  "description": "\r\nComo um usuario \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuario \"karolteste@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"123456\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 5646964700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karolteste@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "duration": 236273600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 114598000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 773215800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "duration": 53947600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 95134000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 387707100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "a conta e inserida com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 236227600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 567590100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.aContaEInseridaComSucesso()"
});
formatter.result({
  "duration": 49129100,
  "status": "passed"
});
formatter.after({
  "duration": 772393700,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuario \"karolteste@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"123456\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 5166813200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karolteste@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "duration": 221140900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 108966800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 739443400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "duration": 45415600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 88452200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 364201000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Nao deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;nao-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 23,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "sou notificado que o nome da conta e obrigatorio",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 349851600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueONomeDaContaEObrigatorio()"
});
formatter.result({
  "duration": 43860000,
  "status": "passed"
});
formatter.after({
  "duration": 751265600,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuario \"karolteste@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"123456\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 4937116400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karolteste@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "duration": 256188400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 132072600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 718488500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "duration": 64759800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 106986500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 366746700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Nao deve inserir uma conta com nome ja existente",
  "description": "",
  "id": "cadastro-de-contas;nao-deve-inserir-uma-conta-com-nome-ja-existente",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 28,
  "name": "informo a conta \"Conta mesmo nome\"",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "sou notificado que ja existe uma conta com esse nome",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 207545400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 380639900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJaExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 52601700,
  "status": "passed"
});
formatter.after({
  "duration": 1149430400,
  "status": "passed"
});
});