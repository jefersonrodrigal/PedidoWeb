import React from 'react';

const TabelaItensPedido = () => {
  return (
    <div className="card-body">
      <table className="table table-striped">
        <thead>
          <tr className="info-card">
            <th scope="col">Código</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Unidade</th>
            <th scope="col">Produto</th>
            <th scope="col">Preço Unit.</th>
            <th scope="col">Preço Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">P-07826</th>
            <td>150</td>
            <td>FRD</td>
            <td>SACOLA IMP BRANCA OXI 50X60 FD 1000 SMART CASA ROHR</td>
            <td>R$132,60</td>
            <td>R$19.890,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaItensPedido;