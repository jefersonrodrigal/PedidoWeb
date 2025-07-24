import { Helmet } from 'react-helmet';

const HeadComponent = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>Pedido.Net</title>

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="imagens/Logo_HR.png" />

      {/* Estilos CSS */}
      <link href="css/styles.css" rel="stylesheet" />
      <link href="css/paginas.css" rel="stylesheet" />
      <link
        href="fontawesome-free/css/all.min.css"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
  );
};

export default HeadComponent;