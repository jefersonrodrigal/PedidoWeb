import { useState } from 'react';
import Navbar from '../components/NavbarComponent';
import Sidebar from '../components/SidebarComponent';

import '../assets/styles.css';
import '../assets/paginas.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar isOpen={sidebarOpen} />

      <div id="page-content-wrapper" className="w-100">
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className="container-fluid">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;