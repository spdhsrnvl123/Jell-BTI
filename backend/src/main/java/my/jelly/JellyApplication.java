package my.jelly;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;

@SpringBootApplication(scanBasePackages = "my.jelly", exclude = {
		org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration.class,
		org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration.class,
		org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration.class
})
@ComponentScan(basePackages = "my.jelly", excludeFilters = {
		@ComponentScan.Filter(type = FilterType.REGEX, pattern = "my.jelly.controller.*"),
		@ComponentScan.Filter(type = FilterType.REGEX, pattern = "my.jelly.service.*"),
		@ComponentScan.Filter(type = FilterType.REGEX, pattern = "my.jelly.repository.*")
})
public class JellyApplication {

	public static void main(String[] args) {
		SpringApplication.run(JellyApplication.class, args);
	}

}