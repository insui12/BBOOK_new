import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function RefundPage() {
  const [selectedReason, setSelectedReason] = useState('');
  const [etcReason, setEtcReason] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (reason) => {
    setSelectedReason(reason);
    if (reason !== '기타') {
      setEtcReason('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedReason) {
      alert('취소 사유를 선택해주세요.');
      return;
    }

    if (selectedReason === '기타' && etcReason.trim() === '') {
      alert('기타 사유를 입력해주세요.');
      return;
    }

    const finalReason = selectedReason === '기타' ? etcReason : selectedReason;
    console.log('취소 요청 사유:', finalReason);
    setSubmitted(true);
  };

  const handleGoBack = () => {
    navigate('/order-history');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff', padding: '20px' }}>
      <Header />
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>취소 요청</h1>

        {submitted ? (
          <div style={{ fontSize: '18px', color: 'green' }}>
            취소 요청이 완료되었습니다!
            <button
              onClick={handleGoBack}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              주문 목록으로 돌아가기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ marginBottom: '8px', fontWeight: 'bold' }}>취소 사유 선택</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['단순 변심', '책 상태 불량', '배송 문제', '기타'].map((reason) => (
                  <button
                    key={reason}
                    type="button"
                    onClick={() => handleSelect(reason)}
                    style={{
                      padding: '10px',
                      border: selectedReason === reason ? '2px solid #007bff' : '1px solid #ccc',
                      borderRadius: '8px',
                      backgroundColor: selectedReason === reason ? '#e6f2ff' : '#f9f9f9',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    {reason}
                  </button>
                ))}
              </div>
            </div>

            {selectedReason === '기타' && (
              <div style={{ marginBottom: '16px' }}>
                <label>
                  기타 사유:
                  <input
                    type="text"
                    value={etcReason}
                    onChange={(e) => setEtcReason(e.target.value)}
                    style={{ display: 'block', marginTop: '6px', padding: '8px', width: '100%', borderRadius: '6px', border: '1px solid #ccc' }}
                  />
                </label>
              </div>
            )}

            <button
              type="submit"
              style={{
                padding: '12px 24px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              제출하기
            </button>
          </form>
        )}
      </div>
    </div>
  );
}