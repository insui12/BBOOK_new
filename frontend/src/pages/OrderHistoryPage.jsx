// src/pages/OrderHistoryPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';

const orderHistory = [
  { id: '1', title: '자료구조 완전정복', orderDate: '2025-05-01', quantity: 1, price: 15200, image: '/book1.jpg', semester: '25-1학기', status: '주문완료' },
  { id: '2', title: '운영체제 이해하기', orderDate: '2025-05-01', quantity: 1, price: 16800, image: null, semester: '25-1학기', status: '대여중' },
  { id: '3', title: '컴퓨터구조와 논리설계', orderDate: '2024-12-10', quantity: 1, price: 17000, image: null, semester: '25-2학기', status: '연체중' },
  { id: '4', title: '알고리즘 문제해결 전략', orderDate: '2024-12-10', quantity: 1, price: 19000, image: null, semester: '25-2학기', status: '거래완료' },
];

export default function OrderHistoryPage() {
  const navigate = useNavigate();
  const [selectedSemester, setSelectedSemester] = useState('25-1학기');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const filteredOrders = orderHistory.filter(book => book.semester === selectedSemester);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedBooks = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
      <Header />
      <div style={container}>
        <div style={filterWrapper}>
          {['25-1학기', '25-2학기'].map((semester) => (
            <button
              key={semester}
              style={selectedSemester === semester ? filterButtonActive : filterButton}
              onClick={() => { setSelectedSemester(semester); setCurrentPage(1); }}
            >
              {semester}
            </button>
          ))}
        </div>

        {paginatedBooks.map((book, idx) => (
          <div key={book.id} style={cardWrapper}>
            <div style={{
              ...statusBadge,
              backgroundColor: getStatusColor(book.status),
            }}>
              {book.status}
            </div>

            <div style={cardContent}>
              <div style={bookImage}>
                {book.image && (
                  <img src={book.image} alt="book" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
                )}
              </div>
              <div style={bookInfo}>
                <p>주문일시: {book.orderDate}</p>
                <p>{book.title}</p>
                <p>총 {book.quantity}권, {book.price.toLocaleString()}원</p>
              </div>
              <div style={buttonGroup}>
                <button style={actionButton} onClick={() => navigate(`/book/${book.id}`)}>상세 조회</button>
                {book.status === '주문완료' && (
                  <button style={actionButton} onClick={() => navigate('/refund')}>주문 취소</button>
                )}
                {(book.status === '대여중' || book.status === '연체중') && (
                  <button style={actionButton} onClick={() => navigate(`/extend-rent/${book.id}`)}>대여 연장</button>
                )}
                

                {book.status === '거래완료' && (
                  <button style={actionButton} onClick={() => navigate(`/re-rent/${book.id}`)}>다시 대여하기</button>
                )}
              </div>
            </div>
          </div>
        ))}

        <div style={paginationWrapper}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              style={i + 1 === currentPage ? pageButtonActive : pageButton}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const container = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '20px',
};

const getStatusColor = (status) => {
  switch (status) {
    case '주문완료': return '#fff3cd';
    case '대여중': return '#cce5ff';
    case '연체중': return '#f8d7da';
    case '거래완료': return '#d4edda';
    default: return '#eeeeee';
  }
};

const filterWrapper = {
  display: 'flex',
  gap: '10px',
  marginTop: '-20px',
  marginBottom: '30px'
};

const filterButton = {
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  borderRadius: '12px',
  padding: '6px 12px', // ← 여기! 높이는 이 padding의 첫 번째 값(상하)을 조절하면 됨
  fontWeight: 'bold'
};




const filterButtonActive = {
  ...filterButton,
  backgroundColor: '#007bff',
  color: 'white'
};

const cardWrapper = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  marginBottom: '24px',
  padding: '20px'
};

const cardContent = {
  display: 'flex',
  gap: '24px',
  alignItems: 'stretch'
};

const bookImage = {
  width: '130px',
  height: '180px',
  backgroundColor: '#007bff',
  borderRadius: '8px',
  flexShrink: 0,
  overflow: 'hidden',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
};

const bookInfo = {
  flex: 1,
  backgroundColor: '#e6e6e6',
  padding: '16px',
  borderRadius: '6px'
};

const buttonGroup = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  width: '110px',
  gap: '12px'
};

const actionButton = {
  flex: 1,
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  backgroundColor: '#f2f2f2',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500'
};

const paginationWrapper = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  gap: '8px'
};

const pageButton = {
  padding: '8px 14px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  backgroundColor: '#f0f0f0',
  cursor: 'pointer'
};

const pageButtonActive = {
  ...pageButton,
  backgroundColor: '#007bff',
  color: 'white'
};

const statusBadge = {
  display: 'inline-block',
  padding: '6px 12px',
  fontWeight: 'bold',
  fontSize: '14px',
  borderRadius: '6px',
  color: '#333',
  marginBottom: '10px',
};

const headerWrapper = {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  marginBottom: '24px',   // ⬅️ 검색창 아래 여백을 24px로
  width: '1000px',
  marginLeft: 'auto',
  marginRight: 'auto',
  gap: '40px'
};