import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentCompletePage() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* 상단 단계 표시 */}
      <div style={styles.stepBar}>
        <span style={{ color: "#333", fontWeight: "bold" }}>장바구니</span>
        <span> &gt; </span>
        <span style={{ color: "#333", fontWeight: "bold" }}>주문/결제</span>
        <span> &gt; </span>
        <span style={{ color: "#3478f6", fontWeight: "bold" }}>주문완료</span>
      </div>

      {/* 완료 타이틀 */}
      <h1 style={styles.title}>🎉 주문이 완료되었습니다!</h1>

      {/* 내용 박스 */}
      <div style={styles.box}>
        <p style={styles.message}>
          주문이 정상적으로 접수되었습니다.<br />
          결제 및 거래 정보를 확인하고 안내드릴 예정입니다.
        </p>

        <button
          onClick={() => navigate("/")}
          style={styles.homeButton}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2f51e0")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3B5FFF")}
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 20px 0",
    fontFamily: "'Pretendard', sans-serif"
  },
  stepBar: {
    textAlign: "right",
    fontSize: "16px",
    color: "#555",
    marginTop: "20px",
    marginRight: "50px",
    marginBottom: "-40px"
  },
  title: {
    fontSize: "28px",
    fontWeight: 800,
    marginBottom: "30px",
    color: "#222"
  },
  box: {
    border: "1px solid #ddd",
    borderRadius: "16px",
    padding: "40px",
    backgroundColor: "#fefefe",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    textAlign: "center"
  },
  message: {
    fontSize: "18px",
    color: "#444",
    marginBottom: "30px",
    lineHeight: "1.6"
  },
  homeButton: {
    padding: "14px 28px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#3B5FFF",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.2s"
  }
};
