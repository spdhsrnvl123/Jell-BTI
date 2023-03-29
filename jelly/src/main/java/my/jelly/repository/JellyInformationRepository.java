package my.jelly.repository;

import my.jelly.entity.jInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JellyInformationRepository extends JpaRepository<jInfo, Long> {

}
