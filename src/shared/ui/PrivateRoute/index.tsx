import React, { useContext, ComponentType } from 'react';
import { UserContext } from '@/app/contexts/user';
import NotFoundPage from '@/pages/NotFound';

export function withAuth<P extends JSX.IntrinsicAttributes>(Component: ComponentType<P>): React.FC<P> {
  return function AuthenticatedComponent(props: P) {
    const userStore = useContext(UserContext);

    return userStore?.isAuth ? <Component {...props} /> : <NotFoundPage />;
  };
}
