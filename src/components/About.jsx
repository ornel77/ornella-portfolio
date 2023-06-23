

function About() {
  return (
    <section name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <article className='sm:text-right text-4xl font-bold'>
              <p>Hi. I&apos;m Ornella. Please take a look around.</p>
            </article>
            <article>
              <p>I am passionate about programming and building projects. That is why few years ago, I got my Technological Studies Degree (DUT) in Computer Science.</p>  
              <br />
              <p>Next in my journey, I decided to work in media and I had the opportunity to work at Radio France for eight years. It didn&apos;t prevent me to stop learning programmation by myself and keeping me up to date with new technologies</p>
            </article>
          </div>
      </div>
    </section>
  );
}

export default About