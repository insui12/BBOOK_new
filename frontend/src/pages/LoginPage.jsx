import React, { useState } from 'react';
import { FaRegCircle, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ ${data.message}`);
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage('❌ 서버에 연결할 수 없습니다.');
    }
  };

  return (
    <div style={wrapperStyle}>
      
      {/* BBOOK 로고 (클릭 시 메인으로 이동) */}
      <h1 style={logoStyle} onClick={() => navigate('/')}>
        BBOOK
      </h1>

      {/* 로그인 박스 */}
      <div style={loginBoxStyle}>
        
        {/* 아이디 입력 */}
        <div style={inputWrapper}>
          <input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <FaTimes style={clearIconStyle} />
        </div>

        {/* 비밀번호 입력 */}
        <div style={inputWrapper}>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <FaTimes style={clearIconStyle} />
        </div>

        {/* 로그인 상태 유지 */}
        <div style={stayLoggedInStyle}>
          <FaRegCircle style={{ marginRight: '6px' }} />
          로그인 상태 유지
        </div>

        {/* 로그인 버튼 */}
        <button onClick={handleLogin} style={loginButtonStyle}>
          로그인
        </button>

        {/* 로그인 결과 메시지 */}
        {message && <div style={{ marginTop: '10px', textAlign: 'center', color: '#333' }}>{message}</div>}

        {/* 하단 링크 */}
        <div style={linkStyle}>
          비밀번호 찾기 &nbsp;|&nbsp; 아이디 찾기 &nbsp;|&nbsp; <span style={{ cursor: 'pointer' }} onClick={() => navigate('/join')}>회원가입</span>
        </div>

        {/* ✅ 카카오 로그인 이미지 */}
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <img
            src="/kakaotalk.png"
            alt="카카오 로그인"
            style={{ height: '30px', cursor: 'pointer' }}
            onClick={() => alert('카카오 로그인 기능은 아직 구현되지 않았습니다.')}
          />
        </div>

      </div>
    </div>
  );
}

// 💅 스타일 모음
const wrapperStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '80px',
  backgroundColor: '#fff',
  fontFamily: "'Noto Sans KR', sans-serif"
};

const logoStyle = {
  color: '#8cbcf9',
  fontSize: '36px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const loginBoxStyle = {
  border: '1px solid #d1d5db',
  borderRadius: '10px',
  padding: '30px 40px',
  marginTop: '40px',
  width: '320px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  textAlign: 'left'
};

const inputWrapper = {
  position: 'relative',
  marginBottom: '15px'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#e5e7eb',
  fontSize: '14px'
};

const clearIconStyle = {
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#888',
  fontSize: '12px',
  cursor: 'pointer'
};

const stayLoggedInStyle = {
  fontSize: '14px',
  color: '#555',
  marginBottom: '15px',
  display: 'flex',
  alignItems: 'center'
};

const loginButtonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#8cbcf9',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '5px',
  fontSize: '15px',
  cursor: 'pointer'
};

const linkStyle = {
  textAlign: 'center',
  marginTop: '15px',
  fontSize: '13px',
  color: '#555'
};

export default LoginPage;
