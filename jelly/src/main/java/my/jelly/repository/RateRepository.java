package my.jelly.repository;

import java.util.Optional;

public interface RateRepository {

    public Optional<Double> getScore(Long jIdx);
}
