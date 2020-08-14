#language: pt
Funcionalidade: Cadastro de contas

Como um usuario 
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

Contexto:
Dado que estou acessando a aplicacao
Quando informo o usuario "karolteste@gmail.com"
E a senha "123456"
E seleciono entrar
Entao visualizo a pagina inicial
Quando seleciono Contas
E seleciono Adicionar

Cenario: Deve inserir uma conta com sucesso
E informo a conta "Conta de Teste"
E seleciono Salvar
Entao a conta e inserida com sucesso

Cenario: Nao deve inserir uma conta sem nome
E seleciono Salvar
Entao sou notificado que o nome da conta e obrigatorio


Cenario: Nao deve inserir uma conta com nome ja existente
E informo a conta "Conta mesmo nome"
E seleciono Salvar
Entao sou notificado que ja existe uma conta com esse nome
