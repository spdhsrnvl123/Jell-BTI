package my.jelly.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BoardPrevDTO {
    // 글 리스트
    // 글 번호, 글 제목, 글 작성자, 글 작성일자, 댓글 수
    private Long bIdx; //글 번호
    private String bTitle; //글 제목
    private String mNick; //글 작성자
    private LocalDateTime insertDate; // 날짜
    private int Cnt; //댓글수

}
