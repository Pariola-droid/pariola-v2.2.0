import { ReactNode } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { useEffect } from 'react';
import { animate } from 'motion';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import fetcher from 'lib/fetcher';
import { NowPlayingSong } from 'lib/types';

// Styles
import styles from './styles/spotify.module.scss';

function AnimatedBars() {
  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    );
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(2.0) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    );
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)',
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    );
  }, []);

  return (
    <div className={styles.animatedBars}>
      <span id="bar1" className={styles.bar} />
      <span id="bar2" className={styles.bar} />
      <span id="bar3" className={styles.bar} />
    </div>
  );
}

declare module 'react-tippy' {
  export interface TooltipProps {
    children?: ReactNode;
  }
}

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <div className={styles.spotifyPlay}>
      {data?.songUrl ? (
        <Tooltip
          html={
            <div>
              <div className={styles.songArtist}>
                {data?.artist ?? 'Spotify'}
              </div>
            </div>
          }
          position="top"
          duration={200}
          size="small"
        >
          <AnimatedBars />
        </Tooltip>
      ) : (
        <Image src="/home/spotify.png" height={25} width={25} alt="spotify" />
      )}
      <div className={styles.songTitle}>
        {data?.songUrl ? (
          <a href={data.songUrl} target="_blank" rel="noopener noreferrer">
            {data.title}
          </a>
        ) : (
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify?
          </a>
        )}
      </div>
    </div>
  );
}
