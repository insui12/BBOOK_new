// src/pages/InquiryPage.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function InquiryPage() {
  const navigate = useNavigate();
  const [type, setType] = useState('');
  const [content, setContent] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type || !content.trim() || !email.trim()) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    alert('문의가 성공적으로 제출되었습니다.');
    navigate('/support');
  };

  const containerStyle = {
    fontFamily: 'sans-serif',
    backgroundColor: '#fff',
    minHeight: '100vh',
  };

  const wrapperStyle = {
    maxWidth: '920px',
    margin: '40px auto',
    backgroundColor: '#f0f8ff', // 하늘색
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={wrapperStyle}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '32px' }}>📨 1:1 문의하기</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>문의 유형</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              style={inputStyle}
            >
              <option value="">선택해주세요</option>
              <option value="대여 관련">대여 관련</option>
              <option value="환불 관련">환불 관련</option>
              <option value="책 상태">책 상태</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>문의 내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              placeholder="문의하실 내용을 입력해주세요."
              style={{ ...inputStyle, resize: 'none' }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>답변 받을 이메일</label>
            <input
              type="email"
              value={email}
              placeholder="your@email.com"
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              type="button"
              onClick={() => navigate('/support')}
              style={{
                padding: '12px 24px',
                backgroundColor: '#f0f0f0',
                color: '#333',
                border: '1px solid #ccc',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              취소
            </button>
            <button
              type="submit"
              style={{
                padding: '12px 24px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}