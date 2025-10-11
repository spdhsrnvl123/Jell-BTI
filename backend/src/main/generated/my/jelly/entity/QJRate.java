package my.jelly.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QJRate is a Querydsl query type for JRate
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QJRate extends EntityPathBase<JRate> {

    private static final long serialVersionUID = -1637274095L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QJRate jRate = new QJRate("jRate");

    public final DateTimePath<java.time.LocalDateTime> insertDate = createDateTime("insertDate", java.time.LocalDateTime.class);

    public final QJInfo jInfoVO;

    public final NumberPath<Integer> jStar = createNumber("jStar", Integer.class);

    public final QMember MemberVO;

    public final StringPath rContent = createString("rContent");

    public final NumberPath<Long> rIdx = createNumber("rIdx", Long.class);

    public QJRate(String variable) {
        this(JRate.class, forVariable(variable), INITS);
    }

    public QJRate(Path<? extends JRate> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QJRate(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QJRate(PathMetadata metadata, PathInits inits) {
        this(JRate.class, metadata, inits);
    }

    public QJRate(Class<? extends JRate> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.jInfoVO = inits.isInitialized("jInfoVO") ? new QJInfo(forProperty("jInfoVO")) : null;
        this.MemberVO = inits.isInitialized("MemberVO") ? new QMember(forProperty("MemberVO")) : null;
    }

}

