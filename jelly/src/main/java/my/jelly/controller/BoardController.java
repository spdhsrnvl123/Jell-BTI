package my.jelly.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.dto.BoardPrevDTO;
import my.jelly.dto.CommentDTO;
import my.jelly.entity.JBoard;
import my.jelly.entity.JComment;
import my.jelly.repository.BoardRepository;
import my.jelly.service.BoardService;
import my.jelly.service.CommentService;
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

    @Autowired
    private CommentService commentService;

    // R : Read All List (모든 글 리스트 가져오기)
    //@RequestMapping("/board")
    @GetMapping("/boardList")
    public List<JBoard> boardList() {
        //Map<String, Object> result = boardService.getBoardAll();
        //Gson gson = new GsonBuilder().setPrettyPrinting().create();
        List<JBoard> list = boardService.getBoardAll();
        System.out.println("==============글만 가져오기 성공===============");
        return list;
        //return gson.toJson(result);
    }

    // R : Read All List With Comment Count (댓글 수, 게시글 목록 같이 가져오기)
    @GetMapping("/boards")
    public Map<String, Object> readBoardList(){
        List<JBoard> jBoards = boardService.getBoardAll();
        List<Integer> commentCnt = boardService.getBoardCnt();
        System.out.println(jBoards);
        Map<String,Object> map = new HashMap<>();
        map.put("boardList", jBoards);
        map.put("commentCnt", commentCnt);
        System.out.println("=======전체 글 불러오기=======");
        return map;
    }

    // C : Create Board (글 작성)
    @PostMapping("/board")
    public void createBoard(@RequestBody Map<String, Object> board) throws ParseException {
        boardService.createBoard(board);
    }

    // R : Read Board : 글 읽어오기     =@RequestParam / PathVariable
    //@GetMapping({"/board", "/modify"})
    @GetMapping("/board")
    public Map<String,Object> readBoard(@RequestParam Long bIdx) throws ParseException{
        System.out.println("========="+ bIdx + "번 글 불러오기 성공==========");
        Map<String, Object> map = new HashMap<>();
        map.put("board",boardService.getBoardBefore(bIdx));
        List<JComment> list = commentService.getComment(bIdx);
        map.put("comment", list);
        return map;
    }

    // U : Update Board Before (수정할 글 불러오기)
    @GetMapping ("/modify")
    public Map<String, Object> beforeBoard(@RequestParam Long bIdx) throws ParseException{
        Map<String, Object> map = new HashMap<>();
        map.put("board", boardService.getBoardBefore(bIdx));
        return map;
    }

    // U : Update Board (수정 글 받아와서 수정처리)
    @PutMapping("/board")
    public void updateBoard(@RequestBody Map<String, Object> board) throws ParseException{
        boardService.updateBoard(board);
    }

    // D : Delete Board (글 지우기)
    @GetMapping("/delete")
    public void deleteBoard(@RequestParam Long bIdx) throws ParseException{
        System.out.println("댓글 지우기 호출");
        commentService.deleteComment(bIdx);
        System.out.println("글 지우기 호출");
        boardService.deleteBoard(bIdx);

        System.out.println("글 삭제 성공");
    }


//    @GetMapping("/boardTest2")
//    public List<BoardPrevDTO> boardTest(){
//        List<BoardPrevDTO> test2 = boardService.getBoardTest();
//        return test2;
//    }

}

