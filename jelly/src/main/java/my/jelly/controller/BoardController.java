package my.jelly.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import lombok.RequiredArgsConstructor;
import my.jelly.repository.BoardRepository;
import my.jelly.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    // 모든 글 리스트
    @RequestMapping("/board")
    public Object boardAll(){
       Map<String, Object> result = boardService.getBoardAll();
       Gson gson = new GsonBuilder().setPrettyPrinting().create();
       System.out.println("==============성공===============");
       return gson.toJson(result);
    }

//    @GetMapping("/cnttest")
//    public int cntTest(@RequestParam(value = "bIdx")long bIdx){
//        int cnt = boardService.checkCnt(bIdx);
//        return cnt;
//    }

}
