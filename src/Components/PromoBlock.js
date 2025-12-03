import React from 'react';
import { SiAmazonmusic, SiBandcamp, SiItunes, SiSpotify, SiSoundcloud } from "react-icons/si";

const streamingLinks = {
  BANDCAMP: 'https://bandcamp.com/',
  ITUNES: 'https://music.apple.com/',
  AMAZON: 'https://www.amazon.com/music',
  SPOTIFY: 'https://open.spotify.com/',
  SOUNDCLOUD: 'https://soundcloud.com/',
};

const streamingIcons = {
    BANDCAMP: <SiBandcamp className="inline mr-2" color="#629aa9" />,         // Bandcamp blue
    ITUNES: <SiItunes className="inline mr-2" color="#fa57c1" />,             // iTunes pink
    AMAZON: <SiAmazonmusic className="inline mr-2" color="#ff9900" />,        // Amazon orange
    SPOTIFY: <SiSpotify className="inline mr-2" color="#1db954" />,           // Spotify green
    SOUNDCLOUD: <SiSoundcloud className="inline mr-2" color="#ff5500" />,     // SoundCloud orange
  };

const PromoBlock = () => (
  <section className="text-center py-4">
    <h2 className="text-xl font-normal tracking-super-wide mb-2">LATEST RELEASE: "IN ENTROPY"</h2>
    <p className="text-sm mb-4">STREAMING NOW</p>
    {/* <p className="text-sm mb-4">CDS, VINYL, TAB BOOK, SHIRTS, AND MORE HERE</p> */}

    <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mt-4">
      {Object.entries(streamingLinks).map(([name, url]) => (
        <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl lg:text-6xl mx-2 hover:text-gray-800 transition duration-150 flex items-center"
      >
        {streamingIcons[name]}
      </a>
      ))}
    </div>
  </section>
);

export default PromoBlock;