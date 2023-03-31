package my.jelly.service;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import my.jelly.entity.Member;
import my.jelly.repository.MemberRepository;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;

import java.net.URL;

@Service
public class KakaoService {
    @Autowired
    MemberRepository memberRepository;
    public String getToken(String code) throws IOException {

        String access_token = "";
        String refresh_token = "";
        // 인가코드로 토큰받기
        String host = "https://kauth.kakao.com/oauth/token";

        try {
            URL url = new URL(host);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();

            urlConnection.setRequestMethod("POST");
            urlConnection.setDoOutput(true); // 데이터 기록 알려주기

            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(urlConnection.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=aae56b5a75ed41619c033ab689aea475");
            sb.append("&redirect_uri=http://localhost:4000/oauth/login/kakao"); //프 서버로 바꾸기
            sb.append("&code=" + code);

            bw.write(sb.toString());
            bw.flush();

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

    // access_token 값 읽어오고 DB 저장
    public Member getUserInfo(String access_token){
        Member userInfo = new Member();
        //Map<String, Object> userInfo = new HashMap<>();

        String reqURL = "https://kapi.kakao.com/v2/user/me";

        try{
            URL url = new URL(reqURL);  // 1. url객체 만들기
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            // 2. url에서 url connection 만들기
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Authorization", "Bearer " + access_token);

            // 키값, 속성 적용
            int responseCode = conn.getResponseCode();  // 서버에서 보낸 http 상태 코드 반환
//            System.out.println("responseCode 확인 : " + responseCode);
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

            // 버퍼를 사용하여 읽은 것
            String line = "";
            String result = "";
            while((line = br.readLine()) != null){
                result += line;
            }
//            System.out.println("respone body 확인 : " + result);

            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);
            JsonObject properties = element.getAsJsonObject().get("properties").getAsJsonObject();
            JsonObject kakao_account = element.getAsJsonObject().get("kakao_account").getAsJsonObject();

            String nickname = properties.getAsJsonObject().get("nickname").getAsString();
            String email = kakao_account.getAsJsonObject().get("email").getAsString();

            userInfo.setMEmail(email);
            userInfo.setMNick(nickname);

            // 회원가입 안되있으면 회원가입 처리
            Member findUser = memberRepository.findBymEmail(userInfo.getMEmail());
            if(findUser == null){
                memberRepository.save(userInfo);
            }

        } catch(Exception e){
            e.printStackTrace();
        }

        return userInfo;
    }


//
//    public String getAgreementInfo(String access_token)
//    {
//        String result = "";
//        String host = "https://kapi.kakao.com/v2/user/scopes";
//        try{
//            URL url = new URL(host);
//            HttpURLConnection urlConnection = (HttpURLConnection)url.openConnection();
//            urlConnection.setRequestMethod("GET");
//            urlConnection.setRequestProperty("Authorization", "Bearer "+access_token);
//
//            BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
//            String line = "";
//            while((line=br.readLine())!=null)
//            {
//                result+=line;
//            }
//
//            int responseCode = urlConnection.getResponseCode();
//            System.out.println("responseCode = " + responseCode);
//
//            // result is json format
//            br.close();
//
//        } catch (MalformedURLException e) {
//            e.printStackTrace();
//        } catch (ProtocolException e) {
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        return result;
//    }
//
//
//
//    public Map<String, Object> getUserInfo(String access_token) throws IOException {
//        String host = "https://kapi.kakao.com/v2/user/me";
//        Map<String, Object> result = new HashMap<>();
//        try {
//            URL url = new URL(host);
//
//            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
//            urlConnection.setRequestProperty("Authorization", "Bearer " + access_token);
//            urlConnection.setRequestMethod("GET");
//
//            int responseCode = urlConnection.getResponseCode();
//            System.out.println("responseCode = " + responseCode);
//
//
//            BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
//            String line = "";
//            String res = "";
//            while((line=br.readLine())!=null)
//            {
//                res+=line;
//            }
//
//            System.out.println("res = " + res);
//
//
//            JSONParser parser = new JSONParser();
//            JSONObject obj = (JSONObject) parser.parse(res);
//            JSONObject kakao_account = (JSONObject) obj.get("kakao_account");
//            JSONObject properties = (JSONObject) obj.get("properties");
//
//
//            //String id = obj.get("id").toString();
//            String email = kakao_account.get("email").toString();
//            String nickname = properties.get("nickname").toString();
//            String age_range = kakao_account.get("age_range").toString();
//
//            //result.put("id", id);
//            result.put("email", email);
//            result.put("nickname", nickname);
//            result.put("age_range", age_range);
//
//            br.close();
//
//        } catch (IOException | ParseException e) {
//            e.printStackTrace();
//        }
//
//        return result;
//    }

}
