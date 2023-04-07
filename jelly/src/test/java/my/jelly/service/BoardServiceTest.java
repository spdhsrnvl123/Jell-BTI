package my.jelly.service;

import my.jelly.entity.Member;
import my.jelly.entity.jBoard;
import my.jelly.repository.BoardRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.IntStream;

@SpringBootTest
class BoardServiceTest {
    @Autowired
    MemberService memberService;
    @Autowired
    BoardRepository boardRepository;

    @Test
    @Transactional
    @Commit
    void 테스트게시글등록(){
        IntStream.rangeClosed(1, 10).forEach(i -> {
            jBoard board = new jBoard();
            Member member = memberService.findUser(("pizzay@kakao.com"));
            board.setBTitle("글 제목" + i);
            board.setBContent("글 내용" + i);
            board.setMemberVO(member);
            boardRepository.save(board);
        });
        System.out.println("글 등록 완료!");
    }

    @Test
    @Transactional
    void 특정회원작성글조회(){
        String user = "pizzay@kakao.com";
        Member member = memberService.findUser(user);
        System.out.println(member);
        List<jBoard> list = boardRepository.findBymEmail(member.getMEmail());
//리스트에 특정회원이 작성한 글 모두 담아서 가져오기
        System.out.println(list);
    }

    @Test
    void 특정글댓글수(){

    }
}