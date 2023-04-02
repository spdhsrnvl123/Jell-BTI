package my.jelly.service;

import my.jelly.dto.JellyDTO;
import my.jelly.dto.RateDTO;
import my.jelly.entity.jInfo;
import my.jelly.entity.jRate;

import java.io.IOException;
import java.util.List;

public interface JelliyService {
    public int createJellyInformation()throws IOException;

    public void deleteAllJellyInformation();

    public List<jInfo> findAll();

    public void updateJellyInformation(Long jIdx,JellyDTO jellyDTO);

    public JellyDTO findById(Long jIdx);
}
