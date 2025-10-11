package my.jelly.service;

import my.jelly.dto.RateDTO;
import my.jelly.entity.JRate;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

public interface RateService {
    public JRate createJellyRate(@RequestBody RateDTO rateDTO);

    public void readJellyRateById(@PathVariable Long rIdx);

    public void deleteById(Long rIdx);

    public List<JRate> findRatesByEmail(String email, String domain);

    public JRate updateRate(Long rIdx, RateDTO rateDTO);

    public Optional<JRate> findRateById(Long rIdx);
}
