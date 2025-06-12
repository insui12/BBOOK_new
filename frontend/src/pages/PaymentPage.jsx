import React, { useState } from "react";
import NaverPayImg from "../assets/naverpay.png";
import SamsungPayImg from "../assets/samsungpay.png";

export default function PaymentPage() {
  const rentCount = 2;
  const unitPrice = 5000;
  const totalPrice = rentCount * unitPrice;

  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [tradeLocation, setTradeLocation] = useState("");

  return (
    <div style={styles.page}>
      {/* 상단 단계 표시 */}
      <div style={styles.stepBar}>
        <span style={{ color: "#3478f6", fontWeight: "bold" }}>장바구니</span>
        <span> &gt; </span>
        <span style={{ color: "#333", fontWeight: "bold" }}>주문/결제</span>
        <span> &gt; </span>
        <span style={{ fontWeight: "bold" }}>주문완료</span>
      </div>

      <h1 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "24px" }}>＜ 결제</h1>

      <div style={styles.container}>
        {/* 왼쪽 영역 */}
        <div style={styles.leftBox}>
          <div style={styles.groupBox}>
            {/* 교재명 */}
            <div style={styles.sectionBox}>
              <div style={styles.sectionTitle}>교재</div>
              <div style={styles.textRow}>
                총 대여 교재 : <strong>{rentCount}권</strong>{" "}
                <a href="#" style={styles.link}></a>
              </div>
            </div>

            {/* 결제수단 */}
            <div style={styles.sectionBox}>
              <div style={styles.sectionTitle}>결제수단</div>
              <label style={styles.radioRow}>
                <input
                  type="radio"
                  name="pay"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                />
                <strong style={{ marginLeft: "6px" }}>무통장입금(가상계좌)</strong>
              </label>

              <label style={styles.radioRow}>
                <input
                  type="radio"
                  name="pay"
                  checked={paymentMethod === "simple"}
                  onChange={() => setPaymentMethod("simple")}
                />
                <span style={{ marginLeft: "6px", display: "inline-flex", alignItems: "center" }}>
                  간편결제 (
                  <img src={NaverPayImg} alt="naverpay" style={styles.icon} />
                  <img src={SamsungPayImg} alt="samsungpay" style={styles.icon} />
                  )
                </span>
              </label>

              <label style={styles.radioRow}>
                <input
                  type="radio"
                  name="pay"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <span style={{ marginLeft: "6px" }}>신용/체크카드</span>
              </label>
            </div>

            {/* 거래 장소 */}
            <div style={styles.sectionBox}>
              <div style={styles.sectionTitle}>거래 장소</div>
              <label style={styles.radioRow}>
                <input
                  type="radio"
                  name="location"
                  checked={tradeLocation === "box"}
                  onChange={() => setTradeLocation("box")}
                />
                <span style={{ marginLeft: "6px" }}>
                  보관함 거래 <a href="#" style={styles.link}></a>
                </span>
              </label>
              <label style={styles.radioRow}>
                <input
                  type="radio"
                  name="location"
                  checked={tradeLocation === "direct"}
                  onChange={() => setTradeLocation("direct")}
                />
                <span style={{ marginLeft: "6px" }}>
                  직거래 <a href="#" style={styles.link}></a>
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* 오른쪽 결제 박스 */}
        <div style={styles.rightBox}>
          <h3 style={styles.paymentTitle}>결제 예정 금액</h3>

          <div style={styles.row}>
            <span>대여료</span>
            <span>{totalPrice.toLocaleString()}원</span>
          </div>
          <div style={styles.row}>
            <span>배송비</span>
            <span>0원</span>
          </div>
          <div style={styles.row}>
            <span>할인</span>
            <span>0원</span>
          </div>

          <hr style={{ margin: "16px 0", borderColor: "#ddd" }} />

          <div style={styles.row}>
            <strong>총 결제 금액</strong>
            <strong>{totalPrice.toLocaleString()}원</strong>
          </div>

          <button
            style={styles.payButton}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2f51e0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3B5FFF")}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 20px 0", // 하단 여백 줄임
    fontFamily: "'Pretendard', sans-serif"
  },
  stepBar: {
    textAlign: "right",
    fontSize: "16px",
    color: "#555",
    marginTop: "20px",
    marginRight: "50px",
    marginBottom: "-57px"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "40px",
    marginBottom: "0" // 여백 제거
  },
  leftBox: {
    flex: 2
  },
  groupBox: {
    border: "1px solid #e0e0e0",
    borderRadius: "16px",
    padding: "20px",
    backgroundColor: "#fefefe",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  sectionBox: {
    border: "1px solid #eee",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#fafafa"
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: "12px"
  },
  textRow: {
    fontSize: "15px",
    color: "#333"
  },
  radioRow: {
    display: "block",
    marginBottom: "10px"
  },
  link: {
    color: "#3478f6",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "8px"
  },
  icon: {
    width: "24px",
    height: "24px",
    marginLeft: "6px",
    objectFit: "contain"
  },
rightBox: {
  width: "260px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  height: "fit-content",              // ✅ 핵심
  display: "inline-block",            // ✅ 필요 시 함께 사용
  paddingBottom: "12px",              // 여백 최소화
  marginBottom: "0"                   // 불필요한 마진 제거
},
  paymentTitle: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#3B5FFF",
    marginBottom: "16px"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    marginBottom: "8px"
  },
  payButton: {
    marginTop: "20px",
    marginBottom: "0",
    width: "100%",
    padding: "12px",
    fontSize: "15px",
    fontWeight: "bold",
    backgroundColor: "#6595f9",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(59, 95, 255, 0.2)",
    transition: "background-color 0.2s"
  }
};
