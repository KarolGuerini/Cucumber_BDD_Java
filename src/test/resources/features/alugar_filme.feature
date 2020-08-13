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
	E a data de entrega sera em 1 dia
	E o estoque do filme sera 1 unidade
	
Cenario: Nao deve alugar um filme sem estoque
	Dado um filme com estoque de 0 unidades
	Quando alugar
	Entao nao sera possivel por falta de estoque
	E o estoque do filme sera 0 unidade 

Cenario: Deve dar condicoes especiais para categoria extendida
	Dado um filme com estoque de 2 unidades
	E que o preco do aluguel seja de R$ 4
	E que o tipo do aluguel seja extendido 
	Quando alugar
	Entao o preco do aluguel sera de R$ 8
	E a data de entrega sera em 3 dias
	E a pontuacao recebida sera de 2 pontos 
	
Cenario: Deve alugar para categoria comum
	Dado um filme com estoque de 2 unidades
	E que o preco do aluguel seja de R$ 4
	E que o tipo do aluguel seja comum
	Quando alugar
	Entao o preco do aluguel sera de R$ 4
	E a data de entrega sera em 1 dia
	E a pontuacao recebida sera de 1 ponto 
		
	


