import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      fontFamily: "'Noto Sans KR', sans-serif"
    }}>
      {/* 상단 */}
      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', color: '#5c88ff', fontWeight: 'bold' }}>BBOOK</h1>

        {/* 검색창 + 아이콘 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
          gap: '15px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#dbeafe',
            borderRadius: '20px',
            padding: '10px 20px',
            width: '550px'
          }}>
            <input
              type="text"
              placeholder="책 제목 / 저자명 / 학교 검색"
              style={{
                flex: 1,
                border: 'none',
                backgroundColor: 'transparent',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            <FaSearch style={{ color: '#6ea1e4', fontSize: '16px', cursor: 'pointer' }} />
          </div>

          {/* 아이콘 */}
          <FaUser
            onClick={() => navigate('/login')}
            style={{ color: '#6ea1e4', fontSize: '18px', cursor: 'pointer' }}
          />
          <FaShoppingCart
            onClick={() => navigate('/orders')} // ✅ 주문내역으로 이동
            style={{ color: '#6ea1e4', fontSize: '18px', cursor: 'pointer' }}
          />
        </div>

        {/* ⌄ 아이콘 */}
        <div
          style={{ fontSize: '50px', color: '#93b4f4', marginTop: '50px', cursor: 'pointer' }}
          onClick={() => setShowContent(!showContent)}
        >
          ⌄
        </div>
      </div>

      {/* 본문 콘텐츠 */}
      {showContent && (
        <div style={{ padding: '40px 20px', backgroundColor: '#e1ecf9', textAlign: 'center' }}>
          {/* 새로 등록된 교재 */}
          <h3 style={{ marginBottom: '10px' }}>새로 등록된 교재(개정판)</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <img src="/images/new1.png" alt="책1" style={{ width: '100px' }} />
            <img src="/images/new2.png" alt="책2" style={{ width: '100px' }} />
            <img src="/images/new3.png" alt="책3" style={{ width: '100px' }} />
            <img src="/images/new4.png" alt="책4" style={{ width: '100px' }} />
          </div>

          {/* 베스트셀러 TOP 4 */}
          <h3 style={{ marginBottom: '20px', fontWeight: 'bold' }}>
            어제의 베스트셀러 <span style={{ fontWeight: '900' }}>TOP 4</span>
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px 100px',
            justifyContent: 'center',
            alignItems: 'start'
          }}>
            {/* 1 */}
            <div style={{ textAlign: 'center' }}>
              <img src="/images/book1.png" alt="책1" style={{ width: '120px', marginBottom: '10px' }} />
              <div style={{ fontWeight: 'bold' }}>핵심미적분학</div>
              <div>: 제 9판</div>
            </div>

            {/* 2 */}
            <div style={{ textAlign: 'center' }}>
              <img src="/images/book2.png" alt="책2" style={{ width: '120px', marginBottom: '10px' }} />
              <div style={{ fontWeight: 'bold' }}>창의성을</div>
              <div>창의하다</div>
            </div>

            {/* 3 */}
            <div style={{ textAlign: 'center' }}>
              <img src="/images/book3.png" alt="책3" style={{ width: '120px', marginBottom: '10px' }} />
              <div style={{ fontWeight: 'bold' }}>WORLD LINK I</div>
              <div>: DEVELOPING ENGLISH FLUENCY</div>
            </div>

            {/* 4 */}
            <div style={{ textAlign: 'center' }}>
              <img src="/images/book4.png" alt="책4" style={{ width: '120px', marginBottom: '10px' }} />
              <div style={{ fontWeight: 'bold' }}>씽크 파이썬</div>
            </div>
          </div>
        </div>
      )}

      {/* 하단 푸터 */}
      <footer style={{
        backgroundColor: '#e5e7eb',
        padding: '20px 30px',
        fontSize: '13px',
        color: '#333',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>📖 학Bbook</div>
        <div>이메일 : <b>asd98747s@gmail.com</b></div>
        <div style={{ fontWeight: 'bold', textAlign: 'right' }}>
          고객센터<br />
          010-5493-7476
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
