'use client';

import { useState } from 'react';
import Image from 'next/image';

interface YouTubeThumbnailProps {
  youtubeId: string;
  alt: string;
}

export function YouTubeThumbnail({ youtubeId, alt }: YouTubeThumbnailProps) {
  const maxResUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  const hqUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const [src, setSrc] = useState(maxResUrl);

  return (
    <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-t-md overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setSrc(hqUrl)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
