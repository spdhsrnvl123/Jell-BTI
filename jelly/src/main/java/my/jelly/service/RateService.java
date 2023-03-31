package my.jelly.service;

import my.jelly.dto.RateDTO;
import my.jelly.entity.jRate;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface RateService {
    public jRate createJellyRate(@RequestBody RateDTO rateDTO);

    public void readJellyRateById(@PathVariable Long rIdx);

    public void deleteById(Long rIdx);

    public List<jRate> findRatesByEmail(String mEmail);
}
