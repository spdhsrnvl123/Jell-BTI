package my.jelly.service;


import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.entity.jComment;
import my.jelly.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;

    //글 번호에 맞는 댓글 불러오기
    public List<jComment> getComment(Long bIdx) {
        List<jComment> list =  commentRepository.findbIdxComment(bIdx);
        return list;
    }
}
