package my.jelly.controller;


import lombok.RequiredArgsConstructor;
import my.jelly.dto.BoardPrevDTO;
import my.jelly.entity.jBoard;
import my.jelly.repository.BoardRepository;
import my.jelly.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @Autowired
    private BoardRepository boardRepository;

    // 등록 - Post 수정 - Put

    // 모든 글 리스트 가져오기
    //@RequestMapping("/board")
    @GetMapping("/board")
    public List<jBoard> boardAll() {
        //Map<String, Object> result = boardService.getBoardAll();
        //Gson gson = new GsonBuilder().setPrettyPrinting().create();
        List<jBoard> list = boardService.getBoardAll();
        System.out.println("==============성공===============");
        return list;
        //return gson.toJson(result);
    }
    //댓글 수랑 게시글 목록 같이 반환
    @GetMapping("/boardTest")
    public Map<String, Object> boardPrevDTOList(){
        List<jBoard> boardPrevDTOList = boardService.getBoardAll();
        List<Integer> commentCnt = boardService.getBoardCnt();
        System.out.println(boardPrevDTOList);
        Map<String,Object> map = new HashMap<>();
        map.put("board", boardPrevDTOList);
        map.put("cnt", commentCnt);
        return map;
    }

    @GetMapping("/boardTest2")
    public List<BoardPrevDTO> boardTest(){
        List<BoardPrevDTO> test2 = boardService.getBoardTest();
        return test2;
    }

}

