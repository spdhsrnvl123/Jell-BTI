package my.jelly.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.entity.JBoard;
import my.jelly.entity.Member;
import my.jelly.repository.BoardRepository;
import my.jelly.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Log4j2
public class BoardService {
    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    @Autowired
    MemberService memberService;


    //Read All List : 전체 글 리스트 조회
    public List<JBoard> getBoardAll() {
        //List<jBoard> list3 = boardRepository.findAll();
        List<JBoard> list = boardRepository.findAll();
        System.out.println(list);
        return list;
    }
    //Read All List : 전체 글 댓글 수 조회
    public List<Integer> getBoardCnt () {
        List<Integer> list1 = boardRepository.commentCnt();
        return list1;
    }
    // Create Board : 글 생성하기
    public void createBoard (Map < String, Object > board){
        JBoard j = new JBoard();
        j.setBTitle((String) board.get("boardTitle"));
        j.setBContent((String) board.get("boardContent"));
        Member memberVO = memberService.findUser((String) board.get("memberAccount"));
        j.setMemberVO(memberVO);
        boardRepository.save(j);
    }
    // Update Board Before Read : 수정할 글 가져오기
    public JBoard getBoardBefore (Long bIdx){
        JBoard j = new JBoard();
        j = boardRepository.findBybIdx(bIdx);
        System.out.println("=================================");
        System.out.println(j);
        return j;
    }
    // Update Board : 수정 글 받아와 처리
    public void updateBoard (Map < String, Object > board){
        JBoard j = boardRepository.findBybIdx((Long) board.get("boardIdx"));
        j.setBTitle((String) board.get("boardTitle"));
        j.setBContent((String) board.get("boardContent"));
    }

    // Delete Board : 글 지우기
//    public void deleteBoard(Long bIdx) {
//        //commentRepository.deleteAllComment(bIdx);
//        //boardRepository.deleteById(bIdx);
//    }
}
