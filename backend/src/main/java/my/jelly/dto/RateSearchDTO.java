package my.jelly.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

// 젤리 평가 검색 조건
@Data
public class RateSearchDTO {

    @JsonProperty("jIdx")
    private Long jIdx;

    @JsonProperty("rIdx")
    private Long rIdx;

    @JsonProperty("mEmail")
    private String mEmail;
}
