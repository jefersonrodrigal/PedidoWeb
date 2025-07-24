import React from 'react';

const TabelaPedidos = () => {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold titulo-card">Pedidos</h6>
      </div>

      <div className="table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">N° Pedido:</th>
              <th scope="col">N° HR:</th>
              <th scope="col">Nome:</th>
              <th scope="col">Data Emissão:</th>
              <th scope="col">Valor Total:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">78537</th>
              <td></td>
              <td>SUPERMERCADO ROHR LTDA - 52.155.830/0019-1 - CENTRO</td>
              <td>29/05/2025</td>
              <td>R$32.430,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaPedidos;