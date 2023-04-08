package my.jelly.repository;

import my.jelly.entity.jRate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RateRepositorySpringDataJpa extends JpaRepository<jRate, Long> {

    @Query("select r from jRate r where r.MemberVO.mEmail like :mEmail")
    List<jRate> findRatesByEmail(@Param("mEmail") String mEmail);

    @Query("select r from jRate r where r.jInfoVO.jIdx = :jIdx")
    List<jRate> findRatesByJellyId(@Param("jIdx") Long jIdx);
}
