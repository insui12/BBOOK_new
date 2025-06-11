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
import ReceiveCheckPage from './pages/ReceiveCheckPage';
import ReRentPage from './pages/ReRentPage';
import ExtendRentPage from './pages/ExtendRentPage';
import NotFoundPage from './pages/NotFoundPage';
import BookPurchasePage from './pages/BookPurchasePage';

import SupportPage from './pages/SupportPage';
import InquiryPage from './pages/InquiryPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/join" element={<SignupPage />} />
        <Route path="/orders" element={<OrderHistoryPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
        <Route path="/book-detail/:id" element={<BookDetailMainPage />} />
        <Route path="/book/:id/rerent" element={<ReRentPage />} />
        <Route path="/book/:id/extend" element={<ExtendRentPage />} />
        <Route path="/book/:id/purchase" element={<BookPurchasePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order/:id/payment" element={<PaymentPage />} />
        <Route path="/order-payment" element={<PaymentPage />} />
        <Route path="/search" element={<SearchResultPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/receive" element={<ReceiveCheckPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
