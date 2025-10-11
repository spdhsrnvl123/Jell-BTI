package my.jelly.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Log4j2
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
