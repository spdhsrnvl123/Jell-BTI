package my.jelly.repository;

import my.jelly.entity.JComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<JComment, Long> {
    //특정 글 댓글 수 조회
//    @Query(value = "update j_board b set b.c_cnt = (Select count(*) from j_comment j where j.b_idx = bIdx)" +
//            "where b.b_idx = :bIdx;", nativeQuery = true)
//    int checkCommentCnt(@Param(value = "bIdx")Long bIdx);
}
