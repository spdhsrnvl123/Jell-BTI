package my.jelly.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import lombok.RequiredArgsConstructor;
import my.jelly.entity.Member;
import my.jelly.service.KakaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
@RequiredArgsConstructor
@Controller
@RequestMapping("/login")
public class KakaoController {

    @Autowired
    KakaoService kakaoService;

    /* (카카오 로그인) */
    // 프론트에서 인가코드를 받아옴, 받은 인가코드로 카카오서버에서 액세스 토큰 받아와서 반환
    @RequestMapping("/login/kakao")
    public String login(@RequestParam(value = "code", required = false) String code) throws Exception {

        String access_token = kakaoService.getToken(code);

        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        return access_token;
    }

    // 받은 액세스 토큰으로 유저 정보 확인, 로그인/회원가입 처리
    @RequestMapping("/oauth/userInfo")
    public String userInfo(@RequestParam(value = "token") String token) throws Exception {
        Member userInfo = kakaoService.getUserInfo(token);
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        Map<String, Object> map = new HashMap<String, Object>();

        map.put("userInfo", userInfo);
        return gson.toJson(map);
    }
}
