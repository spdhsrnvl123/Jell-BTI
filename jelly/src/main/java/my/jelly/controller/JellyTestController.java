package my.jelly.controller;

import jdk.jfr.Frequency;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.entity.Member;
import my.jelly.repository.MemberRepository;
import my.jelly.service.JellyTestService;
import my.jelly.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Log4j2
public class JellyTestController {
    @Autowired
    MemberService memberService;

    @Autowired
    JellyTestService jellyTestService;

    @Autowired
    MemberRepository memberRepository;

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
    public Map<String, String> userJellyResult(@RequestParam String mJelly, HttpServletRequest request)
            throws ParseException {
        System.out.println("프론트에서 젤리 결과 가져오기 : " + mJelly);
        HttpSession session = request.getSession(false);
        Member member = (Member) session.getAttribute("userInfo");

        System.out.println("유저 정보 꺼내오기 성공 " + member);

        Map<String, String> result = jellyTestService.callBackJellyResult(mJelly, member);
        return result;
    }

}
