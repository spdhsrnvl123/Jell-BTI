package my.jelly.service;

import my.jelly.entity.Member;
import my.jelly.entity.JBoard;
import my.jelly.entity.JComment;
import my.jelly.repository.BoardRepository;
import my.jelly.repository.CommentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;

import java.util.stream.IntStream;

@SpringBootTest
class CommentServiceTest {

    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private BoardRepository boardRepository;
    @Autowired
    private MemberService memberService;

//    @Test
//    @Transactional
//    @Commit
//    void 테스트댓글등록(){
//        IntStream.rangeClosed(3933,3942).forEach(i->{
//            JComment comment = new JComment();
//        IntStream.rangeClosed(3933,3934).forEach(i->{
//            jComment comment = new jComment();
//            long bIdx = i;
//            JBoard board = boardRepository.findBybIdx(bIdx);
//
//            Member member = memberService.findUser(("gohn13@naver.com"));
//
//            comment.setBoardVO(board);
//            comment.setCContent("테스트 댓글 " + i);
//            comment.setMemberVO(member);
//            System.out.println(board);
//            System.out.println(member);
//            commentRepository.save(comment);
//
//        });
//        System.out.println("댓글 등록 완료");
//    }
    @Test
    @Transactional
    void 댓글모두삭제() {
        commentRepository.deleteAll();
    }

    @Test
    @Transactional
    @Commit
    void 테스트댓글등록() {
        IntStream.rangeClosed(4430, 4435).forEach(i -> {
                JComment comment = new JComment();
                long bIdx = i;
                JBoard board = boardRepository.findBybIdx(bIdx);

                Member member = memberService.findUser(("magicofclown@naver.com"));

                comment.setBoardVO(board);
                comment.setCContent("테스트 댓글 " + i);
                comment.setMemberVO(member);
                System.out.println(board);
                System.out.println(member);
                commentRepository.save(comment);

            });
            System.out.println("댓글 등록 완료");
    }


//    @Test
//    @Transactional
//    void 글가져오기(){
//        List<jBoard> jBoards = boardRepository.findAllList();
//        System.out.println(jBoards);
//    }
//    @Test
//    @Transactional
//    void 댓글수출력(){
//        long i = 3933;
//        int j = commentRepository.checkCommentCnt(i);
//        System.out.println(j);
//    }
    }
