package my.jelly.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import lombok.RequiredArgsConstructor;
import my.jelly.entity.Member;
import my.jelly.service.NaverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
public class NaverController {

    private NaverService naverService;

    public NaverController(NaverService naverService) {
        this.naverService = naverService;
    }

    // naver로그인 api 클라이언트 id
    @Value("#{jellyProperty['naver.client-id']}")
    private String clientId;



    // 기능 구현 때문에 임시로 만들어놓은 탬플릿
    @GetMapping("/naverTest")
    public String naverLogin(Model model){
        System.out.println("clientId = " + clientId);
        model.addAttribute("clientId", clientId);
        return "naverTest";
    }

    @RequestMapping("/oauth2/authorization/naver")
    public String login(@RequestParam(value = "code")String code, HttpSession session)throws Exception {
        System.out.println("code = " + code);
        String accecc_token = naverService.getToken(code,session);
        return "redirect:/oauth/login/naver/userInfo?token="+accecc_token;
    }

    @RequestMapping("/oauth/login/naver/userInfo")
    @ResponseBody
    public String userInfo(@RequestParam(value = "token",required = false) String token) throws Exception {
        Member userInfo = naverService.getUserInfo(token);
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        Map<String, Object> map = new HashMap<String, Object>();

        map.put("userInfo", userInfo);

        return gson.toJson(map);
    }
    
}