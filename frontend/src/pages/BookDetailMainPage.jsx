// src/pages/BookDetailMainPage.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';

const bookData = [
  {
    id: '1',
    title: '핵심 미적분학',
    author: '최서진',
    publisher: '북북출판',
    publishDate: '2024.05.01',
    price: 19800,
    image: '/book1.jpg',
    description: '미적분학의 핵심 개념을 체계적으로 정리한 교재입니다. 기초부터 심화까지 폭넓게 다룹니다.'
  },
  // 다른 책도 추가 가능
];

export default function BookDetailMainPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = bookData.find(book => book.id === id);

  if (!book) return <div style={{ padding: '40px' }}>책 정보를 찾을 수 없습니다.</div>;

  return (
    <div>
      <Header />
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '24px', background: '#f9f9f9', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>{book.title}</h2>

        <div style={{ display: 'flex', gap: '20px' }}>
          <img src={book.image} alt={book.title} style={{ width: '200px', height: '280px', borderRadius: '10px' }} />
          <div>
            <p><strong>저자:</strong> {book.author}</p>
            <p><strong>출판사:</strong> {book.publisher}</p>
            <p><strong>출간일:</strong> {book.publishDate}</p>
            <p><strong>가격:</strong> {book.price.toLocaleString()}원</p>
            <p style={{ marginTop: '12px' }}>{book.description}</p>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <button
                style={buttonStyle}
                onClick={() => alert('장바구니에 추가되었습니다.')}
              >
                장바구니 담기
              </button>
              <button
                style={{ ...buttonStyle, backgroundColor: '#007bff', color: 'white' }}
                onClick={() => navigate(`/payment/${book.id}`)}
              >
                구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 16px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  backgroundColor: '#f0f0f0',
  fontSize: '14px',
  cursor: 'pointer'
};