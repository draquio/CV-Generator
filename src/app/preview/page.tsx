"use client";
import dynamic from 'next/dynamic';
const PreviewCV2 = dynamic(() => import('../../pages/PreviewCV2'), { ssr: false });
import React from 'react'

const PreviewPage = () => {
  return (
    <PreviewCV2 />
  )
}

export default PreviewPage
