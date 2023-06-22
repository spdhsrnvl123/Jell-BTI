import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const useAuth = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }else if(token){
      navigate('/mypage')
    }
  }, [token, navigate]);
  
  return token;
};

export default useAuth;