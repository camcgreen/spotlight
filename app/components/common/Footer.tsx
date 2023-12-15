const Footer = () => {
  return (
    <footer className='h-24 flex items-center lg:justify-end p-4 lg:p-8'>
      <a
        href='mailto:hello@camgreen.works'
        target='_blank'
        rel='noopener noreferrer'
        className='text-black text-opacity-80 hover:text-opacity-50 transition-colors text-sm underline'
      >
        ✉️ - hello@camgreen.works
      </a>
    </footer>
  )
}

export default Footer
