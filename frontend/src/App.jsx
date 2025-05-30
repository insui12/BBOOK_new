import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 페이지 컴포넌트들
import MainPage from './mainpage/MainPage';
import LoginPage from './loginpage/LoginPage';
import JoinPage from './joinpage/JoinPage';
import RefundPage from './refundpage/RefundPage';
import BookDetailPage from './bookdetailpage/BookDetailPage';
import OrderHistoryPage from './orderhistorypage/OrderHistoryPage';
import ReRentPage from './rerentpage/ReRentPage';  // 🔹 다시 대여하기 페이지

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<MainPage />} />

        {/* 로그인 / 회원가입 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />

        {/* 주문 관련 */}
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
        <Route path="/rerent/:bookId" element={<ReRentPage />} /> {/* 🔹 추가됨 */}
      </Routes>
    </Router>
  );
}

export default App;
