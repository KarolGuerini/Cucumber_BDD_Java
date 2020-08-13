package br.ce.wcaquino.servicos;

import br.ce.wcaquino.entidades.Filme;
import br.ce.wcaquino.entidades.NotaAluguel;
import br.ce.wcaquino.utils.DateUtils;

public class AluguelService {

	public NotaAluguel alugar(Filme filme, String tipo) {
		if(filme.getEstoque() == 0)
			throw new RuntimeException("Filme sem estoque");
		
		NotaAluguel nota = new NotaAluguel();
		if("extendido".equals(tipo)) {
			nota.setPreco(filme.getAluguel() * 2 );
			nota.setDataEntrega(DateUtils.obterDataDiferecaDias(3));
			nota.setPontuacao(2);

		}else {
			nota.setPreco(filme.getAluguel());
			nota.setDataEntrega(DateUtils.obterDataDiferecaDias(1));
			nota.setPontuacao(1);

		}
		
		filme.setEstoque(filme.getEstoque() -1);
		return nota;
	}

}

