import React from 'react';

function PageHeader({ title, subtitle }) {
  return (
    <header className="my-10">
      <h1 className="text-5xl font-bold mb-1">{title}</h1>
      <h2 className="text-base text-textSecondary">{subtitle}</h2>
    </header>
  );
}

export default PageHeader;
