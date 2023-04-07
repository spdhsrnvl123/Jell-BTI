package my.jelly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@Controller
public class MainController {
    @GetMapping("/hello")
    public String test(){
        return "Hello, World!";
    }
/*
    @RequestMapping("/logout")
    public String logout(HttpSession session){
        session.removeAttribute("access_Token");
        session.removeAttribute("nickname");
        return "index";
    }*/
}
