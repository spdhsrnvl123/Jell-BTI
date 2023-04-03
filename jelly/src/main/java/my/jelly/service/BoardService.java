package my.jelly.service;

import com.sun.xml.bind.v2.schemagen.xmlschema.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.dto.BoardPrevDTO;
import my.jelly.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
@Log4j2
public class BoardService {
    private final BoardRepository boardRepository;
    public Map<String, Object> getBoardAll() {
        List<BoardPrevDTO> list = boardRepository.findBoardAll();
    }
}
