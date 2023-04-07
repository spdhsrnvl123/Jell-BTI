package my.jelly.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
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
    public Map<String, Object> getBoardAll() {
        List<jBoard> list = boardRepository.findAll();
        Map<String, Object> map = new HashMap<>();
        map.put("allList" , list);
        System.out.println(map);
        return map;
    }

//    public int checkCnt(long bIdx) {
//        int i = commentRepository.checkCommentCnt(bIdx);
//        return i;
//
//    }
}
