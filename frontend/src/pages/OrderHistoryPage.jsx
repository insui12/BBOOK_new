import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderHistoryPage() {
  const navigate = useNavigate();
  const dummyOrders = [1, 2, 3];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '30px', fontFamily: 'sans-serif' }}>

      {/* 🔹 BBOOK + 검색창 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {/* 🔹 BBOOK 클릭 시 메인페이지로 이동 */}
        <h1
          onClick={() => navigate('/')}
          style={{
            color: '#007bff',
            fontSize: '40px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            position: 'relative',
            top: '-8px',
            cursor: 'pointer'  // 포인터로 바꾸기
          }}
        >
          BBOOK
        </h1>

        {/* 🔍 검색창 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#cce6ff',
          borderRadius: '30px',
          padding: '10px 20px',
          flex: 1,
        }}>
          <input
            type="text"
            placeholder="책 제목/ 과목명/ 학과 검색"
            style={{
              flex: 1,
              border: 'none',
              backgroundColor: 'transparent',
              outline: 'none',
              fontSize: '16px',
              color: '#333',
              fontWeight: 'bold',
            }}
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#007bff" viewBox="0 0 24 24">
            <path d="M10 2a8 8 0 015.292 13.708l5 5a1 1 0 01-1.414 1.414l-5-5A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
          </svg>
        </div>
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>구매내역</h2>

      {/* 🔹 더미 주문 목록 */}
      {dummyOrders.map((_, idx) => (
        <div key={idx} style={cardStyle}>
          <div style={{ fontWeight: 'bold', marginBottom: '15px' }}>거래 완료</div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              <img
                src="/book1.jpg"
                alt="책 표지"
                style={{
                  width: '60px',
                  height: '80px',
                  objectFit: 'cover',
                  marginRight: '20px',
                  borderRadius: '4px'
                }}
              />
              <div style={{ marginTop: '-15px', marginLeft: '5px' }}>
                <p>주문일시 : 2025-05-01</p>
                <p>책 이름: 핵심 미적분학</p>
                <p>총 1권, 15,200원</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                style={actionButtonStyle}
                onClick={() => navigate('/refund')}
              >
                취소
              </button>
              <button
                style={actionButtonStyle}
                onClick={() => navigate(`/detail/${idx + 1}`)}
              >
                상세 조회
              </button>
              <button style={actionButtonStyle}>거래증명서 보기</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// 📦 카드 스타일
const cardStyle = {
  backgroundColor: '#f1f1f1',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  marginBottom: '24px',
};

// 🔘 버튼 스타일
const actionButtonStyle = {
  padding: '6px 12px',
  border: 'none',
  backgroundColor: '#e0e0e0',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default OrderHistoryPage;
