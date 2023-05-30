package my.jelly.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.dto.CommentDTO;
import my.jelly.entity.JBoard;
import my.jelly.entity.JComment;
import my.jelly.entity.Member;
import my.jelly.repository.BoardRepository;
import my.jelly.repository.CommentRepository;
import my.jelly.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.OneToMany;
import java.awt.print.PrinterIOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@Log4j2
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    @Autowired
    BoardRepository boardRepository;
    @Autowired
    MemberRepository memberRepository;

    // Get : 글 번호에 맞는 댓글 불러오기
    public List<JComment> getComment(Long bIdx) {
        List<JComment> list = commentRepository.findbIdxComment(bIdx);
        return list;
    }

    // Delete : 글 삭제를 위해 댓글 먼저 지우기
    public void deleteComment(Long bIdx) {
        System.out.println("========Delete Comment=======");
        int i = commentRepository.deleteComment(bIdx);
        System.out.println("삭제한 댓글 수 : " + i);
    }

    // 댓글 등록
    // 넘겨 받을 값 : 원 글 번호, 댓글 내용, 댓글 작성자
    public void insertComment(Map<String, Object> map) {
        // 받아온 원 글 번호 Long으로 변환
        String bIdxString = (String) map.get("bIdx");
        Long bIdx = Long.parseLong(bIdxString);

        Member member = new Member();
        Member memberVO = memberRepository.findBymEmail((String) map.get("memberAccount"));

        JBoard jBoard = boardRepository.findBybIdx(bIdx);
        JComment jComment = new JComment();

        if (jBoard != null) {
            String cContent = (String) map.get("cContent");
            jComment.setBoardVO(jBoard); // 원글내용
            jComment.setCContent(cContent); // 댓글 내용
            jComment.setMemberVO(memberVO); // 댓글 작성자
            commentRepository.save(jComment);
            System.out.println("댓글 등록 완료");
        } else {
            System.out.println("원글 찾을 수 없음");
        }
    }
}
