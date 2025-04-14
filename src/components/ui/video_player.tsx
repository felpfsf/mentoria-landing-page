import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  videoId: string;
};

export default function VslPlayer({ videoId }: Props) {
  const [showVideo, setShowVideo] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <motion.div
      className='w-full aspect-video relative rounded-xl overflow-hidden shadow-xl'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {showVideo ? (
        <iframe
          className='w-full h-full'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title='Vídeo da Mentoria'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      ) : (
        <button
          className='absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors'
          onClick={() => setShowVideo(true)}
          aria-label='Assistir vídeo'
        >
          <img
            src={thumbnail}
            alt='Thumbnail do vídeo'
            className='w-full h-full object-cover absolute z-0'
          />
          <div className='z-10 bg-white/80 hover:bg-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105'>
            <svg
              className='w-8 h-8 text-purple-700'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M6.5 5.5v9l8-4.5-8-4.5z' />
            </svg>
          </div>
        </button>
      )}
    </motion.div>
  );
}
