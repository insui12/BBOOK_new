import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // 예시 검색어 기준 자동 이동
  useEffect(() => {
    if (query.length >= 1) {
      const lowerQuery = query.toLowerCase();
      if (lowerQuery.includes('핵심') || lowerQuery.includes('미적분') || lowerQuery.includes('양근석')) {
        // 실제 BookDetailPage 경로로 이동
        navigate('/book/2');  // 예: id가 2인 책으로 이동
      }
    }
  }, [query, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '120px' }}>
      <img src="/images/logo.png" alt="logo" style={{ height: '60px', marginBottom: '20px' }} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="책 제목을 입력하세요"
        style={{
          padding: '12px 20px',
          fontSize: '16px',
          width: '400px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
        }}
      />
    </div>
  );
}
