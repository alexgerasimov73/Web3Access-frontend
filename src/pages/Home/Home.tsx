import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { store } from '../../store/store';
import { LoginForm } from '../../components/LoginForm';

// TODO: Remove this component.
export const Home = observer(() => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return <div>Loading...</div>;
  }

  if (!store.isAuth) {
    return <LoginForm />;
  }

  return (
    <>
      <h1>{store.isAuth && `The user is authorized ${store.user?.email}`}</h1>
      <h2>{store.user?.isActivated ? 'Account verified' : 'Please verify your accont by email'}</h2>
      <button onClick={() => store.logout()}>Logout</button>
    </>
  );
});
