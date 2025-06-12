// ✅ App.jsx 수정본
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/JoinPage';
import RefundPage from './pages/RefundPage';
import BookDetailPage from './pages/BookDetailPage';
import BookDetailMainPage from './pages/BookDetailMainPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import OrderCompletePage from './pages/OrderCompletePage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import SearchResultPage from './pages/SearchResultPage';
import SearchResultPage2 from './pages/SearchResultPage2';
import SearchResultPage3 from './pages/SearchResultPage3';
import ReceiveCheckPage from './pages/ReceiveCheckPage';
import SupportPage from './pages/SupportPage';
import ReRentPage from './pages/ReRentPage';
import ExtendRentPage from './pages/ExtendRentPage';
import NotFoundPage from './pages/NotFoundPage';
import InquiryPage from './pages/InquiryPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/book-detail/:id" element={<BookDetailMainPage />} />
        <Route path="/PaymentPage/:id" element={<PaymentPage />} />
        <Route path="/" element={<MainPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/join" element={<SignupPage />} />
        <Route path="/orders" element={<OrderHistoryPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/refund" element={<RefundPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/book/:id" element={<BookDetailPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/support" element={<SupportPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/book-detail/:id" element={<BookDetailPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/book/:id/rerent" element={<ReRentPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/book/:id/extend" element={<ExtendRentPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/inquiry" element={<InquiryPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/re-rent/:id" element={<ReRentPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/extend-rent/:id" element={<ExtendRentPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/search/안재근" element={<SearchResultPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/search/김숙연" element={<SearchResultPage2 isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/search/양근석" element={<SearchResultPage3 isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={<CartPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/receive" element={<ReceiveCheckPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
