import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.tsx'
import { dark } from '@clerk/themes';

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!CLERK_KEY){
  throw new Error("VITE_CLERK_PUBLISHABLE_KEY not defined.")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ClerkProvider publishableKey={CLERK_KEY} appearance={{
    theme: dark
   }}>
     <App />
   </ClerkProvider>
  </StrictMode>,
)
