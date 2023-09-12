'use client'

import Image from 'next/image'
import styles from './page.module.css'
import {Game} from './game.ts'
import React, { useEffect } from 'react';

export default function Home() {

const arenaRef = React.useRef<HTMLDivElement | null>(null);

useEffect(() => {
  if (arenaRef.current) {
    new Game(arenaRef.current);
  }
}, []);

  return (
    <main className={styles.main}>
      <div className={styles.arena} id="arena" ref={arenaRef}>
      </div>
    </main>
  )
}
