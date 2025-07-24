import '../assets/styles.css';
import '../assets/paginas.css'


const Sidebar = () => {
  return (
    <div className="border-end corelementos" id="sidebar-wrapper">
      <div className="sidebar-heading corelementos">
        <a href="pedidos.html" style={{ textDecoration: 'none', color: 'inherit' }}>
          <dt>Pedido.Net</dt>
        </a>
      </div>

      <div className="list-group list-group-flush">
        <a className="list-group-item list-group-item-action corelementos p-3" href="pedidos.html">
          <i className="fas fa-list-alt text-gray-200"></i> Pedidos
        </a>

        <button className="dropdown-btn">
          <i className="fas fa-shopping-cart text-gray-200"></i> Pedidos
          <i className="fa fa-caret-down"></i>
        </button>

        <div className="dropdown-container">
          <a href="#" id="pedido_itens">Pré-Pedido</a>
          <a href="lancar_pedidos.html" id="pedido_itens">Lançar Pedido</a>
          <a href="#" id="pedido_itens">Listar Pedidos</a>
        </div>

        <a className="list-group-item list-group-item-action corelementos p-3" href="clientes.html">
          <i className="fas fa-address-book text-gray-200"></i> Clientes
        </a>

        <a className="list-group-item list-group-item-action corelementos p-3" href="#!">
          <i className="fas fa-file-alt text-gray-200"></i> Relatório Comissões
        </a>

        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="imagens/Logo_HR_side.png"
            alt="Logo da empresa"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;