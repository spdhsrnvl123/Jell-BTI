package my.jelly.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JellyDTO {

    @JsonProperty("jIdx")
    private Long jIdx; //젤리 번호

    @JsonProperty("jName")
    private String jName; //젤리 이름

    @JsonProperty("jDetail")
    private String jDetail; //젤리 정보

    @JsonProperty("jKcal")
    private String jKcal; //젤리 칼로리

    @JsonProperty("jGram")
    private String jGram; //젤리 양

    @JsonProperty("jPrice")
    private Long jPrice; //젤리 가격

    @JsonProperty("jSweet")
    private Long jSweet; //젤리 달콤함

    @JsonProperty("jSour")
    private Long jSour; //젤리 새콤함

    @JsonProperty("jHard")
    private Long jHard; //젤리 단단함

    @JsonProperty("jSoft")
    private Long jSoft; //젤리 부드러움

    @JsonProperty("jSalty")
    private Long jSalty; //젤리 짬

    @JsonProperty("jCarbohydrate")
    private String jCarbohydrate; // 탄수화물

    @JsonProperty("jProtein")
    private String jProtein; // 단백질

    @JsonProperty("jFat")
    private String jFat; // 지방

    @JsonProperty("jSugars")
    private String jSugars; // 당류

    @JsonProperty("jSalt")
    private String jSalt; // 나트륨

    @JsonProperty("jCholesterol")
    private String jCholesterol; // 콜레스테롤

    @JsonProperty("imageUrl")
    private String imageUrl; // 이미지 주소

    // 0525 박의민 추가
    private Double score; // 별점 총점

}
