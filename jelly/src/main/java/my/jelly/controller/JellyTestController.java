package my.jelly.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;
import my.jelly.entity.Member;
import my.jelly.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Log4j2
public class JellyTestController {
    @Autowired
    MemberService memberService;

    //젤리테스트결과 받아오는 컨트롤러

    //1. 회원의 젤리 타입을 먼저 확인 (신규 테스트인지, 기존 테스트인지 확인하기 위함.)
    @GetMapping("/jellBTI")
    public boolean userTestCheck(@RequestParam String mEmail) throws ParseException{
        System.out.printf("호출완료" + mEmail);
        boolean bool = memberService.searchUserJellyType(mEmail);
        System.out.printf("=====================True or False===================== : " + bool);
        return bool;
    }
}