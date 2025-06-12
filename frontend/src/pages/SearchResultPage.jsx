import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import UserMenu from '../components/UserMenu.jsx';

const searchData = [
  {
    id: '1',
    title: '광신 미적분학 - 제9판',
    author: 'James Stewart',
    publisher: '북북출판',
    publishDate: '2021년 3월',
    course: '미적분학 / 홍길동 교수',
    condition: '명품수정',
    image: '/images/핵심미적분학.jpg',
    price: 5000,
  },
  {
    id: '2',
    title: '광신 미적분학 - 제9판',
    author: 'Daniel Choq',
    publisher: '한빅출판',
    publishDate: '2021년 3월',
    course: '기초미적분 / 김수현 교수',
    condition: '평점',
    image: '/images/핵심미적분학.jpg',
    price: 5000,
  },
  {
    id: '3',
    title: '광신 미적분학 - 제9판',
    author: 'Salem Watson',
    publisher: '중앙어학추어',
    publishDate: '2021년 3월',
    course: '수학개론 / 이정재 교수',
    condition: '보통',
    image: '/images/핵심미적분학.jpg',
    price: 5000,
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResultsPage({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const query = useQuery().get('q')?.toLowerCase() || '';

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

      <div style={{ width: '1000px', margin: '0 auto' }}>
        <h3 style={{ color: '#007bff', marginTop: '24px' }}>
          <strong>{query}</strong>가(가) 검색결과
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
                alignItems: 'center', // ✅ 버튼 영역 세로 가운데 정렬
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
                    수업명: {book.course}
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
                <button onClick={() => navigate('/cart')} style={buttonStyleBlue}>
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
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
};

const buttonStyleGray = {
  ...buttonBase,
  backgroundColor: '#eee',
  color: '#000',
  border: '1px solid #ccc',
};