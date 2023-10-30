import type { NextPage } from 'next'
import Image from 'next/image'
import Bridge from '../components/Icons/Bridge'
import styles from '../styles/Gallery.module.css'; // 假设你有一个外部的CSS文件

const getImages = () => {
  return [
    { src: '/cyberpunk1.jpeg', width: 800, height: 600, link: '/cyber' },
    { src: '/gunnrose.webp', width: 500, height: 400, link: '/concert' },
    { src: '/husky1.avif', width: 800, height: 600, link: '/animal' },
    { src: '/art1.webp', width: 800, height: 600, link: '/art' },
    { src: '/eva01.jpeg', width: 800, height: 600, link: '/comic' },
  ];
};

const Home: NextPage = () => {
  const images = getImages();

  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
              Image Gallery
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              Just for demo :) Click any image to see some similar topic images
            </p>
          </div>
          {images.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <a href={ image.link ? image.link : '/' }>
              <Image
                src={image.src}
                alt={`Gallery image ${index}`}
                width={image.width}
                height={image.height}
                layout="responsive"
                objectFit="cover"  
                className='m-1'
              />
            </a>
          </div>
        ))}
        </div>
      </main>
      <footer className="p-6 text-center text-white/30 sm:p-12">
        Created by tianluan@myyahoo.com, all images are from website and only used for demo purpose.
      </footer>
    </>
  )
}

export default Home

