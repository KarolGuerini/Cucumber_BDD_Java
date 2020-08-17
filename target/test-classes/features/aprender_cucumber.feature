# language: pt

  @unit·rios
	Funcionalidade: Aprender Cucumber
	Como aluno
	Quero aprender a utiilizar Cucumber
	Para que eu possa automatizar crit√©rios de aceitacao
	
	Cenario: Deve executar especificacao
		Dado que criei o arquivo corretamente
		Quando executa-lo
		Entao a especificacao deve finalizar com sucesso
		
		@tipo1
		Cenario: Deve incrementar contador
		Dado que o valor do contador e 15
		Quando eu incrementar em 3
		Entao o valor do contador sera 18
		
		
		@tipo2
		Cenario: Deve calcular atraso na entrega
		Dado que a entrega e dia 05/04/2021
		Quando a entrega atrasa em 2 dias
		Entao a entrega sera efetuada em 07/04/2021
		
		@tipo1 @tipo2
		Cenario: Deve calcular atraso na entrega da china
		Dado que a entrega e dia 06/04/2021
		Quando a entrega atrasa em 2 meses
		Entao a entrega sera efetuada em 06/06/2021
		
    Cenario: Deve criar steps genericos para estes passos
    * que o ticket e AF345 
    * que o valor da passagem e R$ 230,45
    * que o nome do passageiro e "Fulano da Silva"
    * que o telefone do passageiro e 9999-9999
    * criar os steps
    * o teste vai funcionar
	
		Cenario: Deve reaproveitar os steps "Dado" do cenario anterior
    Dado que o ticket e AF345
    Dado que o ticket especial e AB167
    Dado que o valor da passagem e R$ 1120,23
    Dado que o nome do passageiro e "Cicrano de Oliveira"
    Dado que o telefone do passageiro e 9888-8888

		@ignore
		Cenario: Deve negar todos os steps "Dado" dos cenarios anteriores
    Dado que o ticket e CD123
    Dado que o ticket e AG1234
    Dado que o valor da passagem e R$ 1.1345,56
    Dado que o nome do passageiro e "Beltrano Souza Matos de Alc‚ntara Azevedo"
    Dado que o telefone do passageiro e 1234-5678
    Dado que o telefone do passageiro e 999-2223



	
		
	
		
		
