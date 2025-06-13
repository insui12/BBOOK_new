import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import UserMenu from '../components/UserMenu';

const fakeBooks = [
  { id: '3', title: '융합이산수학', image: '/images/이산수학.png', dueDate: '2025-06-10' },
  { id: '2', title: '핵심미적분학', image: '/images/핵심미적분학.png', dueDate: '2025-06-07' },
];

export default function ExtendRentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [extendDays, setExtendDays] = useState('7일');

  useEffect(() => {
    const found = fakeBooks.find(b => b.id === id);
    setBook(found);
  }, [id]);

  const handleExtend = () => {
    const days = parseInt(extendDays.replace('일', ''), 10); // 숫자만 추출
    const price = days * 5000;

    // 결제 페이지로 이동하며 연장 정보 전달
    navigate("/PaymentPage/extend", {
      state: {
        type: "extend",
        title: book.title,
        days,
        price,
      },
    });
  };

  if (!book) return <div style={{ padding: '40px' }}>책 정보를 불러오는 중...</div>;

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff', minHeight: '100vh' }}>
      <Header />
      <UserMenu isLoggedIn={true} setIsLoggedIn={() => {}} />

      <div
        style={{
          maxWidth: '985px',
          margin: '40px auto',
          padding: '40px',
          background: '#f8f9fa',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          boxSizing: 'border-box',
          transform: 'translateX(-5px)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* 제목 */}
        <h2 style={{
          fontSize: '25px',
          fontWeight: '800',
          marginBottom: '23px',
          color: '#007bff',
          marginTop: '-20px',
          marginLeft: '5px'
        }}>
          대여 연장 신청
        </h2>

        {/* 책 정보 + 연장폼 */}
        <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
          {/* 책 이미지 */}
          <img
            src={book.image}
            alt={book.title}
            style={{ width: '150px', height: '210px', borderRadius: '8px' }}
          />

          {/* 정보 우측 정렬 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: '2px',
            paddingBottom: '2px',
          }}>
            {/* 제목 */}
            <h3 style={{ marginTop: '-9.5px', fontSize: '22px', fontWeight: 'bold' }}>{book.title}</h3>

            {/* 반납 예정일 */}
            <p style={{ marginTop: '4.5px', fontSize: '20px', color: '#555' }}>
              현재 반납 예정일: <strong style={{ color: '#dc3545' }}>{book.dueDate}</strong>
            </p>

            {/* 연장 기간 선택 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ fontSize: '20px', fontWeight: 'bold' }}>
                연장 기간 선택:
              </label>
              <select
                value={extendDays}
                onChange={(e) => setExtendDays(e.target.value)}
                style={{
                  fontSize: '16px',
                  padding: '2px 8px',
                  height: '22px',
                  lineHeight: '1',
                  verticalAlign: 'middle',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  marginTop: '4px',
                }}
              >
                <option>7일</option>
                <option>14일</option>
                <option>30일</option>
              </select>
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <button
          onClick={handleExtend}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          📩 대여 연장 신청하기
        </button>
      </div>
    </div>
  );
}
