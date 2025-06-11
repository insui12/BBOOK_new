// src/pages/SupportPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';

const faqs = [
  { question: '반납은 어디서 하나요?', answer: '교내 북스테이션에 반납하시면 됩니다.' },
  { question: '대여 연장은 어떻게 하나요?', answer: '주문내역에서 대여 연장 버튼을 눌러 연장 신청할 수 있습니다.' },
  { question: '파손 시 보상은 어떻게 되나요?', answer: '책 상태에 따라 일부 금액이 차감될 수 있습니다.' },
  { question: '대여기간은 얼마나 되나요?', answer: '기본 대여 기간은 7일이며, 연장 가능합니다.' },
  { question: '책이 마음에 안 들면 환불이 되나요?', answer: '사용 전 상태라면 환불이 가능합니다.' },
];

export default function SupportPage() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const navigate = useNavigate();

  const handleToggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleInquiryClick = () => {
    navigate('/inquiry');
  };

  const handleRefundClick = () => {
    navigate('/refund', { state: { from: '/support' } });
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff', minHeight: '100vh' }}>
      <Header />
      <div
        style={{
          maxWidth: '920px',
          margin: '40px auto',
          backgroundColor: '#d6f0ff',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        }}
      >
        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '32px', color: '#222' }}>📌 자주 묻는 질문</h2>

        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: '1px solid #ccc',
                padding: '16px 0',
                cursor: 'pointer',
              }}
              onClick={() => handleToggle(index)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontSize: '16px', color: '#333' }}>{faq.question}</strong>
                <span style={{ fontSize: '20px', color: '#999' }}>{openIndexes.includes(index) ? '▲' : '▼'}</span>
              </div>
              {openIndexes.includes(index) && (
  <div
    style={{
      backgroundColor: '#f8f9fa',
      padding: '16px',
      marginTop: '10px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    }}
  >
    <p style={{ margin: 0, color: '#333', lineHeight: '1.6' }}>{faq.answer}</p>
  </div>
)}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '40px' }}>
          <button
            onClick={handleInquiryClick}
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '14px 28px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            📩 1:1 문의하기
          </button>
        </div>

        <div style={{ borderTop: '1px solid #ccc', paddingTop: '30px', marginTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: '#222' }}>📦 취소/반품 신청</h2>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <button
              onClick={handleRefundClick}
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '14px 28px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
              }}
            >
              📝 환불 신청하기
            </button>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: '14px', color: '#555', marginTop: '40px', marginBottom: '40px' }}>
        <p>📞 고객센터 1234-5678</p>
        <p>운영시간: 평일 10:00 ~ 17:00 (점심시간 12:00 ~ 13:00)</p>
      </div>
    </div>
  );
}
