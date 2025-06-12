// src/pages/BookDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';

const books = [
  {
    id: '1',
    title: 'C++ programing',
    author: '황기태',
    publisher: '생능출판사',
    publishDate: '2024.05.01',
    price: 19800,
    image: '/images/C++.jpg',
    category: 'C++프로그래밍',
    orderDate: '2025-05-01',
    rentStartDate: '2025-05-02',
    rentDueDate: '2025-05-16',
    status: '주문완료',
    deliveryMethod: '사물함',
    overdueDays: 0,
    paymentMethod: '카카오페이',
    courses: [
      { name: 'C++ 프로그래밍', professor: '안재근' },
    ]
  },
  {
    id: '2',
    title: '핵심 미적분학',
    author: '박은정',
    publisher: '한빛미디어',
    publishDate: '2023.10.15',
    price: 16800,
    image: '/images/핵심미적분학.jpg',
    category: '컴퓨터공학 / 운영체제',
    orderDate: '2025-05-01',
    rentStartDate: '2025-05-03',
    rentDueDate: '2025-05-17',
    status: '대여중',
    deliveryMethod: '직거래',
    overdueDays: 0,
    paymentMethod: '토스',
    courses: [
      { name: '운영체제', professor: '정재훈' }
    ]
  },
  {
    id: '3',
    title: '컴퓨터구조와 논리설계',
    author: '이상훈',
    publisher: 'IT북스',
    publishDate: '2022.08.01',
    price: 17000,
    image: '/images/융합 이산수학.jpg',
    category: '컴퓨터공학 / 하드웨어',
    orderDate: '2024-12-10',
    rentStartDate: '2024-12-11',
    rentDueDate: '2024-12-25',
    status: '연체중',
    deliveryMethod: '사물함',
    overdueDays: 5,
    paymentMethod: '신용카드',
    courses: [
      { name: '컴퓨터구조', professor: '박정현' },
      { name: '디지털논리설계', professor: '송다혜' }
    ]
  },
  {
    id: '4',
    title: '알고리즘 문제해결 전략',
    author: '구종만',
    publisher: '인사이트',
    publishDate: '2021.03.20',
    price: 19000,
    image: '/images/선형대수학.jpg',
    category: '컴퓨터공학 / 알고리즘',
    orderDate: '2024-12-10',
    rentStartDate: '2024-12-11',
    rentDueDate: '2024-12-25',
    status: '거래완료',
    deliveryMethod: '직거래',
    overdueDays: 0,
    paymentMethod: '카카오페이',
    courses: [
      { name: '알고리즘', professor: '김유진' },
      { name: '프로그래밍기초', professor: '최현우' }
    ]
  },
];

function BookDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === id);

  if (!book) return <div>책 정보를 찾을 수 없습니다.</div>;

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
      <Header />
      <div style={cardWrapper}>
        <div style={imageBox}>
          <img src={book.image} alt="book" style={imageStyle} />
        </div>
        <div style={infoBox}>
          <h2 style={{ marginBottom: '16px' }}>📘 주문 상세 정보</h2>
          <div style={twoColGrid}>
            <span><strong>제목:</strong> {book.title}</span>
            <span><strong>저자:</strong> {book.author}</span>
            <span><strong>출판사:</strong> {book.publisher}</span>
            <span><strong>출판일:</strong> {book.publishDate}</span>
            <span><strong>카테고리:</strong> {book.category}</span>
            <span><strong>주문일자:</strong> {book.orderDate}</span>
            <span><strong>대여기간:</strong> {book.rentStartDate} ~ {book.rentDueDate}</span>
            <span><strong>대여 상태:</strong> {book.status}</span>
            <span><strong>수령 방식:</strong> {book.deliveryMethod}</span>
            {book.status === '연체중' && (
              <span><strong>연체 일수:</strong> {book.overdueDays}일</span>
            )}
            <span><strong>대여 금액:</strong> {book.price.toLocaleString()}원</span>
            <span><strong>결제 수단:</strong> {book.paymentMethod}</span>
            <span><strong>주문 번호:</strong> {book.id}</span>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px' }}>📘 관련 수업 정보</h3>
            <ul style={{ paddingLeft: '16px' }}>
              {book.courses?.map((c, i) => (
                <li key={i}>{c.name} (담당 교수: {c.professor})</li>
              ))}
            </ul>
          </div>

          <button onClick={() => navigate(-1)} style={backButton}>← 목록으로 돌아가기</button>
        </div>
      </div>
    </div>
  );
}

const cardWrapper = {
  display: 'flex',
  gap: '40px',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '20px'
};

const imageBox = {
  width: '240px',
  height: '320px',
  backgroundColor: '#ddd',
  borderRadius: '10px',
  overflow: 'hidden',
  flexShrink: 0
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const infoBox = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  fontSize: '16px'
};

const twoColGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  rowGap: '10px',
  columnGap: '40px',
  marginBottom: '20px'
};

const backButton = {
  padding: '10px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  alignSelf: 'flex-start'
};

export default BookDetailPage;