import React, { useState } from "react";

// *반드시* public/index.html <head>에 몬트세라트 폰트 추가!
// <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet">

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "미적분학",
      author: "김윤진",
      price: 2900,
      image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791165215098.jpg",
    },
    {
      id: 2,
      title: "미적분학",
      author: "김윤진",
      price: 2900,
      image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791165215098.jpg",
    },
  ]);

  // 수량 변경
  const handleQuantityChange = (id, delta) => {
    setItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item
      )
    );
  };

  // 삭제
  const handleRemove = id => {
    setItems(items => items.filter(item => item.id !== id));
  };

  // 총 대여 금액
  const totalRentPrice = items.reduce(
    (sum, item) => sum + (item.price * (item.quantity || 1)),
    0
  );

  // 주문 결제 페이지 이동 (실제 라우터라면 navigate 사용)
  const handleOrder = () => {
    window.location.href = "/order-payment";
  };

  return (
    <div
      style={{
        fontFamily: "Pretendard, 'Montserrat', sans-serif",
        background: "#fff",
        maxWidth: "1440px",
        minHeight: "2500px",
        margin: "0 auto",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 로고 */}
      <div style={{ textAlign: "center", margin: "70px 0 0 0" }}>
        <span
          style={{
            fontFamily: "'Montserrat', Pretendard, sans-serif",
            fontWeight: 900,
            fontSize: "80px",
            color: "#5288F8",
            letterSpacing: "2px",
            textShadow: "0 2px 16px #7ba7fc55, 0 8px 24px #7ba7fc15",
            lineHeight: "1",
            userSelect: "none",
          }}
        >
          BBOOK
        </span>
      </div>

      {/* 네비게이션(오른쪽 정렬, 크기 늘림) */}
      <div style={{
        maxWidth: "1100px",
        margin: "38px auto 0 auto",
        display: "flex",
        justifyContent: "flex-end",
      }}>
        <div style={{
          fontSize: "25px",
          color: "#888",
          fontWeight: 400,
          letterSpacing: "-1px"
        }}>
          <span style={{ color: "#888" }}>01 옵션선택 &gt; </span>
          <span style={{ color: "#5288F8", fontWeight: 700 }}>02 내 책장</span>
          <span style={{ color: "#888" }}> &gt; </span>
          <span style={{ color: "#222", fontWeight: 600 }}>03 주문/결제</span>
          <span style={{ color: "#888" }}> &gt; </span>
          <span style={{ color: "#444", fontWeight: 700 }}>04 주문완료</span>
        </div>
      </div>

      {/* <내 책장(n) 왼쪽 정렬, 크기+여백 늘림 */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "52px auto 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <h1
          style={{
            fontSize: "46px",
            fontWeight: 900,
            margin: 0,
            letterSpacing: "-1px",
            color: "#222"
          }}
        >
          &lt; 내 책장(
          <span style={{ color: "#5288F8" }}>{items.length}</span>)
        </h1>
      </div>

      {/* 탭 (내 책장 > 주문 결제) - 좌/우 박스에 맞춰 넓게, 크기 크게 */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto 38px auto",
          display: "flex",
          alignItems: "center",
          background: "#f8fafd",
          borderRadius: "18px 18px 0 0",
          border: "2.5px solid #B7D3FC",
          borderBottom: "5px solid #B7D3FC",
          boxShadow: "0 10px 30px 0 #85aaff26",
        }}
      >
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontWeight: 900,
            color: "#5288F8",
            fontSize: "38px",
            padding: "38px 0",
            fontFamily: "'Montserrat', Pretendard, sans-serif",
          }}
        >
          내 책장
        </div>
        <div
          style={{
            width: "56px",
            textAlign: "center",
            fontSize: "42px",
            color: "#5288F8",
            fontWeight: 700,
          }}
        >
          &gt;
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontWeight: 900,
            color: "#222",
            fontSize: "38px",
            padding: "38px 0",
            fontFamily: "'Montserrat', Pretendard, sans-serif",
          }}
        >
          주문 결제
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "36px",
          flexWrap: "wrap",
        }}
      >
        {/* 왼쪽 박스 */}
        <div style={{
          flex: 2,
          marginBottom: "32px",
          transition: "height 0.3s",
        }}>
          <div
            style={{
              border: "2px solid #e7eaf3",
              background: "#fff",
              padding: "42px 42px 32px 42px",
              borderRadius: "24px",
              minHeight: items.length === 0 ? "200px" : "410px",
              boxShadow: "0 8px 28px 0 #7ba7fc22",
              transition: "min-height 0.3s",
            }}
          >
            <div
              style={{
                fontWeight: 900,
                fontSize: "27px",
                color: "#5288F8",
                marginBottom: "28px"
              }}
            >
              내 책장
            </div>
            {items.length === 0 ? (
              <div
                style={{
                  color: "#888",
                  textAlign: "center",
                  fontSize: "20px",
                  padding: "100px 0"
                }}
              >
                담은 책이 없습니다.
              </div>
            ) : (
              items.map(item => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "40px"
                  }}
                >
                  <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                    <img
                      src={item.image}
                      alt="미적분학"
                      style={{
                        width: "120px",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        border: "2px solid #e5e9f3",
                        boxShadow: "0 2px 12px #85aaff35"
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 900, fontSize: "26px", color: "#212326", marginBottom: "8px" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "20px", color: "#5288F8", fontWeight: 700, marginBottom: "4px" }}>
                        {item.author}
                      </div>
                      <div style={{ fontSize: "23px", color: "#fa4d2c", fontWeight: 900 }}>
                        {item.price.toLocaleString()}원
                      </div>
                      {/* 수량 버튼 */}
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "10px" }}>
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          style={{
                            width: "34px",
                            height: "34px",
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#5288F8",
                            border: "2px solid #c2d3fa",
                            borderRadius: "9px",
                            background: "#fafdff",
                            cursor: "pointer",
                            outline: "none"
                          }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: "22px", width: "40px", textAlign: "center" }}>{item.quantity || 1}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          style={{
                            width: "34px",
                            height: "34px",
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#5288F8",
                            border: "2px solid #c2d3fa",
                            borderRadius: "9px",
                            background: "#fafdff",
                            cursor: "pointer",
                            outline: "none"
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 삭제 버튼 */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    style={{
                      border: "none",
                      background: "none",
                      color: "#949ca9",
                      textDecoration: "underline",
                      fontSize: "18px",
                      cursor: "pointer",
                      marginLeft: "26px",
                      minWidth: "52px"
                    }}
                  >
                    삭제
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        {/* 오른쪽 박스 */}
        <div style={{
          flex: 1,
          marginBottom: "32px",
          minWidth: "310px",
        }}>
          <div
            style={{
              border: "2px solid #e7eaf3",
              background: "#fff",
              padding: "42px 32px",
              borderRadius: "24px",
              minHeight: "320px",
              height: "fit-content",
              boxShadow: "0 8px 28px 0 #7ba7fc22",
            }}
          >
            <div style={{ fontWeight: 900, fontSize: "27px", color: "#5288F8", marginBottom: "32px" }}>
              대여 예상 금액
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "22px",
              fontSize: "22px"
            }}>
              <div>총 대여 금액</div>
              <div style={{ fontWeight: 900, color: "#212326" }}>{totalRentPrice.toLocaleString()}원</div>
            </div>
            <hr />
            <button
              onClick={handleOrder}
              style={{
                width: "100%",
                marginTop: "32px",
                padding: "20px 0",
                background: "#5288F8",
                color: "#fff",
                borderRadius: "12px",
                border: "none",
                fontWeight: 900,
                fontSize: "23px",
                cursor: "pointer",
                boxShadow: "0 2px 10px #e6f1ff55"
              }}
            >
              대여하기 ({items.length})
            </button>
          </div>
        </div>
      </div>
      {/* 푸터 */}
      <footer
        style={{
          marginTop: "auto",
          background: "#ededed",
          textAlign: "center",
          padding: "50px 0 60px 0",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          fontFamily: "'Montserrat', Pretendard, sans-serif"
        }}
      >
        <div
          style={{
            fontWeight: 900,
            fontSize: "50px",
            color: "#5288F8",
            letterSpacing: "2px",
            marginBottom: "16px"
          }}
        >
          BBOOK
        </div>
        <div style={{ fontWeight: 700, fontSize: "28px", color: "#222" }}>
          010-5493-7476
        </div>
      </footer>
    </div>
  );
}
