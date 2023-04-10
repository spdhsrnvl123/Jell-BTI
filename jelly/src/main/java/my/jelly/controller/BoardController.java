package my.jelly.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import lombok.extern.log4j.Log4j2;
import my.jelly.dto.BoardPrevDTO;
import my.jelly.entity.jBoard;
import my.jelly.repository.BoardRepository;
import my.jelly.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Log4j2
public class BoardController {
    @Autowired
    private BoardService boardService;

    @Autowired
    private BoardRepository boardRepository;

    // R : Read All List (모든 글 리스트 가져오기)
    //@RequestMapping("/board")
    @GetMapping("/boardList")
    public List<jBoard> boardList() {
        //Map<String, Object> result = boardService.getBoardAll();
        //Gson gson = new GsonBuilder().setPrettyPrinting().create();
        List<jBoard> list = boardService.getBoardAll();
        System.out.println("==============성공===============");
        return list;
        //return gson.toJson(result);
    }
    // R : Read All List With Comment Count (댓글 수, 게시글 목록 같이 가져오기)
    @GetMapping("/board")
    public Map<String, Object> readBoardList(){
        List<jBoard> jBoards = boardService.getBoardAll();
        List<Integer> commentCnt = boardService.getBoardCnt();
        System.out.println(jBoards);
        Map<String,Object> map = new HashMap<>();
        map.put("boardList", jBoards);
        map.put("commentCnt", commentCnt);
        return map;
    }

    // C : Create Board (글 작성)
    @PostMapping("/board")
    public void createBoard(@RequestBody Map<String, Object> board) throws ParseException {
        boardService.createBoard(board);
    }

    // R : Read Board : 글 읽어오기
    @GetMapping("/board/{bIdx}")
    public Map<String,Object> readBoard(@PathVariable Long bIdx) throws ParseException{
        Map<String, Object> map = new HashMap<>();

        return map;
    }

    // U : Update Board Before (수정할 글 불러오기)
    @PatchMapping("/board/{bIdx}")
    public Map<String, Object> beforeBoard(@PathVariable Long bIdx) throws ParseException{
        Map<String, Object> map = new HashMap<>();
        map.put("board", boardService.getBoardBefore(bIdx));
        return map;
    }

    // U : Update Board (수정 글 받아와서 수정처리)
    @PatchMapping("/board")
    public void updateBoard(@RequestBody Map<String, Object> board) throws ParseException{
        boardService.updateBoard(board);
    }


//    @GetMapping("/boardTest2")
//    public List<BoardPrevDTO> boardTest(){
//        List<BoardPrevDTO> test2 = boardService.getBoardTest();
//        return test2;
//    }

}

