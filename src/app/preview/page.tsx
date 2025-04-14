"use client";
// import PreviewCV2 from '@/pages/PreviewCV2';
import dynamic from 'next/dynamic';
// import PreviewCV from '@/pages/PreviewCV'
const PreviewCV2 = dynamic(() => import('../../pages/PreviewCV2'), { ssr: false });
import React from 'react'

const PreviewPage = () => {
  return (
    <PreviewCV2 />
  )
}

export default PreviewPage
