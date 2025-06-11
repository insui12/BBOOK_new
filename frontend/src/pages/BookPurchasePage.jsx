import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import UserMenu from '../components/UserMenu'; // ✅ 추가

const dummyBook = {
  id: '1',
  title: '핵심 미분적분학',
  image: '/images/핵심미적분학.jpg',
  price: 40000,
  rentPrice: 900,
};

function BookPurchasePage() {
  const { id } = useParams();
  const [rentalPeriod, setRentalPeriod] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // ✅ 로그인 상태 임시 처리
  const book = dummyBook;

  const calculateTotal = () => {
    if (!rentalPeriod) return '—';
    if (rentalPeriod === 120) return '6,900원';
    const weeks = rentalPeriod / 7;
    const total = book.rentPrice * weeks;
    return `${total.toLocaleString()}원`;
  };

  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <UserMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div style={pageWrapper}>
        <div style={contentWrapper}>
          {/* 책 이미지 */}
          <div>
            <img src={book.image} alt={book.title} style={bookImage} />
          </div>

          {/* 도서 정보 */}
          <div style={infoBox}>
            <div style={infoContentWrapper}>
              <h2 style={titleStyle}>{book.title}</h2>
              <div style={{ fontSize: '14px', marginBottom: '6px' }}>
                James Stewart, Daniel Clegg, Saleem Watson
              </div>
              <div style={{ marginBottom: '12px', color: '#007BFF', fontWeight: 'bold' }}>
                미적분학1 (이윤진 교수)
              </div>
              <div style={{ marginBottom: '6px' }}>
                <strong>정가</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                {book.price.toLocaleString()}원
              </div>
              <div style={{ marginBottom: '20px', color: 'red', fontWeight: 'bold' }}>
                <strong>7일 기준 대여료</strong>&nbsp;&nbsp;
                {book.rentPrice.toLocaleString()}원
              </div>

              <div style={{ marginBottom: '20px' }}>
                <select
                  id="rentalPeriod"
                  value={rentalPeriod}
                  onChange={(e) => setRentalPeriod(Number(e.target.value))}
                  style={rentalSelectStyle}
                >
                  <option value="">대여일수를 선택해주세요.</option>
                  <option value={7}>7일</option>
                  <option value={14}>14일 (+900원)</option>
                  <option value={21}>21일 (+1,800원)</option>
                  <option value={28}>28일 (+2,700원)</option>
                  <option value={120}>120일 (1학기) (+6,000원)</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px', fontSize: '16px' }}>
                <strong>결제 금액:</strong>&nbsp;
                <span>{calculateTotal()}</span>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <button style={btnBlue}>장바구니 담기</button>
                <button style={btnGray}>바로 대여하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 스타일 정의 (이전과 동일)
const pageWrapper = { maxWidth: '1000px', margin: '0 auto' };
const contentWrapper = { display: 'flex', alignItems: 'flex-start', gap: '24px', padding: '40px 0' };
const bookImage = {
  width: '300px', height: '360px', objectFit: 'cover',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '6px',
};
const infoBox = {
  width: '300px', height: '360px',
  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
};
const infoContentWrapper = {
  display: 'flex', flexDirection: 'column',
  height: '100%', justifyContent: 'flex-start',
};
const titleStyle = { fontWeight: 'bold', marginTop: '0px' };
const rentalSelectStyle = {
  width: '100%', padding: '10px', fontSize: '16px',
  borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box',
};
const btnBlue = {
  padding: '10px 20px', backgroundColor: '#468ef9', color: '#fff',
  border: 'none', borderRadius: '6px', cursor: 'pointer', flex: 1,
};
const btnGray = {
  padding: '10px 20px', backgroundColor: '#f5f5f5', color: '#000',
  border: '1px solid #ccc', borderRadius: '6px', cursor: 'pointer', flex: 1,
};

export default BookPurchasePage;
