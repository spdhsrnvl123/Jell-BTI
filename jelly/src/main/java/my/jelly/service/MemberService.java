package my.jelly.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.entity.Member;
import my.jelly.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Log4j2
public class MemberService {
    @Autowired
    private final MemberRepository memberRepository;

    public Member findUser(String mEmail) { // email로 유저 객체 찾아오기
        return memberRepository.findBymEmail(mEmail);
    }

    public boolean searchUserJellyType(String mEmail) {
        Member member = memberRepository.findBymEmail(mEmail); // 유저 정보 찾아오기
        int jelly = member.getMJelly();
        if (jelly != 0) { // 젤리 타입이 0이 아닐 경우, (기존에 테스트 한 적이 있는 회원)
            return false;
        }
        // 젤리 타입이 0이면, 처음 테스트를 진행하는 회원이다.
        return true;
    }

    public void inputUserJellyResult(int mJelly, String mEmail) {
        Member member = memberRepository.findBymEmail(mEmail);
        member.setMJelly(mJelly);
        memberRepository.save(member);
    }
}
