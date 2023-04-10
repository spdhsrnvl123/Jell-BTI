package my.jelly.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class RateRepositoryImpl implements RateRepository{

    private final RateRepositorySpringDataJpa repositorySpringDataJpa;

}
