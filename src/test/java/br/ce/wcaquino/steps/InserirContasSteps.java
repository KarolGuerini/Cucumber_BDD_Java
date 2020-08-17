package br.ce.wcaquino.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class InserirContasSteps {

	private WebDriver driver; //variável "global" dentro da classe 
	
	@Dado("^que desejo adicionar uma conta$")
	public void queDesejoAdicionarUmaConta() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com/");
		driver.findElement(By.id("email")).sendKeys("karolteste@gmail.com");
		driver.findElement(By.id("senha")).sendKeys("123456");
		driver.findElement(By.tagName("button")).click();
	    driver.findElement(By.linkText("Contas")).click();
	    driver.findElement(By.linkText("Adicionar")).click();

	
	}

	@Quando("^adiciono a conta \"([^\"]*)\"$")
	public void adicionoAConta(String arg1) throws Throwable {
		   driver.findElement(By.id("nome")).sendKeys(arg1);
			driver.findElement(By.tagName("button")).click();

	   
	}


	@Entao("^recebo a mensagem \"([^\"]*)?\"$")
	public void recebo_a_mensagem(String arg1) throws Throwable {
		String texto = driver.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText();
		Assert.assertEquals(arg1, texto);
	  
	}
	
	@Entao("^sou notificado que ja existe uma conta com esse nome$")
	public void souNotificadoQueJaExisteUmaContaComEsseNome() throws Throwable {
	  String texto = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
	  Assert.assertEquals("Já existe uma conta com esse nome!", texto);

	}
	
	@After(order = 1)
	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshots/"+cenario.getId()+".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	@After(order = 0)
	public void fecharBrowser() {
		driver.quit();
	}
	
	}

//@Entao("^recebo a mensagem \"([^\"]*)\"a?\"([^\"]*)\"$")
//public void receboAMensagemA(String arg1, String arg2) throws Throwable {
