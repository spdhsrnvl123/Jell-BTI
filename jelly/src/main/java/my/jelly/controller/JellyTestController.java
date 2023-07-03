package my.jelly.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.entity.Member;
import my.jelly.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Log4j2
public class JellyTestController {
    @Autowired
    MemberService memberService;

    static String mEmail; // 회원 이메일 저장용

    // 젤리테스트결과 받아오는 컨트롤러

    // 1. 회원의 젤리 타입을 먼저 확인 (신규 테스트인지, 기존 테스트인지 확인하기 위함.)
    @GetMapping("/jellBTI")
    public boolean userTestCheck(@RequestParam String mEmail) throws ParseException {
        System.out.printf("호출완료" + mEmail);
        boolean bool = memberService.searchUserJellyType(mEmail);
        System.out.printf("=====================True or False===================== : " + bool);
        return bool;
    }

    @PostMapping("/jResult")
    public void userJellyResult(@RequestParam String mJelly) throws ParseException {
        System.out.printf("@@@@@@@@@@@@@@@@@@@@ 제발 될거야 이번에는 : " + mJelly);
    }

    // int jellBTI = 0;
    // // switch (mJelly){
    // // case "ENTJ" :
    // // case "ESTP" :
    // // case "INTJ" :
    // // jellBTI = 1;
    // // case "ESTJ" :
    // // case "ESFP" :
    // // case "ISFP" :
    // // jellBTI = 2;
    // // case "ESFJ" :
    // // case "ENFP" :
    // // case "INTP" :
    // // jellBTI = 3;
    // // case "ENTP" :
    // // case "ENFJ" :
    // // case "INFP" :
    // // jellBTI = 4;
    // // case "ISTP" :
    // // case "INFJ" :
    // // case "ISFJ" :
    // // case "ISTJ" :
    // // jellBTI = 5;
    // // }
    // if(mJelly!=null)
    // {
    // System.out.println("jResult호출 성공 : " + mJelly);
    // }else
    // {
    // System.out.println("호출 실패 null 값");
    // }
}
