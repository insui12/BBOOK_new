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
          maxWidth: '907px',
          margin: '40px auto',
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        }}
      >
        <h2 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#222' }}>
          자주 묻는 질문
        </h2>

        <div style={{ border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: index !== faqs.length - 1 ? '1px solid #eee' : 'none',
                backgroundColor: '#fcfcfc',
                padding: '16px 20px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onClick={() => handleToggle(index)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ fontSize: '16px', color: '#222' }}>
                  {index + 1}. {faq.question}
                </strong>
                <span style={{ fontSize: '20px', color: '#999' }}>
                  {openIndexes.includes(index) ? '▲' : '▼'}
                </span>
              </div>
              {openIndexes.includes(index) && (
                <div
                  style={{
                    backgroundColor: '#fff',
                    padding: '16px 12px',
                    marginTop: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    color: '#333',
                    fontSize: '15px',
                    lineHeight: '1.6',
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '60px' }}>
          <div
            onClick={handleInquiryClick}
            style={{
              width: '45%',
              border: '1px solid #ccc',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              cursor: 'pointer',
              backgroundColor: '#fff',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>📩</div>
            <strong style={{ color: '#007bff', fontSize: '16px' }}>1:1 문의하기</strong>
            <p style={{ fontSize: '13px', color: '#666', marginTop: '8px' }}>
              서비스 이용 중 궁금한 점이나 도움이 필요하신가요?<br />
              1:1 문의를 통해 직접 상담해드립니다.
            </p>
          </div>

          <div
            onClick={handleRefundClick}
            style={{
              width: '45%',
              border: '1px solid #ccc',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              cursor: 'pointer',
              backgroundColor: '#fff',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>↩️</div>
            <strong style={{ color: '#007bff', fontSize: '16px' }}>취소/반품신청</strong>
            <p style={{ fontSize: '13px', color: '#666', marginTop: '8px' }}>
              주문하신 상품의 반품 취소 신청<br />및 진행 상황을 확인하실 수 있습니다.
            </p>
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