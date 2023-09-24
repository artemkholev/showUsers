// // Примеры вызова функций, в консоли можно увидеть возвращаемые результаты
// requestUsers({ name: "", age: "", limit: 4, offset: 0 }).then(console.log);
// requestUsersWithError({ name: "", age: "", limit: 4, offset: 0 }).catch(
//   console.error
// )
import { Route, Routes } from 'react-router-dom';
import { PageWrapper } from "./components/common/PageWrapper"
import "./styles.css";
import Requirements from "./Requirements";
import { ShowUsersContainer } from './containers/ShowUserContainer';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<PageWrapper />}>
        <Route path="/" element={<Requirements />} />
        <Route path="/showUsers" element={<ShowUsersContainer />} />
      </Route>
    </Routes>
  );
}

export default App;