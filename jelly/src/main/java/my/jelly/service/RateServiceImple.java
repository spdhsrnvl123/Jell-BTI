package my.jelly.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import my.jelly.dto.RateDTO;
import my.jelly.entity.Member;
import my.jelly.entity.jInfo;
import my.jelly.entity.jRate;
import my.jelly.repository.MemberRepository;
import my.jelly.repository.RateRepository;
import my.jelly.repository.SpringDataJpaJellyRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class RateServiceImple implements RateService{

    private final SpringDataJpaJellyRepository springDataJpaJellyRepository;

    private final MemberRepository memberRepository;

    private final RateRepository rateRepository;

    // 젤리 평가 정보 저장하는 메서드
    @Override
    public jRate createJellyRate(RateDTO rateDTO) {
        jInfo jInfo = springDataJpaJellyRepository.findById(rateDTO.getJIdx()).orElseThrow();
        Member member = memberRepository.findById(rateDTO.getMEmail()).orElseThrow();
        rateDTO.setJInfo(jInfo);
        rateDTO.setMember(member);
        jRate jRate = new jRate(rateDTO);
        jRate result = rateRepository.save(jRate);
        return result;
    }

    @Override
    public void readJellyRateById(Long rIdx) {

    }

    @Override
    public void deleteById(Long rIdx) {
        rateRepository.deleteById(rIdx);
    }

    @Override
    public List<jRate> findRatesByEmail(String mEmail) {
        mEmail+="@kakao.com";
        System.out.println("mEmail = " + mEmail);
        return rateRepository.findRatesByEmail(mEmail);
    }
}
