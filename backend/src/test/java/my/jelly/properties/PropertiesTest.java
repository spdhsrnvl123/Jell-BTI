package my.jelly.properties;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

@Slf4j
@SpringBootTest
public class PropertiesTest {

    @Value("#{jellyProperty['naver.client-id']}")
    private String naverClientId;

    @Value("#{jellyProperty['kakao.client-id']}")
    private String kakaoClientId;

    @Test
    void propertiesTest() {
        log.info("naverClientId ={}", naverClientId);
        log.info("kakaoClientId ={}", kakaoClientId);
    }
}
