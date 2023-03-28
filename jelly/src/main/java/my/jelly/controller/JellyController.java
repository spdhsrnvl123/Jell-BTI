package my.jelly.controller;

import lombok.RequiredArgsConstructor;
import my.jelly.service.JelliyService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

@Controller
@RequiredArgsConstructor
public class JellyController {

    private final JelliyService jelliyService;

    @PostMapping("/jellies")
    @ResponseBody
    public String createJellyInformation() throws IOException {
        jelliyService.createJellyInformation();
        return "200 OK";
    }

    @DeleteMapping("/jellies")
    @ResponseBody
    public String deleteAllJellyInformation(){
        jelliyService.deleteAllJellyInformation();
        return "200 OK";
    }
}
