import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const News = ({ isAuth }) => {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedNews = JSON.parse(localStorage.getItem('news')) || [];
    setNews(savedNews);
  }, []);

  const handleAddNews = () => {
    if (!title || !content) return;
    
    const newNews = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString()
    };

    const updatedNews = [...news, newNews];
    setNews(updatedNews);
    localStorage.setItem('news', JSON.stringify(updatedNews));
    setTitle('');
    setContent('');
  };

  const handleDeleteNews = (id) => {
    const updatedNews = news.filter(item => item.id !== id);
    setNews(updatedNews);
    localStorage.setItem('news', JSON.stringify(updatedNews));
  };

  return (
    <div>
      <h2>Новости</h2>
      {news.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <small>{item.date}</small>
          {isAuth && (
            <button onClick={() => handleDeleteNews(item.id)}>Удалить</button>
          )}
          <hr />
        </div>
      ))}

      {isAuth && (
        <div>
          <h3>Добавить новость</h3>
          <input
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Содержание"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleAddNews}>Добавить</button>
        </div>
      )}
    </div>
  );
};

export default News;