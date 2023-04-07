package my.jelly.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.dto.BoardPrevDTO;
import my.jelly.entity.jBoard;
import my.jelly.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Log4j2
public class BoardService {
    private final BoardRepository boardRepository;

    //전체 글 리스트 조회
//    public List<jBoard> getBoardAll() {
//        List<jBoard> list = boardRepository.findAllList();
//
//        return list;
//    }
}
