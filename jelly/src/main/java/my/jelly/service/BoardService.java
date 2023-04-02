package my.jelly.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.dto.BoardDTO;
import my.jelly.entity.Member;
import my.jelly.entity.jBoard;
import my.jelly.repository.BoardRepository;
import my.jelly.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Log4j2
public class BoardService {
    private final BoardRepository boardRepository;

    public Map<String, Object> getBoardAll() {
        List
    }
}
