const Pagination = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Voltar">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Voltar</span>
          </a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Avançar">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Avançar</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;