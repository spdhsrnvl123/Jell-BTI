package my.jelly.repository;

import my.jelly.dto.JellyDTO;
import my.jelly.entity.JInfo;

import java.util.List;

public interface JellyRepository {
    public void update(Long jIdx, JellyDTO jellyDTO);

    public List<JInfo> findAll(String jellyName);
}
