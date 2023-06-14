import { Skeleton, Image } from '@chakra-ui/react'
import Logo_Image from '../logo.svg'

const ImageSkeleton = () => {
  return (
    <Skeleton boxSize='80%' marginTop = '10vh'>
      <Image boxSize='100%' marginTop = '50px' src={Logo_Image} alt="Dan Abramov" />
    </Skeleton>
  )
}

export default ImageSkeleton