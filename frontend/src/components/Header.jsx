import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import logoImg from '../assets/logo.png'; // 로고 이미지 import

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

  const dynamicSearchWrapper = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#eaf4ff',
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    borderBottomLeftRadius: query.trim() ? '0px' : '24px',
    borderBottomRightRadius: query.trim() ? '0px' : '24px',
    padding: '0px 20px',
    marginTop: '45px',
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
            style={searchInput}
          />
          <IoSearchSharp
            style={searchIcon}
            onClick={() => {
              if (query.trim()) {
                navigate(`/search?q=${encodeURIComponent(query)}`);
                setQuery('');
                setResults([]);
              }
            }}
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
                    navigate(`/search?q=${encodeURIComponent(query)}`);
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

// 스타일
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
  marginTop: '55px',
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
