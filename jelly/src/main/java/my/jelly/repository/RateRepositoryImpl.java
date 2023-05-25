package my.jelly.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import my.jelly.entity.QJRate;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.Optional;

@Repository
public class RateRepositoryImpl implements RateRepository{

    private final RateRepositorySpringDataJpa repositorySpringDataJpa;

    private final EntityManager em;
    private final JPAQueryFactory query;

    public RateRepositoryImpl(RateRepositorySpringDataJpa repositorySpringDataJpa, EntityManager em) {
        this.repositorySpringDataJpa = repositorySpringDataJpa;
        this.em = em;
        query = new JPAQueryFactory(em);
    }



    public Optional<Double> getScore(Long jIdx) {
        QJRate qjRate = QJRate.jRate;

        return Optional.ofNullable(query
                .select(qjRate.jStar.avg())
                .from(qjRate)
                .where(qjRate.jInfoVO.jIdx.eq(jIdx))
                .fetchFirst());
    }

}
