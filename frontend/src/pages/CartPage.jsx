import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "C++ programming",
      author: "황기태",
      publisher: "생능출판",
      date: "2018년 3월",
      subject: "C++프로그래밍 (안재근 교수)",
      price: 5000,
      quantity: 4,
      image: "/images/C++.jpg"
    },
        {
      id: 2,
      title: "C언어로 쉽게 풀어쓴 자료구조",
      author: "천인국,공용해,하상호",
      publisher: "생능출판",
      date: "2019년 2월",
      subject: "자료구조 (김숙연 교수)",
      price: 5000,
      quantity: 2,
      image: "/images/자료구조.png"
    },
    {
      id: 3,
      title: "컴퓨팅 사고력을 키우는 이산수학 3판",
      author: "박주미",
      publisher: "한빛아카데미",
      date: "2021년 12월",
      subject: "융합이산수학 (양근석 교수)",
      price: 5000,
      quantity: 1,
      image: "/images/이산수학.png"
    }

  ]);

  const [selected, setSelected] = useState(items.map(() => true));
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    setItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = id => {
    const index = items.findIndex(item => item.id === id);
    setItems(items => items.filter(item => item.id !== id));
    setSelected(selected => selected.filter((_, i) => i !== index));
  };

  const toggleSelect = index => {
    const updated = [...selected];
    updated[index] = !updated[index];
    setSelected(updated);
  };

  const toggleAll = () => {
    const allChecked = selected.every(Boolean);
    setSelected(selected.map(() => !allChecked));
  };

  const handleRemoveAll = () => {
    setItems([]);
    setSelected([]);
  };

  const totalPrice = items.reduce(
    (sum, item, i) => selected[i] ? sum + item.price * item.quantity : sum,
    0
  );

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px", fontFamily: "'Pretendard', sans-serif" }}>
      {/* 상단 단계 표시 */}
      <div style={{
        textAlign: "right",
        fontSize: "16px",
        color: "#555",
        marginTop: "20px",
        marginRight: "50px",
        marginBottom: "-57px",
      }}>
        <span style={{ color: "#3478f6", fontWeight: "bold" }}>장바구니</span>
        <span>&gt;</span>
        <span style={{ color: "#333", fontWeight: "bold" }}>주문/결제</span>
        <span>&gt;</span>
        <span style={{ fontWeight: "bold" }}>주문완료</span>
      </div>

      <h1
        style={{
          fontSize: "28px",
          fontWeight: 800,
          marginBottom: "24px",
          cursor: "pointer",
          display: "inline-block"
        }}
        onClick={() => navigate(-1)}
      >
        ＜ 장바구니
      </h1>

      <div style={{ display: "flex", gap: "36px", alignItems: "flex-start" }}>
        {/* 왼쪽 책 리스트 */}
        <div style={{ flex: 3 }}>
          {/* 상단 전체 선택 */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 20px",
            border: "1px solid #ccc",
            borderRadius: "10px 10px 0 0",
            backgroundColor: "#f7f7f7",
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "2px",
          }}>
            <label>
              <input
                type="checkbox"
                checked={selected.every(Boolean)}
                onChange={toggleAll}
                style={{ marginRight: "8px" }}
              />
              전체 선택
            </label>
            <button onClick={handleRemoveAll} style={{
              background: "none",
              border: "none",
              color: "#777",
              fontSize: "14px",
              cursor: "pointer"
            }}>
              전체 삭제
            </button>
          </div>

          {/* 책 리스트 */}
          <div style={{
            border: "1px solid #ccc",
            borderTop: "none",
            borderRadius: "0 0 10px 10px",
            height: items.length > 2 ? "500px" : "auto",
            overflowY: items.length > 2 ? "auto" : "visible",
            boxSizing: "border-box",
            display: "flex",
            paddingRight: "6px",
            flexDirection: "column",
          }}>
            {items.map((item, index) => (
              <div key={item.id} style={{
                flexShrink: 0,
                padding: "12px 20px",
                borderBottom: index !== items.length - 1 ? "1px solid #eee" : "none",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center"
              }}>
                <input
                  type="checkbox"
                  checked={selected[index]}
                  onChange={() => toggleSelect(index)}
                  style={{ marginRight: "16px", marginTop: "6px" }}
                />
                <img
                  src={item.image}
                  alt="책 이미지"
                  style={{
                    width: "100px",
                    height: "130px",
                    objectFit: "cover",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    marginRight: "16px"
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "4px"
                  }}>
                    <div style={{ fontSize: "16px", fontWeight: "bold" }}>{item.title}</div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#666",
                        fontSize: "13px",
                        cursor: "pointer",
                        textDecoration: "underline"
                      }}
                    >
                      삭제
                    </button>
                  </div>

                  <div style={{ fontSize: "13px", color: "#333" }}>
                    {item.author} (지은이), {item.translator} (옮긴이) | {item.publisher} | {item.date}
                  </div>
                  <div style={{ fontSize: "13px", color: "#1877f2", marginTop: "4px" }}>{item.subject}</div>
                  <div style={{ fontSize: "17px", color: "#e53935", fontWeight: "bold", marginTop: "8px" }}>
                    {item.price.toLocaleString()}원
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1px", gap: "10px" }}>
                    <button onClick={() => handleQuantityChange(item.id, -1)} style={qtyBtn}>−</button>
                    <span style={{ fontSize: "14px", minWidth: "24px", textAlign: "center" }}>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)} style={qtyBtn}>＋</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽 결제 요약 */}
        <div style={{
          flex: 1,
          position: "sticky",
          top: "100px",
          padding: "24px",
          backgroundColor: "#f9fafd",
          border: "1.5px solid #d0e4fd",
          borderRadius: "16px",
          height: "fit-content",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
        }}>
          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#6595f9", marginBottom: "20px" }}>
            결제 예정 금액
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span>대여료</span>
            <span>{totalPrice.toLocaleString()}원</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span>배송비</span>
            <span>0원</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
            <span>할인</span>
            <span>0원</span>
          </div>
          <hr />
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
            fontWeight: "bold"
          }}>
            <span>총 결제 금액</span>
            <span>{totalPrice.toLocaleString()}원</span>
          </div>
          <button
            style={{
              marginTop: "24px",
              width: "100%",
              padding: "14px",
              backgroundColor: "#6595f9",
              color: "#fff",
              fontWeight: 700,
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(101, 149, 249, 0.3)"
            }}
            onClick={() => navigate('/PaymentPage/:id')}  // ✅ 여기에 추가
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}

const qtyBtn = {
  width: "30px",
  height: "30px",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#468ef9",
  border: "1px solid #c9defc",
  borderRadius: "6px",
  background: "#f7fbff",
  cursor: "pointer"
};
