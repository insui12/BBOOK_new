// src/components/UserMenu.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function UserMenu({ isLoggedIn, setIsLoggedIn, redirectOnLogout = true }) {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 확인용

  const handleLogout = () => {
    setIsLoggedIn(false);
    if (redirectOnLogout && location.pathname !== '/') {
      navigate('/'); // 로그아웃 후 메인으로 이동 (옵션)
    }
  };

  return (
    <div style={styles.topRight}>
      {isLoggedIn ? (
        <>
          <span style={styles.topButton} onClick={handleLogout}>로그아웃</span>
          <span style={styles.topButton} onClick={() => navigate('/cart')}>장바구니</span>
          <span style={styles.topButton} onClick={() => navigate('/orders')}>주문내역</span>
          <span style={styles.topButton} onClick={() => navigate('/support')}>고객센터</span>
        </>
      ) : (
        <>
          <span
            style={styles.topButton}
            onClick={() => navigate('/login', { state: { from: location.pathname } })} // ✅ 현재 위치 전달
          >
            로그인
          </span>
          <span style={styles.topButton} onClick={() => navigate('/join')}>회원가입</span>
          <span style={styles.topButton} onClick={() => navigate('/support')}>고객센터</span>
        </>
      )}
    </div>
  );
}

const styles = {
  topRight: {
    position: 'absolute',
    top: '20px',
    right: '30px',
    display: 'flex',
    gap: '20px',
    fontSize: '14px',
    color: '#333',
  },
  topButton: {
    cursor: 'pointer',
    fontWeight: '500',
  },
};
