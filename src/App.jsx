
import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';

// Lazy load pages to reduce initial bundle size
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Team = lazy(() => import('@/pages/Team'));
const NewClients = lazy(() => import('@/pages/NewClients'));
const IntegrativeMedicine = lazy(() => import('@/pages/IntegrativeMedicine'));
const PetResources = lazy(() => import('@/pages/PetResources'));
const Contact = lazy(() => import('@/pages/Contact'));

function App() {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen bg-brand-background font-minion-pro">
            <Header />
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <Suspense fallback={<LoadingSpinner />}>
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/services/integrative-medicine" element={<IntegrativeMedicine />} />
                            <Route path="/about/meet-the-team" element={<Team />} />
                            <Route path="/new-clients" element={<NewClients />} />
                            <Route path="/about/pet-resources" element={<PetResources />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </Suspense>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}

export default App;
