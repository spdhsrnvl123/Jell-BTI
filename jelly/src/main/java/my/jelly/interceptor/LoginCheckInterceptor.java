package my.jelly.interceptor;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Slf4j
public class LoginCheckInterceptor implements HandlerInterceptor {

    private final ObjectMapper objectMapper = new ObjectMapper();
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {


        String requestURI = request.getRequestURI();

        log.info("로그인 인터셉터 실행 http method ={}",request.getMethod());

        HttpSession session = request.getSession(false);
        if (!request.getMethod().equals("GET")) {
            if (session == null || session.getAttribute("userInfo") == null) {
                log.info("비로그인 사용자 접근 시도 requestURL = {}", requestURI);


//                response.sendRedirect("http://localhost:4000/home/modal?redirectURL="+requestURI);

                Map<String, Object> errorResult = new HashMap<>();

                errorResult.put("login", false);
                errorResult.put("status", HttpStatus.UNAUTHORIZED.toString());
                errorResult.put("requestURL", requestURI);

                String result = objectMapper.writeValueAsString(errorResult);

                response.setStatus(HttpStatus.UNAUTHORIZED.value());
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(result);

                return false;
            }
        }
        log.info("로그인 사용자");
        return true;
    }
}
