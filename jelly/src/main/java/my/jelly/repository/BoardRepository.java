package my.jelly.repository;

import my.jelly.dto.BoardPrevDTO;
import my.jelly.entity.jBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<jBoard, Long> {
//    List<jBoard> findAll();
//
//    @Query(value = "select * from j_Board where b_Idx = :bIdx", nativeQuery = true)
//    jBoard findBybIdx(@Param(value ="bIdx") Long bIdx);
//
//
//    //특정 회원 작성 글 찾아오기
//    @Query(value = "select * from j_Board where m_Email = :mEmail",nativeQuery = true)
//    List<jBoard> findBymEmail(@Param(value = "mEmail") String mEmail);
//
//    @Query(value = "select * from j_Board",nativeQuery = true)
//    List<jBoard> findAllList();

}
