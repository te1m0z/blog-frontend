// import * as React from 'react';
import React from 'react';
import { useEffect, useState } from 'react';
import { CategoryContext } from '@/app/contexts/category';
import { ICategory } from '@/entites/category/types';
import { LocalizedLink } from '@/shared'
import * as S from './styles';
import ThemeToggler from '@/widgets/ThemeToggler';

export function AppHeader() {
  const categoryStore = React.useContext(CategoryContext);

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await categoryStore.fetchTop();

      setCategories(response);
    }

    fetchCategories();
  }, [categoryStore]);

  return (
    <S.Header> 
            <div className="container">
                <S.Inner>
                    <S.LogoBlock>
                        <LocalizedLink to="/">Te1m0z</LocalizedLink>
                    </S.LogoBlock>
                    <S.MenuBlock>
                        <ul>
                            <li>
                                <LocalizedLink to="/notes">Notes</LocalizedLink>
                            </li>
                            <li>
                                <LocalizedLink to="/portfolio">Portfolio</LocalizedLink>
                            </li>
                            <li>
                                <LocalizedLink to="/about">About me</LocalizedLink>
                            </li>
                        </ul>
                        {/* {userStore.isAuth ? 'auth' : 'not auth'} */}
                    </S.MenuBlock>
                    <S.RightBlock>
                        <S.ThemeBlock>
                            <ThemeToggler />
                        </S.ThemeBlock>
                        {/* <LocaleToggler /> */}
                    </S.RightBlock>
                </S.Inner>
            </div>
        </S.Header> 
  )
}
