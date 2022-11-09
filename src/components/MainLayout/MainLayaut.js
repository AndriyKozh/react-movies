import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { LoadingContent } from '../../Loading.style';
import Menu from '../Menu/Menu';

const MainLayaut = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Suspense
        fallback={
          <LoadingContent>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </LoadingContent>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayaut;
