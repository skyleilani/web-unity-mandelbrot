const UnityMandelbrot = () => {
  return (
    <div className='mt-10'>
      <iframe
        src='/unity/index.html'
        title='Mandelbrot Explorer'
        width={900}
        height={550}
      />
    </div>
  );
};

export default UnityMandelbrot;
