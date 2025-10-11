package my.jelly.repository;

import my.jelly.entity.JRate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RateRepositorySpringDataJpa extends JpaRepository<JRate, Long> {

    @Query("select r from JRate r where r.MemberVO.mEmail like :mEmail")
    List<JRate> findRatesByEmail(@Param("mEmail") String mEmail);

    @Query("select r from JRate r where r.jInfoVO.jIdx = :jIdx")
    List<JRate> findRatesByJellyId(@Param("jIdx") Long jIdx);
}
