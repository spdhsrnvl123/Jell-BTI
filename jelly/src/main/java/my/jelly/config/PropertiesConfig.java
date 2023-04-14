package my.jelly.config;

import org.springframework.beans.factory.config.PropertiesFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

// jelly-application을 빈으로 등록하여 설정 값을 사용하기 위한 클래스
@Configuration
public class PropertiesConfig {
    @Bean(name = "jellyProperty")
    public PropertiesFactoryBean propertiesFactoryBean() throws Exception {
        PropertiesFactoryBean propertiesFactoryBean = new PropertiesFactoryBean();
        ClassPathResource classPathResource = new ClassPathResource("application-jelly.properties");

        propertiesFactoryBean.setLocation(classPathResource);

        return propertiesFactoryBean;
    }
}
