import { useState } from 'react'

import Image from './components/Image.tsx'
import { IMAGES } from './constants/images.ts'

const App = () => {
  const [currentImage] = useState(0);

  return (
    <div className="h-screen flex flex-col items-center px-32 py-16">
        <Image path={IMAGES[currentImage].path} subtitle={IMAGES[currentImage].subtitle} />
    </div>
  )
}

export default App
