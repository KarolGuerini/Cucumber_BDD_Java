package br.ce.wcaquino.steps;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import org.junit.Assert;

import br.ce.wcaquino.entidades.Filme;
import br.ce.wcaquino.entidades.NotaAluguel;
import br.ce.wcaquino.entidades.TipoAluguel;
import br.ce.wcaquino.servicos.AluguelService;
import br.ce.wcaquino.utils.DateUtils;
import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class alugarFilmeSteps {

	
	private Filme filme;  //isso é uma classe
	private AluguelService aluguel = new AluguelService();
	private NotaAluguel nota;
	private String erro;
	private TipoAluguel tipoAluguel;
	
	
	@Dado("^um filme com estoque de (\\d+) unidades$")
	public void um_filme_com_estoque_de_unidades(int arg1) throws Throwable {
	filme = new Filme();
	filme.setEstoque(arg1);
	}

	@Dado("^que o preco do aluguel seja de R\\$ (\\d+)$")
	public void que_o_preco_do_aluguel_seja_de_R$(int arg1) throws Throwable {
	  filme.setAluguel(arg1);
	}
	
	@Dado("^um filme$")
	public void umFilme(DataTable table) throws Throwable {
	   Map<String, String> map = table.asMap(String.class, String.class);
	   filme = new Filme();
	   filme.setEstoque(Integer.parseInt(map.get("estoque")));  // parseInt aceita inteiro e string
	   filme.setAluguel(Integer.parseInt(map.get("preco")));
	   String tipo = map.get("tipo");
	   tipoAluguel = tipo.equals("semanal")? TipoAluguel.SEMANAL: tipo.equals("extendido")?TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;

		
	}

	@Quando("^alugar$")
	public void alugar() throws Throwable {
		try {
			 nota =  aluguel.alugar(filme, tipoAluguel);
			
		} catch (RuntimeException e) {
			erro = e.getMessage();
		}
	   
	}

	@Entao("^o preco do aluguel sera de R\\$ (\\d+)$")
	public void o_preco_do_aluguel_sera_de_R$(int arg1) throws Throwable {
		Assert.assertEquals(arg1, nota.getPreco());
	    
	}


	@Entao("^o estoque do filme sera (\\d+) unidade$")
	public void o_estoque_do_filme_sera_unidade(int arg1) throws Throwable {
	    Assert.assertEquals(arg1, filme.getEstoque());
	}
	

	@Entao("^nao sera possivel por falta de estoque$")
	public void nao_sera_possivel_por_falta_de_estoque() throws Throwable {
	    Assert.assertEquals("Filme sem estoque", erro );
	}
	
	@Dado("^que o tipo do aluguel seja (.*)$")
	public void queOTipoDoAluguelSejaExtendido(String tipo) throws Throwable {
		tipoAluguel = tipo.equals("semanal")? TipoAluguel.SEMANAL: tipo.equals("extendido")?TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;
	}

	@Entao("^a data de entrega sera em (\\d+) dias?$") //estou dizendo aqui que o s é opcional utilizando o ?
	public void aDataDeEntregaSeraEmDias(int arg1) throws Throwable {
		Date dataEsperada = DateUtils.obterDataDiferecaDias(arg1);
		Date dataReal = nota.getDataEntrega();
		
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		Assert.assertEquals(format.format(dataEsperada),format.format(dataReal));
	   
	}

	@Entao("^a pontuacao sera de (\\d+) pontos?$")
	public void aPontuacaoRecebidaSeraDePontos(int arg1) throws Throwable {
		Assert.assertEquals(arg1, nota.getPontuacao());
	
	}

}

