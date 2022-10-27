import React from 'react';

function Footer() {
  return (
    <footer className="bg-BURed text-center py-1">
      <p className="text-contrastText text-sm">
        💻 - Construido por
        <a
          className="mx-1"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          @AntonioAyola
        </a>
        con 🖤 en 2022 🇲🇽
      </p>
    </footer>
  );
}

export default Footer;
