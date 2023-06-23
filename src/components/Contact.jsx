function Contact() {
  return (
    <section
      name='contact'
      className='bg-[#0A192F]  w-full h-screen flex items-center justify-center p-4'
    >
      <form
        action={import.meta.env.VITE_FORM_URL}
        method='POST'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            Submit the form below or send me an email at ornella.tomboza@gmail.com
          </p>
        </div>
        <input
          type='text'
          name='name'
          placeholder='Name'
          className='bg-[#ccd6f6] p-2 placeholder-gray-700'
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          className='my-4 p-2 bg-[#ccd6f6] placeholder-gray-700'
        />
        <textarea
          name='message'
          rows='10'
          className='bg-[#ccd6f6] p-2 placeholder-gray-700'
          placeholder='Message'
        ></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-300'>
          Let&apos;s Collaborate
        </button>
      </form>
    </section>
  );
}

export default Contact;
