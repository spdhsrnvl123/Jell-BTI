package my.jelly.controller;

import lombok.RequiredArgsConstructor;
import my.jelly.dto.JellyDTO;
import my.jelly.dto.RateDTO;
import my.jelly.entity.jInfo;
import my.jelly.entity.jRate;
import my.jelly.service.JelliyService;
import my.jelly.service.RateService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class JellyController {

    private final JelliyService jelliyService;

    private final RateService rateService;

    // 젤리 영양 정보 생성하기
    @PostMapping("/jellies")
    @ResponseBody
    public String createJellyInformation() throws IOException {
        jelliyService.createJellyInformation();
        return "200 OK";
    }

    // 젤리 영양 정보 전체 삭제
    @DeleteMapping("/jellies")
    @ResponseBody
    public String deleteAllJellyInformation() {
        jelliyService.deleteAllJellyInformation();
        return "200 OK";
    }

    // 젤리 영양정보 전체 조회
    @GetMapping("/jellies/{jellyName}")
    @ResponseBody
    public List<jInfo> readJellyInformation(@PathVariable String jellyName) {
        List<jInfo> jellies = jelliyService.findAll(jellyName);
        return jellies;
    }


    //젤리 영양 정보 수정하기
    @PatchMapping("/jellies/{jIdx}")
    @ResponseBody
    public String updateJellyInformation(@PathVariable Long jIdx, @RequestBody JellyDTO jellyDTO) {
        System.out.println("jellyDTO = " + jellyDTO);
        jelliyService.updateJellyInformation(jIdx, jellyDTO);
        return "200 update OK";
    }

    //젤리 영양 정보 하나만 가져오기
    @GetMapping("/jellies/{jIdx}")
    @ResponseBody
    public JellyDTO readJellyInformationById(@PathVariable Long jIdx) {
        JellyDTO result = jelliyService.findById(jIdx);
        return result;
    }

    // 후기 생성 기능
    @PostMapping("/jellies/rates")
    @ResponseBody
    public jRate createJellyRate(@RequestBody RateDTO rateDTO) {
        System.out.println("rateDTO = " + rateDTO);
        jRate result = rateService.createJellyRate(rateDTO);
        return result;
    }

    // 후기 하나만 삭제하는 기능
    @DeleteMapping("/jellies/rates/{rIdx}")
    @ResponseBody
    public String deleteRateById(@PathVariable Long rIdx) {
        rateService.deleteById(rIdx);
        return "delete " + rIdx + "ok";
    }

    // 사용자 이메일로 후기 정보 가져오는 기능
    @GetMapping("/jellies/rates/email/{email}-{domain}")
    @ResponseBody
    public List<jRate> findRatesByEmail(@PathVariable String email, @PathVariable String domain) {
        System.out.println("mEmail = " + email);
        System.out.println("domain = " + domain);
        List<jRate> rates = rateService.findRatesByEmail(email, domain);
        return rates;
    }

    // 후기id로 후기 정보 가져오는 기능
    @GetMapping("/jellies/rates/index/{rIdx}")
    @ResponseBody
    public jRate findRateById(@PathVariable Long rIdx) {
        Optional<jRate> jRate = rateService.findRateById(rIdx);
        if (jRate.isPresent()){
            return jRate.get();
        }else {
            return null;
        }
    }

    // 후기 수정 기능
    @PatchMapping("/jellies/rates/{rIdx}")
    @ResponseBody
    public jRate updateRate(@PathVariable Long rIdx, @RequestBody RateDTO rateDTO) {
        System.out.println("rIdx = " + rIdx);
        System.out.println("rateDTO = " + rateDTO);
        jRate result = rateService.updateRate(rIdx, rateDTO);
        return result;
    }

}
