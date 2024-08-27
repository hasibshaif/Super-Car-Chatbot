import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Car Chatbot",
  // You can also set other metadata here
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Super Car Chatbot to get information from car manuals" />
        </head>
        <body className={inter.className}>
          <SignedIn>
            <div style={{ 
              position: 'fixed', 
              top: '10px', 
              right: '10px', 
              zIndex: 1000, 
              border: '2px solid black', 
              padding: '5px',
              borderRadius: '15px',
              backgroundColor: 'white',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)', 
              }}
            >
              <UserButton showName/>
            </div>
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
