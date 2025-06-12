// src/pages/MainPage.jsx
import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import UserMenu from '../components/UserMenu';
import logoImg from '../assets/logo.png'; // ✅ 로고 이미지 import 추가

const sampleBooks = [
  { id: 1, title: '씽크 파이썬', course: '파이썬 프로그래밍', professor: '양근석' },
  { id: 2, title: '자료구조와 알고리즘', course: '자료구조', professor: '양근석' },
  { id: 3, title: '컴퓨터 네트워크', course: '네트워크', professor: '양근석' },
  { id: 4, title: '인공지능 개론', course: 'AI입문', professor: '양근석' },
];

function highlightMatch(text, query) {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const matchIndex = lowerText.indexOf(lowerQuery);

  if (matchIndex === -1) return text;

  return (
    <>
      {text.substring(0, matchIndex)}
      <strong>{text.substring(matchIndex, matchIndex + query.length)}</strong>
      {text.substring(matchIndex + query.length)}
    </>
  );
}

export default function MainPage({ isLoggedIn, setIsLoggedIn }) {
  const [query, setQuery] = useState('');
  const [hover, setHover] = useState(false);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleQueryChange = (value) => {
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
      return;
    }

    const keyword = value.toLowerCase();
    const filtered = sampleBooks.filter((book) =>
      book.title.toLowerCase().includes(keyword) ||
      book.course.toLowerCase().includes(keyword) ||
      book.professor.toLowerCase().includes(keyword)
    );

    setResults(filtered);
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div style={styles.container}>
      {/* 상단 유틸 메뉴 */}
      <UserMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* ✅ 텍스트 로고 → 이미지 로고로 변경 */}
      <img src={logoImg} alt="BBOOK 로고" style={styles.logoImage} />

      <div style={styles.searchWrapper}>
        <div style={styles.inputBox}>
          <input
            type="text"
            placeholder="책 제목 / 수업명 / 교수명"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={styles.input}
          />
          <div
            style={{
              ...styles.iconWrapper,
              ...(hover ? styles.iconWrapperHover : {}),
            }}
            onClick={handleSearch}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <IoSearchSharp style={styles.icon} />
          </div>
        </div>

        <div
          style={{
            ...styles.resultsBox,
            maxHeight: query.trim() ? '300px' : '0px',
            padding: query.trim() ? '8px 0' : '0px',
          }}
        >
          {query.trim() && results.length > 0 ? (
            results.map((book) => (
              <div key={book.id} style={styles.resultItem}>
                {highlightMatch(book.title, query)} | {highlightMatch(book.course, query)} | {highlightMatch(book.professor, query)}
              </div>
            ))
          ) : query.trim() && results.length === 0 ? (
            <div style={styles.noResult}>검색 결과가 없습니다.</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100dvh',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '150px',
    fontFamily: "'Noto Sans KR', sans-serif",
    overflow: 'hidden',
    position: 'relative',
  },
  // ✅ 텍스트 로고 삭제 후 이미지 로고 스타일 추가
  logoImage: {
    height: '50px',
    marginBottom: '30px',
    marginTop: '140px',
  },
  searchWrapper: {
    backgroundColor: '#eaf4ff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '580px',
    transition: 'all 0.25s ease',
    overflow: 'hidden',
    borderRadius: '24px',
  },
  inputBox: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    height: '44px',
  },
  input: {
    flex: 1,
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '16px',
    outline: 'none',
    color: '#333',
  },
  iconWrapper: {
    padding: '4px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapperHover: {
    backgroundColor: '#b3d9ff',
  },
  icon: {
    fontSize: '20px',
    color: '#0094ff',
  },
  resultsBox: {
    overflowY: 'auto',
    transition: 'all 0.25s ease',
  },
  resultItem: {
    padding: '10px 20px',
    fontSize: '15px',
    color: '#111',
    cursor: 'default',
  },
  noResult: {
    padding: '10px 20px',
    fontSize: '15px',
    color: '#888',
  },
};
