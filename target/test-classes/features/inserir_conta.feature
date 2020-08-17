#language: pt
Funcionalidade: Cadastro de contas

Como um usuario 
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

Contexto:
Dado que desejo adicionar uma conta 

Esquema do Cenario: Deve validar regras de cadastro de contas
Quando adiciono a conta "<conta>"
Entao recebo a mensagem "<mensagem>"

Exemplos:
 | conta              | mensagem |
 | Conta de Teste     | Conta adicionada com sucesso! |
 |                    | Informe o nome da conta |

Cenario: Nao deve inserir uma conta com nome ja existente 
Quando adiciono a conta "Conta mesmo nome"
Entao sou notificado que ja existe uma conta com esse nome
#Esse cenario acima nao ficou dentro do esquema de cenario pois a acentuacao do eclipse nao recenonhece o acento do ja existe

