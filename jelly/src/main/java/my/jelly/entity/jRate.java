package my.jelly.entity;

import lombok.*;
import my.jelly.dto.RateDTO;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class jRate {
    //id문제로 일단 생성
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long rIdx;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "jIdx")
    private jInfo jInfoVO; //평가할 젤리 정보

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mEmail")
    private Member MemberVO; //평점 남긴 사용자 정보

    @Column(nullable = false)
    private int jStar; //젤리 평점

    // 0331 박의민 추가함
    private String rContent; // 젤리 평가

    public jRate(RateDTO rateDTO) {
        this.jInfoVO = rateDTO.getJInfo();
        this.MemberVO = rateDTO.getMember();
        this.jStar = rateDTO.getJStar();
        this.rContent = rateDTO.getRContent();
    }

}
