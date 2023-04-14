package my.jelly.entity;

import lombok.*;
import my.jelly.dto.JellyDTO;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "JInfo")
public class JInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_generator")
    @SequenceGenerator(name="seq_generator", sequenceName = "seq_name", allocationSize = 1, initialValue = 1)
    private Long jIdx; //젤리번호

    @Column(nullable = false, length = 100)
    private String jName; //젤리 이름
    @Column(length = 1000)
    private String jDetail; //젤리 정보

    private String jKcal; //젤리 칼로리
    private String jGram; //젤리 양
    private Long jPrice; //젤리 가격
    private Long jSweet; //젤리 달콤함
    private Long jSour; //젤리 새콤함
    private Long jHard; //젤리 단단함
    private Long jSoft; //젤리 부드러움
    private Long jSalty; //젤리 짬

    private String jCarbohydrate; // 탄수화물

    private String jProtein; // 단백질

    private String jFat; // 지방

    private String jSugars; // 당류

    private String jSalt; // 나트륨

    private String jCholesterol; // 콜레스테롤

    public JInfo(JellyDTO jellyDTO){
        this.jName = jellyDTO.getJName();
        this.jGram = jellyDTO.getJGram();
        this.jKcal = jellyDTO.getJKcal();
        this.jCarbohydrate = jellyDTO.getJCarbohydrate();
        this.jProtein = jellyDTO.getJProtein();
        this.jFat = jellyDTO.getJFat();
        this.jSugars = jellyDTO.getJSugars();
        this.jSalt = jellyDTO.getJSalt();
        this.jCholesterol = jellyDTO.getJCholesterol();
    }

}
