package my.jelly.repository;

import my.jelly.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface MemberRepository extends JpaRepository<Member, String> {

    @Query("select m from Member m where m.mEmail like :mEmail")
    Member findBymEmail(@Param(value = "mEmail") String mEmail);


}
