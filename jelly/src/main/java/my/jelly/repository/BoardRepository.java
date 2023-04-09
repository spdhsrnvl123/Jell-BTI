package my.jelly.repository;

import my.jelly.dto.BoardPrevDTO;
import my.jelly.entity.jBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<jBoard, Long> {

    @Transactional
    List<jBoard> findAll();

    //글 번호로 글 검색
    @Query(value = "select * from j_Board where b_Idx = :bIdx", nativeQuery = true)
    jBoard findBybIdx(@Param(value ="bIdx") Long bIdx);


    //특정 회원 작성 글 찾아오기
    @Query(value = "select * from j_Board where m_Email = :mEmail",nativeQuery = true)
    List<jBoard> findBymEmail(@Param(value = "mEmail") String mEmail);

    //전체 글 댓글 수 가져오기
    @Query(value = "select (select count(*) from j_comment c where b.b_idx = c.b_idx) as cnt from j_board b order by b_idx", nativeQuery = true)
    List<Integer> commentCnt();

    @Query(value = "select new java.my.jelly.dto.BoardPrevDTO(b.b_Idx, b.b_Title, m.m_Nick, b.insert_date,(select count(*) from j_comment c where b.b_Idx = c.b_Idx)) " +
            " from j_Board b, member m where b.MemberVO = m", nativeQuery = true)
    List<BoardPrevDTO> testCntAndList();


// , (select count(*) from j_Comment c where b.b_idx = c.b_idx))
//    select (select count(*) from j_comment c where b.b_idx = c.b_idx) as cnt,
//    b.* from j_board b order by b_idx;

}
