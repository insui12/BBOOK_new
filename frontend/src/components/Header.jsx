import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import logoImg from '../assets/logo.png'; // 로고 이미지 import

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

export default function Header() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

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

    const trimmedQuery = query.trim();
    const predefinedRoutes = ['안재근', '양근석', '김숙연'];

    if (predefinedRoutes.includes(trimmedQuery)) {
      navigate(`/search/${trimmedQuery}`);
    } else {
      navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }

    setQuery('');
    setResults([]);
  };

  const dynamicSearchWrapper = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#eaf4ff',
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    borderBottomLeftRadius: query.trim() ? '0px' : '24px',
    borderBottomRightRadius: query.trim() ? '0px' : '24px',
    padding: '0px 20px',
    marginTop: '20px',
    height: '40px',
    transition: 'border-radius 0.25s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={headerWrapper}>
      <img
        src={logoImg}
        alt="BBOOK 로고"
        style={logoImageStyle}
        onClick={() => navigate('/')}
      />
      <div style={{ position: 'relative', flex: 1, maxWidth: '800px' }}>
        <div style={dynamicSearchWrapper}>
          <input
            type="text"
            placeholder="책 제목 / 수업명 / 교수명"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            style={searchInput}
          />
          <IoSearchSharp
            style={searchIcon}
            onClick={handleSearch}
          />
        </div>

        {query.trim() && (
          <div style={resultsBox}>
            {results.length > 0 ? (
              results.map((book) => (
                <div
                  key={book.id}
                  style={{ ...resultItem, cursor: 'pointer' }}
                  onClick={() => {
                    const trimmed = book.professor.trim();
                    navigate(`/search/${encodeURIComponent(trimmed)}`);
                    setQuery('');
                    setResults([]);
                  }}
                >
                  {highlightMatch(book.title, query)} | {highlightMatch(book.course, query)} | {highlightMatch(book.professor, query)}
                </div>
              ))
            ) : (
              <div style={noResult}>검색 결과가 없습니다.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const headerWrapper = {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  marginBottom: '30px',
  width: '1000px',
  marginLeft: 'auto',
  marginRight: 'auto',
  gap: '40px',
};

const logoImageStyle = {
  height: '47px',
  marginTop: '30px',
  cursor: 'pointer',
};

const searchInput = {
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  fontSize: '16px',
  flex: 1,
  color: '#333',
};

const searchIcon = {
  fontSize: '20px',
  color: '#0094ff',
  marginLeft: '12px',
  cursor: 'pointer',
};

const resultsBox = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: '#eaf4ff',
  borderBottomLeftRadius: '24px',
  borderBottomRightRadius: '24px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  zIndex: 10,
  maxHeight: '250px',
  overflowY: 'auto',
  padding: '8px 0',
  marginTop: '0px',
  transition: 'all 0.25s ease',
};

const resultItem = {
  padding: '10px 16px',
  fontSize: '14px',
  color: '#111',
};

const noResult = {
  padding: '10px 16px',
  fontSize: '14px',
  color: '#888',
};
