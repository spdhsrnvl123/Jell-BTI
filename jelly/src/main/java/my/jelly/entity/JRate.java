package my.jelly.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import my.jelly.dto.RateDTO;
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
@Table(name = "JRate")
public class JRate {
    //id문제로 일단 생성
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long rIdx;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jIdx")
    private JInfo jInfoVO; //평가할 젤리 정보

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mEmail")
    private Member MemberVO; //평점 남긴 사용자 정보

    @Column(nullable = false)
    private int jStar; //젤리 평점

    // 0331 박의민 추가함
    private String rContent; // 젤리 평가

    @CreatedDate
    @Column(name = "insert_date", updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime insertDate;

    public JRate(RateDTO rateDTO) {
        this.jInfoVO = rateDTO.getJInfo();
        this.MemberVO = rateDTO.getMember();
        this.jStar = rateDTO.getJStar();
        this.rContent = rateDTO.getRContent();
    }

}
