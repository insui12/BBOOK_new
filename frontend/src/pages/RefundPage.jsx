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
    if (reason !== '기타') setEtcReason('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedReason) return alert('취소 사유를 선택해주세요.');
    if (selectedReason === '기타' && etcReason.trim() === '') return alert('기타 사유를 입력해주세요.');
    const finalReason = selectedReason === '기타' ? etcReason : selectedReason;
    console.log('취소 요청 사유:', finalReason);
    setSubmitted(true);
  };

  const handleCancel = () => {
    navigate('/orders');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f2f4f8', minHeight: '100vh' }}>
      <Header />
     <div
  style={{
    width: '90%',                   // 반응형 폭
    maxWidth: '910px',              // 최대 폭 제한
    margin: '40px auto',            // 가운데 정렬
    transform: 'translateX(-5px)',  // 살짝 왼쪽 이동
    transition: 'all 0.3s ease',    // 부드러운 애니메이션
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    padding: '40px'
  }}
>

        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', color: '#222' }}>📦 취소 요청</h1>

        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '20px', color: '#28a745', fontWeight: 'bold' }}>
              ✅ 취소 요청이 정상적으로 접수되었습니다!
            </div>
            <p style={{ marginTop: '10px', color: '#555' }}>확인 후 처리 결과를 알려드릴게요.</p>
            <div style={{ marginTop: '40px' }}>
              <button
                onClick={handleCancel}
                style={{
                  padding: '14px 28px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  transition: 'all 0.2s',
                }}
              >
                주문 목록으로 돌아가기
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <p style={{ marginBottom: '12px', fontWeight: '600', fontSize: '18px' }}>🔍 취소 사유 선택</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['단순 변심', '책 상태 불량', '배송 문제', '기타'].map((reason) => (
                  <div
                    key={reason}
                    onClick={() => handleSelect(reason)}
                    style={{
                      padding: '14px',
                      border: selectedReason === reason ? '2px solid #007bff' : '1px solid #ccc',
                      borderRadius: '10px',
                      backgroundColor: selectedReason === reason ? '#eaf4ff' : '#f9f9f9',
                      cursor: 'pointer',
                      fontSize: '16px',
                      transition: 'all 0.2s',
                      boxShadow: selectedReason === reason ? '0 2px 8px rgba(0,123,255,0.2)' : 'none'
                    }}
                  >
                    {reason}
                  </div>
                ))}
              </div>
            </div>

            {selectedReason === '기타' && (
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontWeight: '500', fontSize: '16px' }}>
                  ✏️ 기타 사유:
                  <textarea
                    value={etcReason}
                    onChange={(e) => setEtcReason(e.target.value)}
                    rows={4}
                    style={{
                      display: 'block',
                      marginTop: '10px',
                      padding: '12px',
                      width: '100%',
                      borderRadius: '10px',
                      border: '1px solid #ccc',
                      fontSize: '15px',
                      lineHeight: '1.6',
                      backgroundColor: '#fafafa',
                      resize: 'none',
                    }}
                  />
                </label>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '12px' }}>
              <button
                type="button"
                onClick={handleCancel}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#e0e0e0',
                  color: '#333',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '15px',
                }}
              >
                ❌ 취소
              </button>

              <button
                type="submit"
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '15px',
                }}
              >
                📤 제출하기
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

