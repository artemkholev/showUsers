import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import style from './Header.module.scss'


const Header = observer(() => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.wrapperHeader}>        
          <div className={style.userTabs}>
            <NavLink
              to="/showUsers"
              className={style.catalogUser}
            >
                showUser
            </NavLink>
            <NavLink
              to="/"
              className={style.back}
            >
                back
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
})

export default Header;