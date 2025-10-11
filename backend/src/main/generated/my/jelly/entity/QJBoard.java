package my.jelly.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QJBoard is a Querydsl query type for JBoard
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QJBoard extends EntityPathBase<JBoard> {

    private static final long serialVersionUID = 769733589L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QJBoard jBoard = new QJBoard("jBoard");

    public final StringPath bContent = createString("bContent");

    public final NumberPath<Long> bIdx = createNumber("bIdx", Long.class);

    public final StringPath bTitle = createString("bTitle");

    public final DateTimePath<java.time.LocalDateTime> insertDate = createDateTime("insertDate", java.time.LocalDateTime.class);

    public final QMember MemberVO;

    public QJBoard(String variable) {
        this(JBoard.class, forVariable(variable), INITS);
    }

    public QJBoard(Path<? extends JBoard> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QJBoard(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QJBoard(PathMetadata metadata, PathInits inits) {
        this(JBoard.class, metadata, inits);
    }

    public QJBoard(Class<? extends JBoard> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.MemberVO = inits.isInitialized("MemberVO") ? new QMember(forProperty("MemberVO")) : null;
    }

}

