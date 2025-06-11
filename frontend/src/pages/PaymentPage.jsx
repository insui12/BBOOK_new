// src/pages/PaymentPage.jsx
import React from 'react';
import Header from '../components/Header';

export default function PaymentPage() {
  const book = {
    id: '1',
    title: '핵심 미적분학 - 제9판',
    author: '최서진',
    publisher: '북북출판',
    price: 42000,
    image: '/book1.jpg',
  };

  if (!book) return <div style={{ padding: '40px' }}>책 정보를 불러올 수 없습니다.</div>;

  return (
    <div>
      <Header />
      <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>&lt; 결제(n)</h2>

        {/* 진행 표시 */}
        <div style={{ display: 'flex', borderBottom: '2px solid #ccc', marginBottom: '30px' }}>
          <div style={{ flex: 1, textAlign: 'center', padding: '12px', backgroundColor: '#f0f0f0' }}>주문 결제</div>
          <div style={{ flex: 1, textAlign: 'center', padding: '12px', backgroundColor: '#e0e0e0' }}>주문 완료</div>
        </div>

        {/* 상품 정보 */}
        <div style={{ display: 'flex', gap: '20px' }}>
          {/* 왼쪽 */}
          <div style={{ flex: 2 }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', marginBottom: '20px', border: '1px solid #ccc' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>교재명</h3>
              <div style={{ display: 'flex', gap: '20px' }}>
                <img src={book.image} alt={book.title} style={{ width: '120px', height: '160px', objectFit: 'cover', borderRadius: '8px' }} />
                <div>
                  <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>『국내도서』 {book.title}</p>
                  <p style={{ fontSize: '18px', color: '#333' }}>{book.price.toLocaleString()}원</p>
                </div>
              </div>
            </div>

            {/* 결제 수단 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', marginBottom: '20px', border: '1px solid #ccc' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>결제수단</h3>
              <ul>
                <li>무통장입금(가상계좌)</li>
                <li>간편결제(카카오페이, 네이버페이, 토스)</li>
                <li>신용/체크카드</li>
              </ul>
            </div>

            {/* 거래 장소 */}
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #ccc' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>거래 장소</h3>
              <img src="/map.png" alt="지도" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
              <div style={{ marginTop: '12px' }}>
                <strong>상세주소:</strong> 1공학관 1층
              </div>
            </div>
          </div>

          {/* 오른쪽 요약 */}
          <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #ccc' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>최종 결제 금액</h3>
            <div style={summaryLine}>
              <span>총 상품 가격</span>
              <span>{book.price.toLocaleString()}원</span>
            </div>
            <div style={summaryTotal}>
              <span>총 결제 금액</span>
              <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{book.price.toLocaleString()}원</span>
            </div>
            <button style={{ marginTop: '20px', width: '100%', padding: '12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
              주문하기 (1)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const summaryLine = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px'
};

const summaryTotal = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
  paddingTop: '10px',
  borderTop: '1px solid #ccc'
};