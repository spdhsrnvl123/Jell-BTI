package my.jelly.controller;

import lombok.RequiredArgsConstructor;
import my.jelly.dto.JellyDTO;
import my.jelly.dto.RateDTO;
import my.jelly.dto.RateSearchDTO;
import my.jelly.entity.jInfo;
import my.jelly.entity.jRate;
import my.jelly.service.JelliyService;
import my.jelly.service.RateService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
    @GetMapping("/jellies")
    @ResponseBody
    public List<jInfo> readJellyInformation() {
        List<jInfo> jellies = jelliyService.findAll();
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

    @PostMapping("/jellies/rates")
    @ResponseBody
    public jRate createJellyRate(@RequestBody RateDTO rateDTO) {
        jRate result = rateService.createJellyRate(rateDTO);
        return result;
    }

    @DeleteMapping("/jellies/rates/{rIdx}")
    @ResponseBody
    public String deleteRateById(@PathVariable Long rIdx) {
        rateService.deleteById(rIdx);
        return "delete " + rIdx + "ok";
    }

    @GetMapping("/jellies/rates/{mEmail}")
    @ResponseBody
    public List<jRate> findRatesByEmail(@PathVariable String mEmail) {
        System.out.println("mEmail = " + mEmail);
        List<jRate> rates = rateService.findRatesByEmail(mEmail);
        return rates;
    }
}
