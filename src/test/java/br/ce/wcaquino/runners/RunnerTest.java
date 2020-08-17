package br.ce.wcaquino.runners;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/inserir_conta.feature",
		glue = "br.ce.wcaquino.steps",
		tags = {"~@ignore"},
		plugin = {"pretty","html:target/report-html", "json:target/report.jason"}, 
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		dryRun = false )

public class RunnerTest {
	private static WebDriver driver;
	
	@BeforeClass 

	public static void reset() {
		
	
		System.setProperty("webdriver.chrome.driver", "C:\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://srbarriga.herokuapp.com/");
		driver.findElement(By.id("email")).sendKeys("karolteste@gmail.com");
		driver.findElement(By.id("senha")).sendKeys("123456");
		driver.findElement(By.tagName("button")).click();
	    driver.findElement(By.linkText("reset")).click();
		driver.quit();


	}
	
}

// ~@ignore significa que ele vai executar todos os dados menos o que tiver com @ignore
// @esse executa somente o cenário marcado com essa anotação
// tags = {@tipo1, @tipo2} executa os cenários do tipo1, do tipo2 e do tipo1 tipo2
//no plugin, estou pedindo um relatório detalhado(pretty), em formato html e em fomato json
// o dryRun = false excuta o cenário todo, acessa a aplicacacao, faz tudo normal
// o dryRun = true executa "internamente" os testes, sem abrir o navegador e mostra o que está de errado sem de fato abrir a aplicação

