const UnityMandelbrot = () => {
  return (
    <div className='mt-10'>
      <iframe
        src='/unity/index.html'
        title='Mandelbrot Explorer'
        width={500}
        height={500}
      />
    </div>
  );
};

export default UnityMandelbrot;
