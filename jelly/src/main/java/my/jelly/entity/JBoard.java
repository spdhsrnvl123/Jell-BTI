package my.jelly.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@DynamicInsert
@Table(name = "JBoard")
public class JBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE) //mysql에서는 IDENTITY
    private Long bIdx; //글 번호
    //테스트
    @Column(nullable = false, length = 300)
    private String bTitle; //글 제목
    @Column(nullable = false, length = 3000)
    private String bContent; //글 내용
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="mEmail") //name = 생성될 column 명
    private Member MemberVO; //작성자 정보

    @CreatedDate
    @Column(name = "insert_date", updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime insertDate;
}
