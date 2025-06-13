// src/pages/MainPage.jsx
import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import UserMenu from '../components/UserMenu';
import logoImg from '../assets/logo.png';

const sampleBooks = [
  { id: 1, title: 'C++ programming', course: 'C++ 프로그래밍', professor: '안재근' },
  { id: 2, title: '모두의 인공지능 기초수학', course: '인공지능', professor: '안재근' },
  { id: 3, title: '명품 JAVA Programming', course: 'JAVA웹 개발', professor: '안재근' },
  { id: 4, title: '인간관계론', course: '인간관계론', professor: '안재근' },
  { id: 5, title: 'C언어로 쉽게 풀어쓴 자료구조', course: '자료구조', professor: '김숙연' },
  { id: 6, title: 'Do it! 점프 투 파이썬', course: '컴퓨터공학입문과 파이썬', professor: '김숙연' },
  { id: 7, title: '쉽게 풀어쓴 C언어 Express', course: '프로그래밍 입문', professor: '김숙연' },
  { id: 8, title: '리눅스 시스템 원리와 실제', course: '시스템 프로그래밍', professor: '김숙연' },
  { id: 9, title: '컴퓨팅 사고력을 키우는 이산수학 3판', course: '융합이산수학', professor: '양근석' },
  { id: 10, title: '핵심 미분적분학 제9판', course: '미적분학2', professor: '양근석' },
  { id: 11, title: '확률과 통계', course: '확률과 통계', professor: '양근석' },
  { id: 12, title: '알기 쉽게 해설한 파이썬 with 컴퓨팅 사고력', course: '컴퓨팅적 사고', professor: '양근석' },
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
      keyword.includes(book.title.toLowerCase()) ||
      keyword.includes(book.course.toLowerCase()) ||
      keyword.includes(book.professor.toLowerCase()) ||
      book.title.toLowerCase().includes(keyword) ||
      book.course.toLowerCase().includes(keyword) ||
      book.professor.toLowerCase().includes(keyword)
    );

    setResults(filtered);
  };

  const handleSearch = () => {
    if (!query.trim()) return;

    const hardcodedRoutes = {
      '안재근': '/search/안재근',
      '양근석': '/search/양근석',
      '김숙연': '/search/김숙연',
      '프로그래밍': '/search/프로그래밍',
      'C': '/search/C',
<<<<<<< HEAD
      '핵심미적분학': '/book-detail/1',
      '핵심': '/book-detail/1',
      '핵심 미적분학': '/book-detail/1',
      '핵심미적분': '/book-detail/1',
      '미적분학': '/book-detail/1',
      '미적분': '/book-detail/1',
      '미적': '/book-detail/1',
=======
      '핵심 미적분학': '/book-detail/1',
>>>>>>> fffbc17 (last)
    };

    if (hardcodedRoutes[query.trim()]) {
      navigate(hardcodedRoutes[query.trim()]);
    } else {
      navigate(`/search/${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div style={styles.container}>
      <UserMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
  logoImage: {
    height: '50px',
    marginBottom: '30px',
    marginTop: '100px',
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
