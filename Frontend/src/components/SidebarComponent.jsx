import { useState } from 'react';
import '../assets/styles.css';
import '../assets/paginas.css';
import './SideBarCompoennt.css';

const Sidebar = ({ isOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={`sidebar-wrapper ${isOpen ? 'open' : 'closed'} border-end corelementos`}>
      <div className="border-end corelementos px-3" id="sidebar-wrapper">
        <div className="sidebar-heading corelementos mt-3">
          <a href="#!" style={{ textDecoration: 'none', color: 'inherit' }}>
            <dt>PedidoWeb</dt>
          </a>
        </div>

        <div className="list-group list-group-flush mt-3">
          <a className="list-group-item list-group-item-action corelementos p-3" href="pedidos.html">
            <i className="fas fa-list-alt text-gray-200 me-2"></i> Pedidos</a>
          <button 
            type="button"
            className="list-group-item list-group-item-action corelementos d-flex justify-content-between align-items-center p-3 dropdown-btn"
            onClick={handleToggle}>
            <span>
              <i className="fas fa-shopping-cart text-gray-200 me-2"></i> Pedidos
            </span>
              <i className={`fa fa-caret-down transition ${dropdownOpen ? '' : ''}`}></i>
          </button>

          {dropdownOpen && (
            <div className="dropdown-container corelementos ms-4 mb-2">
              <a href="#!" id="pedido_itens" className="dropdown-item">Lançar Pedido</a>
              <a href="#!" id="pedido_itens" className="dropdown-item">Listar Pedidos</a>
            </div>
          )}

          <a className="list-group-item list-group-item-action corelementos p-3" href="#!">
            <i className="fas fa-address-book text-gray-200 me-2"></i> Clientes
          </a>

          <a className="list-group-item list-group-item-action corelementos p-3" href="#!">
            <i className="fas fa-file-alt text-gray-200 me-2"></i> Relatório Comissões
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
