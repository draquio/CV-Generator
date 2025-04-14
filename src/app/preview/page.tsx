"use client";
import dynamic from 'next/dynamic';
const PreviewCV = dynamic(() => import('@/components/PreviewCV'), { ssr: false });
import React from 'react'

const PreviewPage = () => {
  return (
    <PreviewCV />
  )
}

export default PreviewPage
