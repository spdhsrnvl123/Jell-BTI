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

//    public Map<String, Object> testCntComment() {
//        return commentRepository.commentCnt();
//    }

//    public int checkCnt(long bIdx) {
//        int i = commentRepository.checkCommentCnt(bIdx);
//        return i;
//
//    }
}
