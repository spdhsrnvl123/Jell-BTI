package my.jelly.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.entity.Member;
import my.jelly.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public void userJellyResult(@RequestBody int mJelly) throws ParseException {
        System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        System.out.println("젤리 결과 번호 호출" + mJelly);
        // HttpSession session = request.getSession(false);
        // Member member = (Member) session.getAttribute("userInfo");
        // System.out.println("유저정보 잘 가져오나요?" + member.getMEmail()); //memberService.inputUserJellyResult(mJelly); }
    }
}