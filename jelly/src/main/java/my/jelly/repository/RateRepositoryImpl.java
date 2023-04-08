package my.jelly.repository;

import lombok.RequiredArgsConstructor;
import my.jelly.entity.jRate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class RateRepositoryImpl implements RateRepository{

    private final RateRepositorySpringDataJpa repositorySpringDataJpa;

}
