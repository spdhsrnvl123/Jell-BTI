package my.jelly.service;

import my.jelly.entity.Member;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MemberServiceTest {

    @Autowired
    private MemberService memberService;

    @Test
    void 특정회원조회(){ //회원 테이블에 특정 이메일이 있으면 유저 닉네임을 가져오고, 없으면 오류
        String user = "pizzay@kakao.com";
        assertThat(memberService.findUser(user).getMEmail()).isEqualTo(user); //검증
        System.out.println(memberService.findUser(user).getMNick());
    }

    @Test
    void 회원젤리테스트여부조회(){
        String user = "pizzay@kakao.com";
        boolean bool = memberService.searchUserJellyType(user);
        System.out.println("user" + user);
        if(bool = true){
            System.out.println("테스트를 진행한 적이 없는 회원입니다. ");
        }else{
            System.out.println("테스트를 이미 진행한 회원입니다. ");
        }
    }
}