import bannerImage from '@/asset/Saini (1).png'
import Image from 'next/image'
const HomeBanner = () => {
  return (
    <Image src={bannerImage} alt='banne img' className='w-full h-full' />
  )
}

export default HomeBanner;