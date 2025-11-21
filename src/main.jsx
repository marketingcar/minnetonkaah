import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter as Router } from 'react-router-dom';
    import App from '@/App';
    import '@/index.css';
    import { Toaster } from "@/components/ui/toaster";

    ReactDOM.createRoot(document.getElementById('root')).render(
      <>
        <Router>
          <App />
          <Toaster />
        </Router>
      </>
    );