import Menu from './modules/Menu/Menu';
import UserRoutes from 'UserRoutes';

export const App = () => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <UserRoutes />
      </main>
    </>
  );
};
