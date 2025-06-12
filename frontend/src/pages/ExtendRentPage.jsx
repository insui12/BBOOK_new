// src/pages/ExtendRentPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import UserMenu from '../components/UserMenu'; // ✅ 추가

const fakeBooks = [
  { id: '3', title: '융합이산수학', image: '/images/융합 이산수학.jpg', dueDate: '2025-06-10' },
  { id: '2', title: '핵심미적분학', image: '/images/핵심미적분학.jpg', dueDate: '2025-06-07' },
];

export default function ExtendRentPage() {
  const { id } = useParams(); // ✅ URL 파라미터
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [extendDays, setExtendDays] = useState('7일');

  useEffect(() => {
    const found = fakeBooks.find(b => b.id === id);
    setBook(found);
  }, [id]);

  const handleExtend = () => {
    alert(`"${book.title}" 도서의 대여가 ${extendDays} 연장되었습니다.`);
    navigate('/orders');
  };

  if (!book) return <div style={{ padding: '40px' }}>책 정보를 불러오는 중...</div>;

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff', minHeight: '100vh' }}>
      <Header />
      <UserMenu isLoggedIn={true} setIsLoggedIn={() => {}} /> {/* ✅ 연결 */}

      <div
        style={{
          maxWidth: '985px',
          margin: '40px auto',
          padding: '40px',
          background: '#f8f9fa',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          boxSizing: 'border-box',
          transform: 'translateX(-5px)', // ✅ 왼쪽으로 조금 이동
          transition: 'all 0.3s ease',
        }}
      >
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>📚 대여 연장 신청</h2>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', alignItems: 'center' }}>
          <img
            src={book.image}
            alt={book.title}
            style={{ width: '120px', height: '160px', borderRadius: '8px' }}
          />
          <div>
            <h3 style={{ marginBottom: '8px' }}>{book.title}</h3>
            <p>
              현재 반납 예정일: <strong>{book.dueDate}</strong>
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>연장 기간 선택: </label>
          <select
            value={extendDays}
            onChange={(e) => setExtendDays(e.target.value)}
            style={{ padding: '8px', borderRadius: '6px', marginLeft: '10px' }}
          >
            <option>7일</option>
            <option>14일</option>
            <option>30일</option>
          </select>
        </div>

        <button
          onClick={handleExtend}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
          }}
        >
          대여 연장 신청하기
        </button>
      </div>
    </div>
  );
}