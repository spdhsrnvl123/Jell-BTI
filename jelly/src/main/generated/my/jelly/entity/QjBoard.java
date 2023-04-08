package my.jelly.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QjBoard is a Querydsl query type for jBoard
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QjBoard extends EntityPathBase<jBoard> {

    private static final long serialVersionUID = 1685866421L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QjBoard jBoard = new QjBoard("jBoard");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final StringPath bContent = createString("bContent");

    public final NumberPath<Long> bIdx = createNumber("bIdx", Long.class);

    public final StringPath bTitle = createString("bTitle");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> insertDate = _super.insertDate;

    public final QMember MemberVO;

    public QjBoard(String variable) {
        this(jBoard.class, forVariable(variable), INITS);
    }

    public QjBoard(Path<? extends jBoard> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QjBoard(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QjBoard(PathMetadata metadata, PathInits inits) {
        this(jBoard.class, metadata, inits);
    }

    public QjBoard(Class<? extends jBoard> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.MemberVO = inits.isInitialized("MemberVO") ? new QMember(forProperty("MemberVO")) : null;
    }

}

