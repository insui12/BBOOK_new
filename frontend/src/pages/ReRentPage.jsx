// src/pages/ReRentPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// 📘 예시 데이터 (나중에 API로 대체 가능)
const fakeBooks = [
  {
    id: '1',
    title: '자료구조 완전정복',
    author: '김개발',
    image: '/book1.jpg',
    available: true,
  },
  {
    id: '2',
    title: 'C++ 마스터 클래스',
    author: '이자바',
    image: '/book2.jpg',
    available: true,
  },
  {
    id: '3',
    title: 'C++ 마스터 클래스',
    author: '이자바',
    image: '/book3.jpg',
    available: true,
  },
  {
    id: '4',
    title: '알고리즘 문제해결 전략',
    author: '구종만',
    image: '/book4.jpg',
    available: true,
  },
];

function ReRentPage() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [duration, setDuration] = useState('7일');
  const [pickupPlace, setPickupPlace] = useState('공과대학 1층 북스테이션');
  const [loading, setLoading] = useState(true);

  // 📌 책 정보 찾기
  useEffect(() => {
    const found = fakeBooks.find((b) => b.id === bookId);
    setBook(found || null);
    setLoading(false);
  }, [bookId]);

  const handleSubmit = () => {
    if (!book?.available) {
      alert('이 책은 현재 대여가 불가능합니다.');
      return;
    }

    alert('✅ 대여 신청이 완료되었습니다.');
    console.log('대여 요청:', {
      bookId: book.id,
      title: book.title,
      duration,
      pickupPlace,
    });

    navigate('/order-history');
  };

  if (loading) return <div style={{ padding: '40px' }}>🔄 책 정보를 불러오는 중...</div>;
  if (!book) return <div style={{ padding: '40px', color: 'red' }}>❌ 해당 책을 찾을 수 없습니다.</div>;

  return (
    <div style={{ maxWidth: '600px', margin: '60px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#007bff' }}>📘 다시 대여하기</h2>

      <img src={book.image} alt={book.title} style={{ width: '150px', height: '200px', borderRadius: '6px' }} />
      <h3 style={{ marginTop: '10px' }}>{book.title}</h3>
      <p>저자: {book.author}</p>
      <p style={{ color: book.available ? 'green' : 'red' }}>
        상태: {book.available ? '대여 가능' : '대여 중'}
      </p>

      <div style={{ marginTop: '20px' }}>
        <label>📅 대여 기간</label>
        <select value={duration} onChange={(e) => setDuration(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px' }}>
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
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{ marginTop: '30px', width: '100%', padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', fontSize: '16px' }}
      >
        📦 대여 신청하기
      </button>
    </div>
  );
}

export default ReRentPage;