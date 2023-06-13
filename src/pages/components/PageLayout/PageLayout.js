import './PageLayout.css';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const PageLayout = ({ children, isHeader = true, isFooter = true, isViewer, headerClassName }) => {
  return (
    <div className="page">
      <div className="page__container">
        {isHeader && <Header isViewer={isViewer} className={headerClassName} />}
        <main className="content">
          {children}
        </main>
        {isFooter && <Footer />}
      </div>
    </div>
  );
};

export default PageLayout;
