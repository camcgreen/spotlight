export default function Loading() {
  return (
    <ul className='grid gap-4 grid-cols-2 lg:grid-cols-3 auto-rows-fr '>
      <li className='w-full aspect-video rounded-xl bg-gray-300 animate-pulse' />
      <li className='w-full aspect-video rounded-xl bg-gray-300 animate-pulse' />
      <li className='w-full aspect-video rounded-xl bg-gray-300 animate-pulse' />
      {/* <li className='w-full aspect-video rounded-xl bg-gray-200' /> */}
    </ul>
  )
}
