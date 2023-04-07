package my.jelly.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import lombok.extern.log4j.Log4j2;
import my.jelly.dto.BoardPrevDTO;
import my.jelly.entity.jBoard;
import my.jelly.repository.BoardRepository;
import my.jelly.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@Log4j2
@CrossOrigin(origins = "*")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @Autowired
    private BoardRepository boardRepository;

    // 등록 - Post 수정 - Put

    // 모든 글 리스트
//    @GetMapping("/board")
//    public List<jBoard> boardAll(){
//       List<jBoard> res = boardService.getBoardAll();
//       //Gson gson = new GsonBuilder().setPrettyPrinting().create();
//
//       return res;
//    }

}
