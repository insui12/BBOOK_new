import React, { useState } from 'react';
import { FaRegCircle, FaCheckCircle } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom'; // ✅ 추가된 부분

function LoginPage({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStayLoggedIn, setIsStayLoggedIn] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); // ✅ 현재 경로 정보
  const from = location.state?.from || '/'; // ✅ 이전 경로가 없으면 기본값은 메인

  const handleLogin = async () => {
    if (!username || !password) return;

    setIsLoading(true);

    // 🔧 임시 로그인 처리 (API 없이)
    setTimeout(() => {
      setIsLoggedIn(true); // 로그인 상태 true
      setIsLoading(false);
      navigate(from);      // ✅ 로그인 후 돌아갈 경로로 이동
    }, 800);
  };

  return (
    <div style={wrapperStyle}>
      <img
        src="/images/logo.png"
        alt="BBOOK 로고"
        onClick={() => navigate('/')}
        style={{ height: '54px', marginBottom: '5px', marginTop: '80px', cursor: 'pointer' }}
      />


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
              backgroundColor: isHovering ? '#0094ff' : '#8cbcf9'
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
            src="/images/kakaotalk.png"
            alt="카카오 로그인"
            style={{ height: '35px', marginBottom: '-15px', cursor: 'pointer' }}
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
  marginBottom: '15px',
  marginTop: '15px'
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