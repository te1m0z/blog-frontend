import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from '@/app/contexts/user';
import { NotesProvider } from '@/app/contexts/note';
import { CategoryProvider } from '@/app/contexts/category';
import { router } from '@/app/router';
import { AppStyles } from '@/app/styles';
import { AppThemeProvider } from '@/app/contexts/theme'

import './app/styles/custom.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <UserProvider>
    <NotesProvider>
      <CategoryProvider>
        <AppThemeProvider>
          <RouterProvider router={router} />
          <AppStyles />
        </AppThemeProvider>
      </CategoryProvider>
    </NotesProvider>
  </UserProvider>,
);
