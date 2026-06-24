// src/components/Layout.tsx
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            {/* You could add a Footer here if needed */}
        </div>
    );
};

export default Layout;
