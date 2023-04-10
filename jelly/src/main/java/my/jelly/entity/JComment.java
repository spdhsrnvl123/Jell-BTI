package my.jelly.entity;

import lombok.*;
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
@Table(name = "j_comment")
public class JComment {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bIdx")
    private JBoard BoardVO; //평가할 젤리 정보 //연관 관계 지정

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long cIdx; //댓글 번호

    private String cContent; //댓글 내용

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="mEmail") //name = 생성될 column 명
    private Member MemberVO; //댓글 작성자 정보

    @CreatedDate
    private LocalDateTime insertDate;
}
