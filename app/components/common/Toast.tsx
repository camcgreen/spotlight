export default function Toast({
  msg,
  visible,
}: {
  msg: string
  visible: boolean
}) {
  return (
    <div
      className='fixed right-1/2 top-4 translate-x-1/2 flex items-center px-8 py-4 rounded-xl border border-black bg-white z-20 transition-transform duration-300'
      style={{
        transform: visible ? 'translate(50%, 0)' : 'translate(50%, -125%)',
      }}
    >
      <img
        src='/images/tick.svg'
        className='w-6 md:w-8 mr-4'
        alt='Scene successfully updated'
      />
      <p className='text-xs md:text-base'>{msg}</p>
    </div>
  )
}
