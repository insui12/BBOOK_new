// src/pages/SearchPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // 자동 이동 조건: 검색어에 특정 단어가 포함되면 상세페이지로 이동
  useEffect(() => {
    const lower = query.toLowerCase();
    if (lower.includes('핵심') || lower.includes('미적분') || lower.includes('양근석')) {
      navigate('/book/2'); // 도서 ID 2번 상세페이지로 이동
    }
    // 필요시 조건 더 추가 가능
  }, [query, navigate]);

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        minHeight: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '120px',
      }}
    >
      {/* 로고 */}
      <img
        src="/images/logo.png"
        alt="BBOOK 로고"
        style={{ height: '64px', marginBottom: '40px', cursor: 'pointer' }}
        onClick={() => navigate('/')}
      />

      {/* 검색창 */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="책 제목 / 수업명 / 교수명"
        style={{
          padding: '16px 20px',
          fontSize: '18px',
          width: '480px',
          borderRadius: '24px',
          border: '1px solid #ccc',
          backgroundColor: '#f4f7fe',
          boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
        }}
      />

      {/* 연관 단어 표시 */}
      {query && (
        <div
          style={{
            marginTop: '20px',
            color: '#444',
            fontSize: '15px',
            background: '#e9f2ff',
            padding: '10px 16px',
            borderRadius: '12px',
          }}
        >
          연관 검색어 결과: 핵심 미적분학 제9판 | 미적분학2 | 양근석
        </div>
      )}
    </div>
  );
}
