// src/pages/ReRentPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import UserMenu from '../components/UserMenu';

const fakeBooks = [
  {
    id: '1',
    title: 'C++ programming',
    author: '김개발',
    image: '/images/C++ programming.jpg',
    available: true,
  },
  {
    id: '2',
    title: '핵심미적분학',
    author: '이자바',
    image: '/images/핵심미적분학.png',
    available: true,
  },
  {
    id: '3',
    title: '융합이산수학',
    author: '이자바',
    image: '/images/이산수학.png',
    available: true,
  },
  {
    id: '4',
    title: '선형대수학',
    author: '구종만',
    image: '/images/선형대수학.jpg',
    available: true,
  },
];

function ReRentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [duration, setDuration] = useState('7일');
  const [pickupPlace, setPickupPlace] = useState('공과대학 1층 북스테이션');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = fakeBooks.find((b) => b.id === id);
    setBook(found || null);
    setLoading(false);
  }, [id]);

  const handleSubmit = () => {
    if (!book?.available) {
      alert('이 책은 현재 대여가 불가능합니다.');
      return;
    }

    const days = parseInt(duration.replace('일', ''), 10);
    const price = days * 5000;

    navigate('/PaymentPage/rerent', {
      state: {
        type: 'rerent',
        title: book.title,
        days,
        price,
      },
    });
  };

  if (loading) return <div style={{ padding: '40px' }}>🔄 책 정보를 불러오는 중...</div>;
  if (!book) return <div style={{ padding: '40px', color: 'red' }}>❌ 해당 책을 찾을 수 없습니다.</div>;

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff', minHeight: '100vh' }}>
      <Header />
      <UserMenu isLoggedIn={true} setIsLoggedIn={() => {}} />

      <div
        style={{
          maxWidth: '905px',
          margin: '40px auto',
          padding: '40px',
          backgroundColor: '#f8f9fa',
          border: '1px solid #ddd',
          borderRadius: '10px',
          transform: 'translateX(-4px)',
          transition: 'all 0.3s ease',
        }}
      >
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#007bff' }}>📘 다시 대여하기</h2>

        <img
          src={book.image}
          alt={book.title}
          style={{ width: '150px', height: '200px', borderRadius: '6px' }}
        />
        <h3 style={{ marginTop: '10px' }}>{book.title}</h3>
        <p>저자: {book.author}</p>
        <p style={{ color: book.available ? 'green' : 'red' }}>
          상태: {book.available ? '대여 가능' : '대여 중'}
        </p>

        <div style={{ marginTop: '20px' }}>
          <label>📅 대여 기간</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          >
            <option>7일</option>
            <option>14일</option>
            <option>30일</option>
          </select>
        </div>

        <div style={{ marginTop: '20px' }}>
          <label>📍 수령 장소</label>
          <input
            type="text"
            value={pickupPlace}
            onChange={(e) => setPickupPlace(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              height: '38px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          style={{
            marginTop: '30px',
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          📦 대여 신청하기
        </button>
      </div>
    </div>
  );
}

export default ReRentPage;
