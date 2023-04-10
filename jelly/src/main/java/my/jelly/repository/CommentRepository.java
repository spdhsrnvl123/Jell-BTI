package my.jelly.repository;

import my.jelly.entity.JComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface CommentRepository extends JpaRepository<JComment, Long> {
    //특정 글 댓글 수 조회

    //select (select count(*) from j_comment c where b.b_idx = c.b_idx) as cnt,
    //b.* from j_board b order by b_idx;

//    @Query(value = "select (select count(*) from j_comment c where b.b_idx = c.b_idx) as cnt," +
//            "b.* from j_board b order by b_idx;", nativeQuery = true)
//    Map<String, Object> commentCnt();
}
