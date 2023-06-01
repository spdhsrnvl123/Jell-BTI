package my.jelly.interceptor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Slf4j
public class LoginCheckInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        String requestURI = request.getRequestURI();

        log.info("로그인 인터셉터 실행, requestURI ={}", requestURI);

        HttpSession session = request.getSession();

        log.info("method ={}", request.getMethod());

        if (!request.getMethod().equals("GET")) {
            if (session == null || session.getAttribute("loginMember") == null) {
                log.info("비로그인 사용자");
                response.sendRedirect("http://localhost:4000/login?redirectURL="+requestURI);

                return false;
            }
        }

        return true;
    }
}
