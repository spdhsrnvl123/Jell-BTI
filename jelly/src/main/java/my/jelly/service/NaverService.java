package my.jelly.service;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import lombok.RequiredArgsConstructor;
import my.jelly.config.PropertiesConfig;
import my.jelly.entity.Member;
import my.jelly.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class NaverService {

    public final MemberRepository memberRepository;

    @Value("#{jellyProperty['naver.client-id']}")
    private String clientId;

    @Value("#{jellyProperty['naver.client-secret']}")
    private String clientPassword;

    public String getToken(String code, HttpSession session) {
        System.out.println("client_id = " + clientId);
        String host = "https://nid.naver.com/oauth2.0/token";
        String access_token = "";
        String refresh_token = "";

        /* 세션 유효성 검증을 위하여 난수를 생성 */
        String state = UUID.randomUUID().toString();

        /* 생성한 난수 값을 session에 저장 */
        session.setAttribute("state",state);
        System.out.println("try전은 됨");
        try {
            URL url = new URL(host);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();

            urlConnection.setRequestMethod("POST");
            urlConnection.setDoOutput(true); // 데이터 기록 알려주기

            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(urlConnection.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id="+clientId);
            sb.append("&client_secret="+clientPassword);
            sb.append("&code=" + code);
            sb.append("&state=" + state);

//            sb.append("&redirect_uri=http://localhost:4000/oauth/login/kakao"); //프 서버로 바꾸기


            bw.write(sb.toString());
            bw.flush();
            System.out.println("통신 요청 전");
            //결과 코드 200이면 통신 성공임!
            int responseCode = urlConnection.getResponseCode();
            System.out.println("responseCode = " + responseCode);

            //요청 통해 얻은 JSON타입 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            System.out.println("response body = " + result);

            //Json 파싱 : Gson라이브러리에 포함된 클래스로 JSON 파싱 객체 생성
            JsonParser parser = new JsonParser();
            JsonElement elem = parser.parse(result);

            access_token = elem.getAsJsonObject().get("access_token").getAsString();
            refresh_token = elem.getAsJsonObject().get("refresh_token").getAsString();

            System.out.println("refresh_token = " + refresh_token);
            System.out.println("access_token = " + access_token);

            br.close();
            bw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return access_token;
    }

    public Member getUserInfo(String token) {
        Member userInfo = new Member();

        String reqURL = "https://openapi.naver.com/v1/nid/me";

        try{
            URL url = new URL(reqURL);  // 1. url객체 만들기
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            // 2. url에서 url connection 만들기
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Authorization", "Bearer " + token);

            // 키값, 속성 적용
            int responseCode = conn.getResponseCode();  // 서버에서 보낸 http 상태 코드 반환
            System.out.println("responseCode 확인 : " + responseCode);
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

            // 버퍼를 사용하여 읽은 것
            String line = "";
            String result = "";
            while((line = br.readLine()) != null){
                result += line;
            }
            System.out.println("respone body 확인 : " + result);

            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);
            JsonObject response = element.getAsJsonObject().get("response").getAsJsonObject();
//            System.out.println("response = " + response);

            String nickname = response.get("nickname").getAsString();
            String email = response.get("email").getAsString();

            userInfo.setMEmail(email);
            userInfo.setMNick(nickname);
            userInfo.setMJelly(0); //초기값은 널로 일단 줌

            // 유저 이메일로 유저 객체 검색해보고 등록안된 회원이라면 회원가입 처리
            Member findUser = memberRepository.findBymEmail(userInfo.getMEmail());
            if(findUser == null){
                System.out.println("네이버로 처음 로그인하였습니다.");
                memberRepository.save(userInfo);
            }

        } catch(Exception e){
            e.printStackTrace();
        }

        return userInfo;
    }

}
