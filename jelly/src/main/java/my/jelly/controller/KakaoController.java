package my.jelly.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
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

    // [카카오 로그인]
//    @GetMapping("/kakao")
//    public String getCI(@RequestParam String code, Model model, HttpSession session) throws IOException {
//        System.out.println("code = " + code);
//        String access_token = kakaoService.getToken(code);
//        Map<String, Object> userInfo = kakaoService.getUserInfo(access_token);
//        model.addAttribute("code", code);
//        model.addAttribute("access_token", access_token);
//        model.addAttribute("userInfo", userInfo);
//
//        //값 꺼내오기
//        if(model.getAttribute("userInfo") != null){
//            session.setAttribute("nickname", userInfo.get("nickname"));
//            session.setAttribute("email", userInfo.get("email"));
//            session.setAttribute("age_range", userInfo.get("age_range"));
//        }
//
//        //ci는 비즈니스 전환후 검수신청 -> 허락받아야 수집 가능
//        return "index";
//    }

    /* (카카오 로그인) */
    // 프론트에서 인가코드를 받아옴, 받은 인가코드로 카카오서버에서 액세스 토큰 받아와서 반환
    @RequestMapping("/login/kakao")
    public String login(@RequestParam(value = "code", required = false) String code) throws Exception {
//    System.out.println("#######" + code);
        String access_token = kakaoService.getToken(code);
//    System.out.println("###access_token###" + access_token);
        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        return access_token;
    }

}
