package my.jelly.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import my.jelly.entity.JInfo;
import my.jelly.entity.Member;

@Data
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RateDTO {



    @JsonProperty("jIdx")
    private Long jIdx; //젤리 번호

    @JsonProperty("mNick")
    private String mNick; //평점 매긴 사람 닉네임

    @JsonProperty("mJelly")
    private String mJelly; //평점 매긴 사람 젤리 타입

    @JsonProperty("jStar")
    private int jStar; //평점


    //박의민 추가 0331
    private Long rIdx; // 후기 id

    @JsonProperty("rContent")
    private String rContent; //평가 내용

    @JsonProperty("mEmail")
    private String mEmail; // 사용자 이메일

    @JsonProperty("mAccount")
    private String mAccount; // 이건 뭔지 모르겠는데 멤버 테이블에 있어서 일단 갖고옴

    private JInfo jInfo;

    private Member member;
}
