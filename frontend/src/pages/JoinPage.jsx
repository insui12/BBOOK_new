import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinPage() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeAd, setAgreeAd] = useState(false);

  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAllAgree = () => {
    const newValue = !agreeAll;
    setAgreeAll(newValue);
    setAgreeTerms(newValue);
    setAgreePrivacy(newValue);
    setAgreeAd(newValue);
  };

  const handleSubmit = () => {
    alert('회원가입이 완료되었습니다');
    navigate(-1);
  };

  const openModal = (type) => {
    let content = '';
    if (type === 'terms') content = `[서비스 개요]
- 본 서비스는 대학생 대상 중고 전공서적 ‘대여 전용’ 플랫폼입니다.
[대여 기간]
- 기본 대여 기간은 7일이며, 연장과 조기 반납이 가능합니다.
[책 상태 확인]
- 책 수령 전후 사진 촬영이 권장되며, 이상 시 24시간 내 신고 바랍니다.
[훼손 및 분실]
- 책 훼손이나 분실 시, 운영 기준에 따라 보상금이 청구될 수 있습니다.
[결제 및 환불]
- 결제는 즉시 처리되며, 발송 전까지 전액 환불이 가능합니다.
[책 사용 시 주의사항]
- 고의적 훼손, 낙서 등이 반복될 경우 서비스 이용이 제한될 수 있습니다.`;

    if (type === 'privacy') content = `[수집 항목]
- 이름, 연락처, 학교/학번, 대여/반납 기록 등 최소한의 정보만 수집합니다.
[수집 목적]
- 도서 대여 및 반납 절차, 사용자 문의 응대, 부정이용 방지 등을 위해 사용됩니다.
[보관 기간]
- 회원 탈퇴 시까지 보관되며, 탈퇴 요청 시 즉시 파기됩니다.
[제3자 제공]
- 제3자에게 절대 제공되지 않으며, 내부 운영 목적에만 활용됩니다.
[동의 거부 권리]
- 개인정보 제공에 동의하지 않을 경우, 서비스 이용이 제한될 수 있습니다.`;

    if (type === 'ad') content = `[광고 목적]
- 새로운 도서 입고, 할인 소식, 대여 이벤트 등의 정보 제공을 위한 알림입니다.
[수신 방법]
- 이메일, 문자, 앱 푸시 등을 통해 전달될 수 있습니다.
[수신 거부]
- 언제든지 광고 수신 거부가 가능하며, 수신 거부 시 서비스 이용에는 제한이 없습니다.
[선택 사항]
- 본 항목은 선택 동의이며, 미동의해도 서비스 이용에는 영향이 없습니다.`;

    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  return (
    <div style={{ padding: '40px', fontFamily: "'Noto Sans KR', sans-serif", backgroundColor: '#fff' }}>
      {/* ✅ 텍스트 대신 이미지 로고 적용 */}
      <img
        src="/images/logo.png"
        alt="BBOOK 로고"
        onClick={() => navigate('/')}
        style={{
          height: '45px',
          display: 'block',
          margin: '60px auto 30px auto',
          cursor: 'pointer'
        }}
      />

      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <label>이름 *</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />

        <label>아이디 *</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />

        <label>비밀번호 *</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />

        <label>비밀번호 확인 *</label>
        <input
          type="password"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          style={inputStyle}
        />

        <h3 style={{ color: '#4a7efc', marginTop: '13px', marginBottom: '25px' }}>약관동의</h3>

        <div>
          <label>
            <input type="checkbox" checked={agreeAll} onChange={handleAllAgree} />
            &nbsp; 모두 동의
          </label>

          <div style={agreeRow}>
            <label>
              <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
              &nbsp; [필수] BBOOK 이용약관
            </label>
            <button onClick={() => openModal('terms')} style={viewButton}>내용보기</button>
          </div>

          <div style={agreeRow}>
            <label>
              <input type="checkbox" checked={agreePrivacy} onChange={(e) => setAgreePrivacy(e.target.checked)} />
              &nbsp; [필수] 개인정보 수집 및 동의
            </label>
            <button onClick={() => openModal('privacy')} style={viewButton}>내용보기</button>
          </div>

          <div style={agreeRow}>
            <label>
              <input type="checkbox" checked={agreeAd} onChange={(e) => setAgreeAd(e.target.checked)} />
              &nbsp; [선택] 맞춤형 광고 수신 동의
            </label>
            <button onClick={() => openModal('ad')} style={viewButton}>내용보기</button>
          </div>
        </div>

        <button onClick={handleSubmit} style={submitButton}>
          회원 가입하기
        </button>
      </div>

      {showModal && (
        <div style={modalOverlay} onClick={closeModal}>
          <div style={modalBox} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} style={xButton}>×</button>
            <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0 20px 0',
  fontSize: '14px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  backgroundColor: '#f1f1f1',
  boxSizing: 'border-box',
};

const agreeRow = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const viewButton = {
  fontSize: '12x',
  color: '#4a7efc',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'underline',
};

const submitButton = {
  ...inputStyle,
  marginTop: '32px',
  backgroundColor: '#4a7efc',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const modalOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalBox = {
  position: 'relative',
  width: '300px',
  padding: '10px 20px 20px 20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
};

const xButton = {
  position: 'absolute',
  top: '10px',
  right: '15px',
  background: 'none',
  border: 'none',
  fontSize: '20px',
  fontWeight: 'bold',
  cursor: 'pointer',
  color: '#999',
};

export default JoinPage;
