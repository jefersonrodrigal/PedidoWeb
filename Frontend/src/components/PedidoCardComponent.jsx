const PedidosCard = () => {
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
              <tr>
                <th scope="row">P-07870</th>
                <td>150</td>
                <td>FRD</td>
                <td>SACOLA IMP BRANCA OXI 50X60 FD 1000 SMART CASA ROHR</td>
                <td>R$83,60</td>
                <td>R$12.540,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PedidosCard;