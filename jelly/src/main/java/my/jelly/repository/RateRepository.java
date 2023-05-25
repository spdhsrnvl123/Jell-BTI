package my.jelly.repository;

import my.jelly.entity.JRate;

import java.util.List;
import java.util.Optional;

public interface RateRepository {

    public Optional<Double> getScore(Long jIdx);

    public List<JRate> findByJIdx(Long jIdx);
}
