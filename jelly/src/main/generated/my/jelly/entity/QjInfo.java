package my.jelly.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QjInfo is a Querydsl query type for jInfo
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QjInfo extends EntityPathBase<jInfo> {

    private static final long serialVersionUID = -1607977473L;

    public static final QjInfo jInfo = new QjInfo("jInfo");

    public final StringPath jCarbohydrate = createString("jCarbohydrate");

    public final StringPath jCholesterol = createString("jCholesterol");

    public final StringPath jDetail = createString("jDetail");

    public final StringPath jFat = createString("jFat");

    public final StringPath jGram = createString("jGram");

    public final NumberPath<Long> jHard = createNumber("jHard", Long.class);

    public final NumberPath<Long> jIdx = createNumber("jIdx", Long.class);

    public final StringPath jKcal = createString("jKcal");

    public final StringPath jName = createString("jName");

    public final NumberPath<Long> jPrice = createNumber("jPrice", Long.class);

    public final StringPath jProtein = createString("jProtein");

    public final StringPath jSalt = createString("jSalt");

    public final NumberPath<Long> jSalty = createNumber("jSalty", Long.class);

    public final NumberPath<Long> jSoft = createNumber("jSoft", Long.class);

    public final NumberPath<Long> jSour = createNumber("jSour", Long.class);

    public final StringPath jSugars = createString("jSugars");

    public final NumberPath<Long> jSweet = createNumber("jSweet", Long.class);

    public QjInfo(String variable) {
        super(jInfo.class, forVariable(variable));
    }

    public QjInfo(Path<? extends jInfo> path) {
        super(path.getType(), path.getMetadata());
    }

    public QjInfo(PathMetadata metadata) {
        super(jInfo.class, metadata);
    }

}

