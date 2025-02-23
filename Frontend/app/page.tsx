// app/page.tsx
'use client'; // This is a client component (if you need client-side interactivity)
import React from 'react';
import App from '.././src/App'; // Or wherever your main App component is located

const Page: React.FC = () => {
  return (
    <div> {/* Or any other container element */}
      <App />
    </div>
  );
};

export default Page;