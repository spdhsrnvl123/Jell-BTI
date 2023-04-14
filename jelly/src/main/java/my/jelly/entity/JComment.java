package my.jelly.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import my.jelly.dto.CommentDTO;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EntityListeners(AuditingEntityListener.class)
@Table(name = "JComment")
public class JComment {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bIdx")
    private JBoard BoardVO; //평가할 젤리 정보 //연관 관계 지정

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_generator")
    @SequenceGenerator(name="seq_generator", sequenceName = "seq_name", allocationSize = 1, initialValue = 1)
    private Long cIdx; //댓글 번호

    private String cContent; //댓글 내용

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="mEmail") //name = 생성될 column 명
    private Member MemberVO; //댓글 작성자 정보

    @CreatedDate
    @Column(name = "insert_date", updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime insertDate;


}
