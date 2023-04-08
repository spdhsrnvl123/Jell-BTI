package my.jelly.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import my.jelly.dto.RateDTO;
import my.jelly.entity.Member;
import my.jelly.entity.jInfo;
import my.jelly.entity.jRate;
import my.jelly.repository.MemberRepository;
import my.jelly.repository.RateRepositorySpringDataJpa;
import my.jelly.repository.JellyRepositorySpringDataJpa;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class RateServiceImple implements RateService{

    private final JellyRepositorySpringDataJpa springDataJpaJellyRepository;

    private final MemberRepository memberRepository;

    private final RateRepositorySpringDataJpa rateRepositorySpringDataJpa;

    // 젤리 평가 정보 저장하는 메서드
    @Override
    public jRate createJellyRate(RateDTO rateDTO) {
        jInfo jInfo = springDataJpaJellyRepository.findById(rateDTO.getJIdx()).orElseThrow();
        Member member = memberRepository.findBymEmail(rateDTO.getMEmail());
        rateDTO.setJInfo(jInfo);
        rateDTO.setMember(member);
        jRate jRate = new jRate(rateDTO);
        jRate result = rateRepositorySpringDataJpa.save(jRate);
        return result;
    }

    @Override
    public void readJellyRateById(Long rIdx) {

    }

    @Override
    public void deleteById(Long rIdx) {
        rateRepositorySpringDataJpa.deleteById(rIdx);
    }

    @Override
    public List<jRate> findRatesByEmail(String email, String domain) {

        String mEmail=email + "@" + domain;
        System.out.println("mEmail = " + mEmail);
        return rateRepositorySpringDataJpa.findRatesByEmail(mEmail);
    }

    @Override
    public Optional<jRate> findRateById(Long rIdx) {
        return rateRepositorySpringDataJpa.findById(rIdx);
    }

    @Override
    public jRate updateRate(Long rIdx, RateDTO rateDTO) {
        jRate jRate = rateRepositorySpringDataJpa.findById(rIdx).orElseThrow();
        jRate.setJStar(rateDTO.getJStar());
        jRate.setRContent(rateDTO.getRContent());
        return jRate;
    }

}
