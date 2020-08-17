## language: pt

@unitários
Funcionalidade: Alugar Filme
	Como usuario
	Quero cadastrar alugueis de filmes 
	Para controlar precos e datas de entrega
	
Cenario: Deve alugar um filme com sucesso
	Dado um filme
		| estoque | 2     |
		| preco   | 3     | 
		| tipo    | comum | 
		
		
	Quando alugar
	Entao o preco do aluguel sera de R$ 3
	E a data de entrega sera em 1 dia
	E o estoque do filme sera 1 unidade
	
Cenario: Nao deve alugar um filme sem estoque
	Dado um filme com estoque de 0 unidades
	Quando alugar
	Entao nao sera possivel por falta de estoque
	E o estoque do filme sera 0 unidade 
	
	Esquema do Cenario: Deve dar condicoes conforme tipo de aluguel 
	Dado um filme com estoque de 2 unidades
	E que o preco do aluguel seja de R$ <preco>
	E que o tipo do aluguel seja <tipo>
	Quando alugar
	Entao o preco do aluguel sera de R$ <valor>
	E a data de entrega sera em <dataEntrega> dias
	E a pontuacao sera de <pontuacao> pontos 
	
	Exemplos:
	| preco | tipo 			| valor   | dataEntrega | pontuacao | 
	|	4			| extendido | 8				| 3						| 2					|
	| 4			| comum			|	4				|	1						|	1					|
	| 5  		| extendido	|	10			|	3						|	2   			|
	| 5  		| semanal 	|	15			|	7						|	3   			|
	

		
	


