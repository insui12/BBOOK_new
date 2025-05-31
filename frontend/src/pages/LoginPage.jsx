import React, { useState } from 'react';
import { FaRegCircle, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStayLoggedIn, setIsStayLoggedIn] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // ✅ hover 상태

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) return;

    setIsLoading(true);

    // 🔧 임시 로그인 처리 (API 없이)
    setTimeout(() => {
      setIsLoggedIn(true);         // 로그인 상태 설정
      setIsLoading(false);
      navigate('/');               // 메인 페이지로 이동
    }, 800);
  };

  return (
    <div style={wrapperStyle}>
      <h1 style={logoStyle} onClick={() => navigate('/')}>BBOOK</h1>

      <form style={loginBoxStyle} onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div style={inputWrapper}>
          <input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputFullStyle}
          />
        </div>

        <div style={inputWrapper}>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputFullStyle}
          />
        </div>

        <div
          style={stayLoggedInStyle}
          onClick={() => setIsStayLoggedIn(!isStayLoggedIn)}
        >
          {isStayLoggedIn
            ? <FaCheckCircle style={{ marginRight: '6px', color: '0084FF' }} />
            : <FaRegCircle style={{ marginRight: '6px', color: '#888' }} />}
          로그인 상태 유지
        </div>

        {isLoading ? (
          <div style={loadingStyle}>로그인 중...</div>
        ) : (
          <button
            type="submit"
            style={{
              ...loginButtonStyle,
              backgroundColor: isHovering ? '#007bff' : '#8cbcf9' // ✅ hover 효과
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            로그인
          </button>
        )}

        {message && <div style={feedbackStyle}>{message}</div>}

        <div style={linkStyle}>
          아이디 찾기 &nbsp;|&nbsp; 비밀번호 찾기 &nbsp;|&nbsp;
          <span style={{ cursor: 'pointer' }} onClick={() => navigate('/join')}>회원가입</span>
        </div>

        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <img
            src="/kakaotalk.png"
            alt="카카오 로그인"
            style={{ height: '30px', cursor: 'pointer' }}
            onClick={() => alert('카카오 로그인 기능은 아직 구현되지 않았습니다.')}
          />
        </div>
      </form>
    </div>
  );
}

// ✅ 스타일 정의
const wrapperStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '90px',
  backgroundColor: '#fff',
  fontFamily: "'Noto Sans KR', sans-serif"
};

const logoStyle = {
  color: '#007bff',
  fontSize: '50px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginBottom: '10px'
};

const loginBoxStyle = {
  border: '1px solid #d1d5db',
  borderRadius: '10px',
  padding: '30px 40px',
  marginTop: '30px',
  width: '90%',
  maxWidth: '320px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  textAlign: 'left'
};

const inputWrapper = {
  position: 'relative',
  marginBottom: '15px'
};

const inputFullStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#e5e7eb',
  fontSize: '14px',
  boxSizing: 'border-box'
};

const stayLoggedInStyle = {
  fontSize: '14px',
  color: '#555',
  marginBottom: '15px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer'
};

const loginButtonStyle = {
  width: '100%',
  padding: '12px',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '5px',
  fontSize: '15px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease'
};

const feedbackStyle = {
  marginTop: '10px',
  textAlign: 'center',
  fontSize: '14px',
  color: '#e11d48'
};

const loadingStyle = {
  textAlign: 'center',
  fontSize: '14px',
  color: '#555',
  padding: '12px 0'
};

const linkStyle = {
  textAlign: 'center',
  marginTop: '15px',
  fontSize: '13px',
  color: '#555'
};

export default LoginPage;
