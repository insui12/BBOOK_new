import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5'; // ✅ 돋보기 아이콘 import 추가

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

  // ✅ query 상태에 따라 동적으로 스타일 생성
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
      <div style={logoStyle} onClick={() => navigate('/')}>BBOOK</div>
      <div style={{ position: 'relative', flex: 1, maxWidth: '800px' }}>
        {/* 검색창 */}
        <div style={dynamicSearchWrapper}>
          <input
            type="text"
            placeholder="책 제목 / 수업명 / 교수명"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            style={searchInput}
          />
          <IoSearchSharp style={searchIcon} /> {/* ✅ 이모지 대신 아이콘 사용 */}
        </div>

        {/* 자동완성 결과창 */}
        {query.trim() && (
          <div style={resultsBox}>
            {results.length > 0 ? (
              results.map((book) => (
                <div key={book.id} style={resultItem}>
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

// ✅ 스타일 정의
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

const logoStyle = {
  fontSize: '42px',
  fontWeight: 'bold',
  color: '#007bff',
  marginTop: '40px',
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
  color: '#007bff',
  marginLeft: '12px',
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
  cursor: 'default',
  color: '#111',
};

const noResult = {
  padding: '10px 16px',
  fontSize: '14px',
  color: '#888',
};
