package br.ce.wcaquino.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/alugar_filme.feature",
		glue = "br.ce.wcaquino.steps",
		plugin = "pretty",
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		dryRun = false )
public class Runner {
}

// ~@ignore significa que ele vai executar todos os dados menos o que tiver com @ignore
// @esse executa somente o cenário marcado com essa anotação
// tags = {@tipo1, @tipo2} executa os cenários do tipo1, do tipo2 e do tipo1 tipo2

