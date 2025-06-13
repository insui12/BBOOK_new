import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import UserMenu from '../components/UserMenu.jsx';

const searchData = [
  {
    id: '1',
    title: 'C++ programming',
    author: '황기태',
    publisher: '생능출판',
    publishDate: '2018년 3월',
    course: 'C++ 프로그래밍 / 안재근',
    condition: '최상',
    image: '/images/C++.jpg',
    price: 5000,
  },
  {
    id: '2',
    title: '모두의 인공지능 기초수학',
    author: '서지영',
    publisher: '생능출판',
    publishDate: '2020년 8월',
    course: '인공지능 / 안재근',
    condition: '좋음',
    image: '/images/인공지능기초수학.png',
    price: 5000,
  },
  {
    id: '3',
    title: '명품 JAVA Programming',
    author: '황기태, 김효수',
    publisher: '생능출판',
    publishDate: '2018년 6월',
    course: 'JAVA웹 개발 / 안재근',
    condition: '중하',
    image: '/images/자바.png',
    price: 5000,
  },
  {
    id: '4',
    title: '인간관계론',
    author: '김혜숙, 박선환, 박숙희, 정미경, 이주희',
    publisher: '양서원',
    publishDate: '2016년 3월',
    course: '인간관계론 / 권재기',
    condition: '상',
    image: '/images/인간관계론.png',
    price: 5000,
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResultsPage({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const query = useQuery().get('q')?.toLowerCase() || '';
  const [message, setMessage] = useState('');

  const filteredBooks = searchData.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.publisher.toLowerCase().includes(query)
  );

  return (
    <div>
      <Header />
      <UserMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {message && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#e6f4ff',
          border: '1px solid #91d5ff',
          color: '#0050b3',
          padding: '10px 16px',
          borderRadius: '6px',
          zIndex: 999,
          fontSize: '14px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}>
          {message}
        </div>
      )}

      <div style={{ width: '1000px', margin: '0 auto' }}>
        <h3 style={{ marginTop: '24px', fontSize: '22px' }}>
          <strong style={{ color: '#007bff' }}>{query}안재근</strong>
          <span style={{ color: '#000' }}> 검색결과</span>
        </h3>
        <p style={{ marginTop: '8px' }}>
          {filteredBooks.length}개의 결과가 있습니다 · 이 책은 현재{' '}
          <span style={{ color: 'red' }}>24시간 이내</span> 대여 가능
        </p>

        <div style={{ marginTop: '20px' }}>
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #ddd',
                padding: '16px 0',
              }}
            >
              <div style={{ display: 'flex', gap: '16px' }}>
                <img
                  src={book.image}
                  alt={book.title}
                  style={{ width: '80px', height: '120px', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ fontWeight: 'bold' }}>{book.title}</div>
                  <div style={{ fontSize: '13px', color: '#555' }}>
                    {book.author}, {book.publisher} | {book.publishDate}
                  </div>
                  <div
                    style={{
                      backgroundColor: '#f0f8ff',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      display: 'inline-block',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#0077cc',
                      margin: '4px 0',
                    }}
                  >
                    {book.course}
                  </div>
                  <div style={{ fontSize: '13px', color: '#888' }}>책상태: {book.condition}</div>
                  <div style={{ fontWeight: 'bold', color: 'red' }}>
                    {book.price.toLocaleString()}원
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  minWidth: '120px',
                  alignItems: 'center',
                }}
              >
                <button
                  onClick={() => {
                    if (!isLoggedIn) {
                      navigate('/login');
                    } else {
                      setMessage('장바구니에 담았습니다.');
                      setTimeout(() => setMessage(''), 2000);
                    }
                  }}
                  style={buttonStyleBlue}
                >
                  장바구니 담기
                </button>
                <button onClick={() => navigate(`/order/${book.id}/payment`)} style={buttonStyleGray}>
                  대여하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const buttonBase = {
  padding: '8px 16px',
  width: '130px',
  height: '38px',
  fontSize: '14px',
  fontWeight: '500',
  borderRadius: '4px',
  cursor: 'pointer',
};

const buttonStyleBlue = {
  ...buttonBase,
  backgroundColor: '#0094ff',
  color: '#fff',
  border: 'none',
};

const buttonStyleGray = {
  ...buttonBase,
  backgroundColor: '#eee',
  color: '#000',
  border: '1px solid #ccc',
};