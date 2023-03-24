package my.jelly.controller;

import lombok.RequiredArgsConstructor;
import my.jelly.service.KakaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Map;
@RequiredArgsConstructor
@Controller
@RequestMapping("/login")
public class KakaoController {

    @Autowired
    KakaoService kakaoService;

    @GetMapping("")
    public String loginPage()
    {
        return "login";
    }

    @GetMapping("/kakao")
    public String getCI(@RequestParam String code, Model model, HttpSession session) throws IOException {
        System.out.println("code = " + code);
        String access_token = kakaoService.getToken(code);
        Map<String, Object> userInfo = kakaoService.getUserInfo(access_token);
        model.addAttribute("code", code);
        model.addAttribute("access_token", access_token);
        model.addAttribute("userInfo", userInfo);

        //값 꺼내오기
        if(model.getAttribute("userInfo") != null){
            session.setAttribute("nickname", userInfo.get("nickname"));
            session.setAttribute("email", userInfo.get("email"));
            session.setAttribute("age_range", userInfo.get("age_range"));
        }

        //ci는 비즈니스 전환후 검수신청 -> 허락받아야 수집 가능
        return "index";
    }


}
