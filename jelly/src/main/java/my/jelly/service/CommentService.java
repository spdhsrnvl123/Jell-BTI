package my.jelly.service;


import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import my.jelly.entity.JComment;
import my.jelly.repository.CommentRepository;
import org.springframework.stereotype.Service;

import javax.persistence.OneToMany;
import java.util.List;

@Service
@Log4j2
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;

    //글 번호에 맞는 댓글 불러오기
    public List<JComment> getComment(Long bIdx) {
        List<JComment> list =  commentRepository.findbIdxComment(bIdx);
        return list;
    }
    public void deleteComment(Long bIdx) {
        System.out.println("========Delete Comment=======");
        List<JComment> i =commentRepository.findbIdxComment(bIdx);
    }
}
