"use client";

import { useEffect, useState } from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const [currentUrl, setCurrentUrl] = useState(url);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const shareTitle = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(currentUrl);
  
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;

  return (
    <div className="flex items-center gap-2 ml-auto">
      <span className="text-xs text-muted-foreground">Share:</span>
      <a
        href={linkedinShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary-accent/20 hover:scale-110 transition-all duration-300"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4 text-muted-foreground" />
      </a>
      <a
        href={facebookShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary-accent/20 hover:scale-110 transition-all duration-300"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4 text-muted-foreground" />
      </a>
      <a
        href={twitterShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary-accent/20 hover:scale-110 transition-all duration-300"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4 text-muted-foreground" />
      </a>
    </div>
  );
};

export default ShareButtons;

