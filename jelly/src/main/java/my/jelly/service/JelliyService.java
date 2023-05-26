package my.jelly.service;

import my.jelly.dto.JellyDTO;
import my.jelly.entity.JInfo;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface JelliyService {
    public int createJellyInformation()throws IOException;

    public void deleteAllJellyInformation();

    public List<JInfo> findAll(String jellyName);

    public void updateJellyInformation(Long jIdx,JellyDTO jellyDTO);

    public Map<String, Object> findById(Long jIdx);
}
