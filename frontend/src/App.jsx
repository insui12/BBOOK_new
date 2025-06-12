import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RefundPage from './pages/RefundPage';
import BookDetailPage from './pages/BookDetailPage';
import BookDetailMainPage from './pages/BookDetailMainPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import OrderCompletePage from './pages/OrderCompletePage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import SearchResultPage from './pages/SearchResultPage';
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
        <Route path="/" element={<MainPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/join" element={<SignupPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/book-detail/:id" element={<BookDetailMainPage />} />
        <Route path="/book/:id/rerent" element={<ReRentPage />} />
        <Route path="/book/:id/extend" element={<ExtendRentPage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/re-rent/:id" element={<ReRentPage />} />
        <Route path="/extend-rent/:id" element={<ExtendRentPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/PaymentPage/:id" element={<PaymentPage />} />
        <Route path="/order/:id/payment" element={<PaymentPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/receive" element={<ReceiveCheckPage />} />
      

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;