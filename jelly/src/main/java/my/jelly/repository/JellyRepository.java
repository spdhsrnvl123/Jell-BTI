package my.jelly.repository;

import my.jelly.dto.JellyDTO;

public interface JellyRepository {
    public void update(Long jIdx, JellyDTO jellyDTO);
}
