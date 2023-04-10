package my.jelly.repository;

import my.jelly.entity.jComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Repository
public interface CommentRepository extends JpaRepository<jComment, Long> {

    @Query(value = "select * from j_Comment where b_Idx = :bIdx", nativeQuery = true)
    List<jComment> findbIdxComment(@Param(value = "bIdx") Long bIdx);

//    @Query(value = "delete from j_Comment where b_Idx = :bIdx",nativeQuery = true)
//    void deleteAllComment(@Param(value = "bIdx") Long bIdx);
    //특정 글 댓글 수 조회

    //select (select count(*) from j_comment c where b.b_idx = c.b_idx) as cnt,
    //b.* from j_board b order by b_idx;

//    @Query(value = "select (select count(*) from j_comment c where b.b_idx = c.b_idx) as cnt," +
//            "b.* from j_board b order by b_idx;", nativeQuery = true)
//    Map<String, Object> commentCnt();
}
