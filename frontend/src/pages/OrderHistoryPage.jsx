import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import UserMenu from '../components/UserMenu.jsx';

export default function OrderHistoryPage({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [selectedSemester, setSelectedSemester] = useState('25-1학기');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const orderHistory = [
    { id: '1', title: 'C++ programing', orderDate: '2025-05-01', quantity: 1, price: 15200, image: '/images/C++.jpg', semester: '25-1학기', status: '주문완료' },
    { id: '2', title: '핵심미적분학', orderDate: '2025-05-01', quantity: 1, price: 16800, image: '/images/핵심미적분학.png', semester: '25-1학기', status: '대여중' },
    { id: '3', title: '융합 이산수학', orderDate: '2024-12-10', quantity: 1, price: 17000, image: '/images/이산수학.png', semester: '25-2학기', status: '연체중' },
    { id: '4', title: '선형대수학', orderDate: '2024-12-10', quantity: 1, price: 19000, image: '/images/선형대수학.jpg', semester: '25-2학기', status: '거래완료' },
  ];

  const filteredOrders = orderHistory.filter(book => book.semester === selectedSemester);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedBooks = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff', position: 'relative' }}>
      <Header />
      <UserMenu
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        redirectOnLogout={false} // ✅ 로그아웃 후 현재 페이지 유지
      />

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

        {paginatedBooks.map((book) => (
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
                  <button style={actionButton} onClick={() => navigate(`/book/${book.id}/extend`)}>대여 연장</button>
                )}
                {book.status === '거래완료' && (
                  <button style={actionButton} onClick={() => navigate(`/book/${book.id}/rerent`)}>다시 대여하기</button>
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

// ✅ 스타일 객체들 정의 (기존과 동일)
const container = {
  width: '100%',
  maxWidth: '987px',
  margin: '40px auto 0 auto',
   transform: 'translateX(-5px)',
  padding: '0', // 좌우 여백 없애고 검색창과 정확히 정렬
};






const filterWrapper = {
  display: 'flex',
  gap: '10px',
  marginTop: '50px',
  marginBottom: '20px',
};

const filterButton = {
  fontSize: '13px',
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  borderRadius: '12px',
  padding: '6px 8.8px',
  fontWeight: '600',
};

const filterButtonActive = {
  ...filterButton,
  backgroundColor: '#007bff',
  color: 'white',
};

const cardWrapper = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  marginBottom: '24px',
  padding: '20px',
};

const statusBadge = {
  display: 'inline-block',
  padding: '6px 25px',
  fontWeight: 'bold',
  fontSize: '14px',
  borderRadius: '6px',
  color: '#333',
  marginBottom: '15px',
  minWidth: '80px',       // ✅ 추가: 최소 너비 고정
  textAlign: 'center',    // ✅ 가운데 정렬
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

const cardContent = {
  display: 'flex',
  gap: '24px',
  alignItems: 'stretch',
   // ← 오른쪽에서 살짝 줄여줌
};


const bookImage = {
  width: '130px',
  height: '180px',
  backgroundColor: '#007bff',
  borderRadius: '8px',
  flexShrink: 0,
  overflow: 'hidden',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
};

const bookInfo = {
  flex: 0.97,
  backgroundColor: '#f2f2f2',      // 버튼 배경색과 통일
  padding: '16px',
  borderRadius: '6px',
  border: '1px solid #ccc',        // ✅ 테두리 추가
};

const buttonGroup = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  width: '110px',
  gap: '12px',
};

const actionButton = {
  flex: 1,
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  backgroundColor: '#f2f2f2',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
};

const paginationWrapper = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  gap: '8px',
};

const pageButton = {
  padding: '8px 14px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  backgroundColor: '#f0f0f0',
  cursor: 'pointer',
};

const pageButtonActive = {
  ...pageButton,
  backgroundColor: 'transparent',  // 배경 제거
  border: 'none',                  // 테두리 제거
  color: '#aaa',                   // 연한 회색
  cursor: 'default',               // 클릭 비활성 느낌
  fontWeight: 'normal',
};

