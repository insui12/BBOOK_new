// src/components/Header.jsx
import React from 'react';

const headerWrapper = {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  marginBottom: '30px',
  width: '1000px',
  marginLeft: 'auto',
  marginRight: 'auto',
  gap: '40px'
};

const logoStyle = {
  fontSize: '60px',
  fontWeight: 'bold',
  color: '#007bff',
  marginTop: '-8px'
};

const searchWrapper = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#cce6ff',
  borderRadius: '40px',
  padding: '6px 20px',
  flex: 1,
  maxWidth: '700px',
  height: '40px'
};

const searchInput = {
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  fontSize: '16px',
  flex: 1,
  color: '#333'
};

const searchIcon = {
  fontSize: '18px',
  color: '#007bff',
  marginLeft: '12px'
};

export default function Header() {
  return (
    <div style={headerWrapper}>
      <div style={logoStyle}>BBOOK</div>
      <div style={searchWrapper}>
        <input
          type="text"
          placeholder="책 제목 / 과목명 / 학과 검색"
          style={searchInput}
        />
        <span style={searchIcon}>🔍</span>
      </div>
    </div>
  );
}