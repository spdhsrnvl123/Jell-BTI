package my.jelly.controller;


import lombok.RequiredArgsConstructor;
import my.jelly.entity.jBoard;
import my.jelly.repository.BoardRepository;
import my.jelly.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

//    @GetMapping("/test/comment")
//    public Map<String, Object> testcomment(@RequestParam(value = "bIdx") Long bIdx) throws IOException {
//        Map<String, Object> map = new HashMap<>();
//        map = boardService.testCntComment();
//        return map;

}

