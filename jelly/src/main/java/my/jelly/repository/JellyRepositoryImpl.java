package my.jelly.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.extern.slf4j.Slf4j;
import my.jelly.dto.JellyDTO;
import my.jelly.entity.QJInfo;
import my.jelly.entity.JInfo;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManager;
import java.util.List;

@Slf4j
@Repository
public class JellyRepositoryImpl implements JellyRepository{

    private final JellyRepositorySpringDataJpa repository;

    private final EntityManager em;
    private final JPAQueryFactory query;

    public JellyRepositoryImpl(JellyRepositorySpringDataJpa repository, EntityManager em) {
        this.repository = repository;
        this.em = em;
        this.query = new JPAQueryFactory(em);
    }

    @Override
    public void update(Long jIdx, JellyDTO jellyDTO) {
        JInfo jInfo = repository.findById(jIdx).orElseThrow();
//        jInfo.setJDetail(jellyDTO.getJDetail());
//        jInfo.setJKcal(jellyDTO.getJKcal());
//        jInfo.setJGram(jellyDTO.getJGram());
//        jInfo.setJPrice(jellyDTO.getJPrice());
        jInfo.setJSweet(jellyDTO.getJSweet());
        jInfo.setJSour(jellyDTO.getJSour());
        jInfo.setJHard(jellyDTO.getJHard());
        jInfo.setJSoft(jellyDTO.getJSoft());
        jInfo.setJSalty(jellyDTO.getJSalty());
//        jInfo.setJCarbohydrate(jellyDTO.getJCarbohydrate());
//        jInfo.setJProtein(jellyDTO.getJProtein());
//        jInfo.setJFat(jellyDTO.getJFat());
//        jInfo.setJSugars(jellyDTO.getJSugars());
//        jInfo.setJSalt(jellyDTO.getJSalt());
//        jInfo.setJCholesterol(jellyDTO.getJCholesterol());
        jInfo.setImageUrl(jellyDTO.getImageUrl());
    }

    @Override
    public List<JInfo> findAll(String jellyName) {
        QJInfo qjInfo = QJInfo.jInfo;

        return query
                .select(qjInfo)
                .from(qjInfo)
                .where(likeJellyName(jellyName))
                .fetch();
    }

    private BooleanExpression likeJellyName(String jellyName) {
        if(StringUtils.hasText(jellyName)){
            return QJInfo.jInfo.jName.like("%" + jellyName + "%");
        }
        return null;
    }

}
