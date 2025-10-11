package my.jelly.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import my.jelly.dto.JellyDTO;
import my.jelly.dto.RateDTO;
import my.jelly.entity.JInfo;
import my.jelly.entity.JRate;
import my.jelly.service.JelliyService;
import my.jelly.service.RateService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
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
    public List<JInfo> readJellyInformation(@RequestParam(defaultValue = "") String jellyName) {
        List<JInfo> jellies = jelliyService.findAll(jellyName);
        return jellies;
    }


    //젤리 영양 정보 수정하기
    @PatchMapping("/jellies/{jIdx}")
    @ResponseBody
    public String updateJellyInformation(@PathVariable Long jIdx, @RequestBody JellyDTO jellyDTO) {
        log.info("jellyDTO ={}" + jellyDTO);
        jelliyService.updateJellyInformation(jIdx, jellyDTO);
        return "200 update OK";
    }

    //젤리 영양 정보 하나만 가져오기
    @GetMapping("/jellies/{jIdx}")
    @ResponseBody
    public Map<String, Object> readJellyInformationById(@PathVariable Long jIdx) {
        Map<String, Object> result = jelliyService.findById(jIdx);
        return result;
    }

    // 후기 생성 기능
    @PostMapping("/jellies/rates")
    @ResponseBody
    public JRate createJellyRate(@RequestBody RateDTO rateDTO) {
        log.info("rateDTO ={}" + rateDTO);
        JRate result = rateService.createJellyRate(rateDTO);
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
    public List<JRate> findRatesByEmail(@PathVariable String email, @PathVariable String domain) {
        log.info("mEmail ={}" + email);
        log.info("domain ={}" + domain);
        List<JRate> rates = rateService.findRatesByEmail(email, domain);
        return rates;
    }

    // 후기id로 후기 정보 가져오는 기능
    @GetMapping("/jellies/rates/index/{rIdx}")
    @ResponseBody
    public JRate findRateById(@PathVariable Long rIdx) {
        Optional<JRate> jRate = rateService.findRateById(rIdx);
        if (jRate.isPresent()){
            return jRate.get();
        }else {
            return null;
        }
    }

    // 후기 수정 기능
    @PatchMapping("/jellies/rates/{rIdx}")
    @ResponseBody
    public JRate updateRate(@PathVariable Long rIdx, @RequestBody RateDTO rateDTO) {
        log.info("rIdx ={}" + rIdx);
        log.info("rateDTO ={}" + rateDTO);
        JRate result = rateService.updateRate(rIdx, rateDTO);
        return result;
    }

}
