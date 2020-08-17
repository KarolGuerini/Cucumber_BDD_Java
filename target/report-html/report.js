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
formatter.scenarioOutline({
  "line": 11,
  "name": "Deve validar regras de cadastro de contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 12,
  "name": "adiciono a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 16,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 17,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 18,
      "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;;3"
    }
  ],
  "keyword": "Exemplos"
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
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 6487191500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Deve validar regras de cadastro de contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 12,
  "name": "adiciono a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 790211000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.recebo_a_mensagem(String)"
});
formatter.result({
  "duration": 51610600,
  "status": "passed"
});
formatter.after({
  "duration": 330251800,
  "status": "passed"
});
formatter.after({
  "duration": 708845500,
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
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 6202351900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Deve validar regras de cadastro de contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-de-cadastro-de-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 12,
  "name": "adiciono a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 476663800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.recebo_a_mensagem(String)"
});
formatter.result({
  "duration": 49923500,
  "status": "passed"
});
formatter.after({
  "duration": 289510700,
  "status": "passed"
});
formatter.after({
  "duration": 1137298900,
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
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 14894564800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Nao deve inserir uma conta com nome ja existente",
  "description": "",
  "id": "cadastro-de-contas;nao-deve-inserir-uma-conta-com-nome-ja-existente",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 21,
  "name": "adiciono a conta \"Conta mesmo nome\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "sou notificado que ja existe uma conta com esse nome",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 655530100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJaExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 52852500,
  "status": "passed"
});
formatter.after({
  "duration": 308233300,
  "status": "passed"
});
formatter.after({
  "duration": 736970900,
  "status": "passed"
});
});