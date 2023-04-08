package my.jelly.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QjRate is a Querydsl query type for jRate
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QjRate extends EntityPathBase<jRate> {

    private static final long serialVersionUID = -1607721423L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QjRate jRate = new QjRate("jRate");

    public final QjInfo jInfoVO;

    public final NumberPath<Integer> jStar = createNumber("jStar", Integer.class);

    public final QMember MemberVO;

    public final StringPath rContent = createString("rContent");

    public final NumberPath<Long> rIdx = createNumber("rIdx", Long.class);

    public QjRate(String variable) {
        this(jRate.class, forVariable(variable), INITS);
    }

    public QjRate(Path<? extends jRate> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QjRate(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QjRate(PathMetadata metadata, PathInits inits) {
        this(jRate.class, metadata, inits);
    }

    public QjRate(Class<? extends jRate> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.jInfoVO = inits.isInitialized("jInfoVO") ? new QjInfo(forProperty("jInfoVO")) : null;
        this.MemberVO = inits.isInitialized("MemberVO") ? new QMember(forProperty("MemberVO")) : null;
    }

}

