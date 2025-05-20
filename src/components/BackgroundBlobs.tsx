
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface BackgroundBlobsProps {
  className?: string;
}

const BackgroundBlobs: React.FC<BackgroundBlobsProps> = ({ className = "" }) => {
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobsRef.current) return;
      
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      const blobs = blobsRef.current.children;
      
      Array.from(blobs).forEach((blob, index) => {
        const speed = index * 0.01 + 0.05;
        const htmlBlob = blob as HTMLElement;
        htmlBlob.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={blobsRef} className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div className="blob animate-blob bg-primary/20 w-[800px] h-[800px] -top-[400px] -left-[400px]" />
      <div className="blob animate-blob animation-delay-2000 bg-secondary/20 w-[600px] h-[600px] -bottom-[300px] -right-[300px]" />
      <div className="blob animate-blob animation-delay-4000 bg-primary/10 w-[500px] h-[500px] top-[10%] right-[5%]" />
    </div>
  );
};

export default BackgroundBlobs;
