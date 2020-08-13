package br.ce.wcaquino.steps;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import br.ce.wcaquino.converters.DateConverter;
import cucumber.api.Transform;
import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;

public class AprenderCucumberSteps {
	@Dado("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {

	}

	@Quando("^executa-lo$")
	public void executaLo() throws Throwable {

	}

	@Entao("^a especificacao deve finalizar com sucesso$")
	public void aEspecificaçãoDeveFinalizarComSucesso() throws Throwable {
	}

	
	private int contador = 0;
			
	@Dado("^que o valor do contador e (\\d+)$")
	public void queOValorDoContadorÉ(int dia) throws Throwable {
		contador = dia;
	}

	@Quando("^eu incrementar em (\\d+)$")
	public void euIncrementarEm(int dia) throws Throwable {
		contador = contador + dia;
	}

	@Entao("^o valor do contador sera (\\d+)$")
	public void oValorDoContadorSerá(int dia) throws Throwable {
		org.junit.Assert.assertEquals(dia, contador);
		
	}
	
	
	 Date entrega = new Date();
	
	@Dado("^que a entrega e dia (.*)$")
	public void queAEntregaÉDia(@Transform(DateConverter.class)Date data) throws Throwable {
			entrega = data;
			System.out.println(entrega);
		

	}

	@Quando("^a entrega atrasa em (\\d+) (.+)$")
	public void aEntregaAtrasaEmDias(int dia, String tempo) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);
		if(tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, dia);
		}
		if(tempo.equals("meses")) {
			cal.add(Calendar.MONTH, dia);
		}
		entrega = cal.getTime();
	}

	@Entao("^a entrega sera efetuada em (.*)$")
	public void aEntregaSeráEfetuadaEma(@Transform(DateConverter.class)Date data) throws Throwable {
		Assert.assertEquals(data, entrega);
		System.out.println("KAKAKAKA");
		  
	}
	

	@Dado("^que o ticket( especial)? e (A.\\d{3})$")
	public void queOTicketEAF(String tipo, String arg1) throws Throwable {
    
}

	@Dado("^que o valor da passagem e R\\$ (.*)$")
	public void queOValorDaPassagemER$(Double valor) throws Throwable { //o double aceita também string e converte pra double
		System.out.println(valor);
	 
	}
	
	@Dado("^que o nome do passageiro e \"(.{5,20})\"$") //(.*) O . significa qualquerr coisa e o * de 0 até qualquer tamanho 
	public void queONomeDoPassageiroE(String arg1) throws Throwable {
	   
	}
	
	@Dado("^que o telefone do passageiro e (9\\d{3}-\\d{4})$")
	public void queOTelefoneDoPassageiroE(String telefone) throws Throwable {
		
	}
	    
	
	@Quando("^criar os steps$")
	public void criarOsSteps() throws Throwable {
	
	}
	   
	
	@Entao("^o teste vai funcionar$")
	public void oTesteVaiFuncionar() throws Throwable {
	    
	}
	


}
