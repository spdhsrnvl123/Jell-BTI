package my.jelly.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QjComment is a Querydsl query type for jComment
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QjComment extends EntityPathBase<jComment> {

    private static final long serialVersionUID = 1813401454L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QjComment jComment = new QjComment("jComment");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final QjBoard BoardVO;

    public final StringPath cContent = createString("cContent");

    public final NumberPath<Long> cIdx = createNumber("cIdx", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> insertDate = _super.insertDate;

    public final QMember MemberVO;

    public QjComment(String variable) {
        this(jComment.class, forVariable(variable), INITS);
    }

    public QjComment(Path<? extends jComment> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QjComment(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QjComment(PathMetadata metadata, PathInits inits) {
        this(jComment.class, metadata, inits);
    }

    public QjComment(Class<? extends jComment> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.BoardVO = inits.isInitialized("BoardVO") ? new QjBoard(forProperty("BoardVO"), inits.get("BoardVO")) : null;
        this.MemberVO = inits.isInitialized("MemberVO") ? new QMember(forProperty("MemberVO")) : null;
    }

}

