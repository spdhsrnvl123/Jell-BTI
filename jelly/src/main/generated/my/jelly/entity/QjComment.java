package my.jelly.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QJComment is a Querydsl query type for JComment
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QJComment extends EntityPathBase<JComment> {

    private static final long serialVersionUID = 1878045582L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QJComment jComment = new QJComment("jComment");

    public final QJBoard BoardVO;

    public final StringPath cContent = createString("cContent");

    public final NumberPath<Long> cIdx = createNumber("cIdx", Long.class);

    public final DateTimePath<java.time.LocalDateTime> insertDate = createDateTime("insertDate", java.time.LocalDateTime.class);

    public final QMember MemberVO;

    public QJComment(String variable) {
        this(JComment.class, forVariable(variable), INITS);
    }

    public QJComment(Path<? extends JComment> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QJComment(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QJComment(PathMetadata metadata, PathInits inits) {
        this(JComment.class, metadata, inits);
    }

    public QJComment(Class<? extends JComment> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.BoardVO = inits.isInitialized("BoardVO") ? new QJBoard(forProperty("BoardVO"), inits.get("BoardVO")) : null;
        this.MemberVO = inits.isInitialized("MemberVO") ? new QMember(forProperty("MemberVO")) : null;
    }

}

