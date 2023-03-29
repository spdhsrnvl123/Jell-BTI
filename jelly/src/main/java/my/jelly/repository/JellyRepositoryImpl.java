package my.jelly.repository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import my.jelly.dto.JellyDTO;
import my.jelly.entity.jInfo;
import org.springframework.stereotype.Repository;

@Slf4j
@Repository
@RequiredArgsConstructor
public class JellyRepositoryImpl implements JellyRepository{

    private final SpringDataJpaJellyRepository repository;

    @Override
    public void update(Long jIdx, JellyDTO jellyDTO) {
        jInfo jInfo = repository.findById(jIdx).orElseThrow();
        jInfo.setJDetail(jellyDTO.getJDetail());
        jInfo.setJKcal(jellyDTO.getJKcal());
        jInfo.setJGram(jellyDTO.getJGram());
        jInfo.setJPrice(jellyDTO.getJPrice());
        jInfo.setJSweet(jellyDTO.getJSweet());
        jInfo.setJSour(jellyDTO.getJSour());
        jInfo.setJHard(jellyDTO.getJHard());
        jInfo.setJSoft(jellyDTO.getJSoft());
        jInfo.setJSalty(jellyDTO.getJSalty());
        jInfo.setJCarbohydrate(jellyDTO.getJCarbohydrate());
        jInfo.setJProtein(jellyDTO.getJProtein());
        jInfo.setJFat(jellyDTO.getJFat());
        jInfo.setJSugars(jellyDTO.getJSugars());
        jInfo.setJSalt(jellyDTO.getJSalt());
        jInfo.setJCholesterol(jellyDTO.getJCholesterol());
    }
}
