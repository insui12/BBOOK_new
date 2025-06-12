import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import UserMenu from '../components/UserMenu.jsx';

const searchData = [
  {
    id: '1',
    title: 'C언어로 쉽게 풀어쓴 자료구조',
    author: '천인국,공용해,하상호',
    publisher: '생능출판',
    publishDate: '2019년 2월',
    course: '자료구조 / 김숙연',
    condition: '중하',
    image: '/images/자료구조.png',
    price: 5000,
  },
  {
    id: '2',
    title: '리눅스 시스템 원리와 실제',
    author: '창병모',
    publisher: '생능출판',
    publishDate: '2022년 1월',
    course: '시스템 프로그래밍 / 김숙연',
    condition: '상',
    image: '/images/리눅스.png',
    price: 5800,
  },
  {
    id: '3',
    title: '쉽게 풀어쓴 C언어 Express',
    author: '천인국',
    publisher: '생능출판',
    publishDate: '2023년 1월',
    course: '프로그래밍 입문 / 김숙연',
    condition: '중하',
    image: '/images/C언어.jpg',
    price: 5000,
  },
  {
    id: '4',
    title: 'Do it! 점프 투 파이썬',
    author: '박응용',
    publisher: '이지스퍼블리싱',
    publishDate: '2023년 6월',
    course: '컴퓨터공학입문과 파이썬 / 김숙연',
    condition: '상',
    image: '/images/파이썬.png',
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
          <strong style={{ color: '#007bff' }}>{query}김숙연</strong>
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
                    setMessage('장바구니에 담았습니다.');
                    setTimeout(() => setMessage(''), 2000);
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