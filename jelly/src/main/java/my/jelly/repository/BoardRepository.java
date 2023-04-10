package my.jelly.repository;

import my.jelly.entity.JBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<JBoard, Long> {

    List<JBoard> findAll();

    @Query(value = "select * from j_Board where b_Idx = :bIdx", nativeQuery = true)
    JBoard findBybIdx(@Param(value ="bIdx") Long bIdx);


    //특정 회원 작성 글 찾아오기
    @Query(value = "select * from j_Board where m_Email = :mEmail",nativeQuery = true)
    List<JBoard> findBymEmail(@Param(value = "mEmail") String mEmail);

}
