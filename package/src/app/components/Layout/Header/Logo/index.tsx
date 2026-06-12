import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-3'>
      <Image
        src='/images/logo.jpg'
        alt='DWP Logo'
        width={50}
        height={50}
      />

      <span className='text-3xl font-semibold'>
        Decoration & Wedding Project
      </span>
    </Link>
  )
}

export default Logo