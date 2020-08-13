## language: pt

Funcionalidade: Alugar Filme
	Como usuario
	Quero cadastrar alugueis de filmes 
	Para controlar preços e datas de entrega
	
Cenario: Deve alugar um filme com sucesso
	Dado um filme com estoque de 2 unidades
	E que o preco do aluguel seja de R$ 3
	Quando alugar
	Entao o preco do aluguel sera de R$ 3
	E a data de entrega sera no dia seguinte
	E o estoque do filme sera 1 unidade
	
	
	


