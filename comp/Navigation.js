import { Link } from 'react-router-dom';

const Navigation = ({ isAuth, setIsAuth }) => {
  const handleLogout = () => {
    localStorage.setItem('isAuth', 'false');
    setIsAuth(false);
  };

  return (
    <nav>
      <ul>
        <li><Link to="react2\src\pages\Home.js">Главная</Link></li>
        <li><Link to="react2\src\pages\News.js">Новости</Link></li>
        {isAuth ? (
          <>
            <li><Link to="react2\src\pages\Profile.js">Профиль</Link></li>
            <li><button onClick={handleLogout}>Выйти</button></li>
          </>
        ) : (
          <li><Link to="react2\src\pages\Login.js">Войти</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;