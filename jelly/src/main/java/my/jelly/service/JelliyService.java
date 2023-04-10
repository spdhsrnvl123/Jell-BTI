package my.jelly.service;

import my.jelly.dto.JellyDTO;
import my.jelly.entity.JInfo;

import java.io.IOException;
import java.util.List;

public interface JelliyService {
    public int createJellyInformation()throws IOException;

    public void deleteAllJellyInformation();

    public List<JInfo> findAll(String jellyName);

    public void updateJellyInformation(Long jIdx,JellyDTO jellyDTO);

    public JellyDTO findById(Long jIdx);
}
