import { useEffect } from 'react';
import UnityMandelbrot from './components/UnityMandelbrot';

export default function App() {
  useEffect(() => {
    document.title = 'mandelbrot explorer';
  });
  return (
    <div className='text-center bg-amber-100 h-screen'>
      <div>
        <p className='pt-10'>V = V^2 + C</p>
        <div className='mt-5 italic'>
          <a href='https://github.com/skyleilani/fractal-shader'>
            {' '}
            view github repo{' '}
          </a>
        </div>
        <div className='flex justify-center'>
          <UnityMandelbrot />
        </div>
      </div>
      <div className='justify-center flex '>
        <div className=' w-2/4 mt-10 justify-center '>
          <h4>use WASD keys to navigate fractal</h4>
          <p>
            <i>
              W - zoom in
              <br />
              S - zoom out
              <br />
              A - move left
              <br />
              D - move right
              <br />Q & E - rotate
            </i>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
