"use client";
import dynamic from "next/dynamic";
const PreviewCV = dynamic(() => import("@/components/PreviewCV"), {
  ssr: false,
});
import React from "react";

const PreviewPage = () => {
  return <div className="mt-5 max-w-[1200px] mx-auto">
    <PreviewCV />
  </div>;
};

export default PreviewPage;
