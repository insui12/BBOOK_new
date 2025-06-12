import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import UserMenu from '../components/UserMenu'; // ✅ 추가

const bookData = [
  {
    id: '1',
    title: '핵심 미적분학',
    author: 'James Stewart, Daniel Clegg, Saleem Watson',
    publisher: '경문사(출판)',
    publishDate: '2021-03-02',
    price: 40000,
    rentPrice: 4900,
    image: '/images/핵심미적분학.jpg',
    subject: '미적분학1',
    professor: '이윤진'
  }
];

export default function BookDetailMainPage({ isLoggedIn, setIsLoggedIn }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = bookData.find(book => book.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!book) return <div style={{ padding: '40px' }}>책 정보를 찾을 수 없습니다.</div>;

  const totalRentPrice = book.rentPrice * quantity;

  const renderStars = (score) => {
    const full = Math.floor(score);
    const half = score % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return (
      <span>
        {'★'.repeat(full)}
        {half === 1 && <span style={{ position: 'relative', display: 'inline-block', width: '1em' }}>
          <span style={{ position: 'absolute', overflow: 'hidden', width: '50%' }}>★</span>
          <span style={{ color: '#ccc' }}>★</span>
        </span>}
        {'☆'.repeat(empty)}
      </span>
    );
  };

  return (
    <div>
      <Header />
      <UserMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> {/* ✅ 추가 */}

      <div style={{ maxWidth: '1000px', margin: '0 auto', marginTop: '-45px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>

        <h2 style={{ fontSize: '37px', fontWeight: '700' }}>{book.title} <span style={{ fontSize: '14px', color: '#007bff' }}>[제9판]</span></h2>
        <p style={{
          fontSize: '13px',
          color: '#3366cc',
          marginTop: '-20px',
          marginBottom: '6px'
        }}>
          {book.author} (지은이), {book.publisher} {book.publishDate}
        </p>

        <hr style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#bbb',
          border: 'none',
          margin: '0 0 20px 0'
        }} />

        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
          <img src={book.image} alt={book.title} style={{ width: '390px', height: '520px', borderRadius: '8px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '520px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '440px', fontSize: '25px', marginLeft: '40px' }}>
              <div><strong>정가</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{book.price.toLocaleString()}원</div>
              <div><strong>대여료</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'red' }}>{totalRentPrice.toLocaleString()}원</span></div>
              <div><strong>강의명</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{book.subject}</div>
              <div><strong>교수명</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{book.professor}</div>
              <div><strong>배송료</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ display: 'inline-block', marginLeft: '-20px' }}>무료</span></div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <strong>수량</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  style={{ width: '40px', marginLeft: '25px', fontSize: '20px', marginTop: '5px' }}
                />
              </div>
              <div><strong>예상 수령일</strong>&nbsp;&nbsp;&nbsp;6월 18일</div>
              <div><strong>별점</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{renderStars(4.5)}</div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', marginLeft: '40px' }}>
              <button
                style={buttonStyle}
                onClick={() => alert('장바구니에 추가되었습니다.')}
              >
                장바구니 담기
              </button>
              <button
                style={{ ...buttonStyle, backgroundColor: '#007bff', color: 'white' }}
                onClick={() => navigate(`/PaymentPage/${book.id}`)}
              >
                바로 대여하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '14px 22px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  backgroundColor: '#f0f0f0',
  fontSize: '14px',
  cursor: 'pointer'
};
