package br.ce.wcaquino.steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class InserirContasSteps {

	private WebDriver driver; //variável "global" dentro da classe 
	

	@Dado("^que estou acessando a aplicacao$")
	public void queEstouAcessandoAAplicacao() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com/");
		
	}
	
	@Quando("^informo o usuario \"([^\"]*)\"$")
	public void informoOUsuario(String usuario) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(usuario);
	  	}
	
	@Quando("^a senha \"([^\"]*)\"$")
	public void aSenha(String senha) throws Throwable {
		driver.findElement(By.id("senha")).sendKeys(senha);
			
		
	}
	
	@Quando("^seleciono entrar$")
	public void selecionoEntrar() throws Throwable {
	  driver.findElement(By.tagName("button")).click();
	  
	}
	
	@Entao("^visualizo a pagina inicial$")
	public void visualizoAPaginaInicial() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class=\'alert alert-success\']")).getText(); 
		Assert.assertEquals("Bem vindo, karol!", texto);
	}
	
	@Quando("^seleciono Contas$")
	public void selecionoContas() throws Throwable {
	    driver.findElement(By.linkText("Contas")).click();
	}
	
	@Quando("^seleciono Adicionar$")
	public void selecionoAdicionar() throws Throwable {
	    driver.findElement(By.linkText("Adicionar")).click();

	}
	
	@Quando("^informo a conta \"([^\"]*)\"$")
	public void informoAConta(String nomeConta) throws Throwable {
	   driver.findElement(By.id("nome")).sendKeys(nomeConta);
	}
	
	@Quando("^seleciono Salvar$")
	public void selecionoSalvar() throws Throwable {
		driver.findElement(By.tagName("button")).click();

	}
	
	@Entao("^a conta e inserida com sucesso$")
	public void aContaEInseridaComSucesso() throws Throwable {
	   String texto = driver.findElement(By.xpath("//div[contains(@class,'alert alert-success')]")).getText();
	   Assert.assertEquals("Conta adicionada com sucesso!", texto);
	}
	
	@Entao("^sou notificado que o nome da conta e obrigatorio$")
	public void souNotificadoQueONomeDaContaEObrigatorio() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Informe o nome da conta", texto);

	}
	@Entao("^sou notificado que ja existe uma conta com esse nome$")
	public void souNotificadoQueJaExisteUmaContaComEsseNome() throws Throwable {
	  String texto = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
	  Assert.assertEquals("Já existe uma conta com esse nome!", texto);

	}
	
	@After
	public void fecharBrowser() {
		driver.quit();
	}
	
	}
