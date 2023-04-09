package my.jelly.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.dto.BoardPrevDTO;
import my.jelly.entity.jBoard;
import my.jelly.repository.BoardRepository;
import my.jelly.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Log4j2
public class BoardService {
    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    //전체 글 리스트 조회
    public List<jBoard> getBoardAll() {
        //List<jBoard> list = boardRepository.findAll();
        List<jBoard> list = boardRepository.findAll();
        System.out.println(list);
        return list;
    }
    //전체 글 댓글 수 조회
   public List<Integer> getBoardCnt(){
        List<Integer> list2 = boardRepository.commentCnt();
        return list2;
   }
   //글 댓글 목록 한꺼번에 조회 테스트ㅠㅠ
    public List<BoardPrevDTO> getBoardTest() {
        List<BoardPrevDTO> test1 = boardRepository.testCntAndList();
        return test1;
    }

//    public Map<String, Object> testCntComment() {
//        return commentRepository.commentCnt();
//    }

}
