import Layout from "./LayoutComponent"
import PedidosCard from '../components/PedidoCardComponent'
import Pagination from '../components/PaginationComponent'
import '../assets/paginas.css'
import '../assets/styles.css'

const HomePage = () => {
    return (
        <Layout>
           <div class="align-items-center justify-content-between mb-4 mt-5">
                <h1 class="h3 mb-0 text-gray-800 text-center">
                Consulta de Pedidos
                </h1>
            </div>
            <div class="col-sm-3">
              <label class="visually-hidden" for="specificSizeInputName"
                >Cliente</label>
              <input
                type="text"
                class="form-control"
                id="specificSizeInputName"
                placeholder="Digite o Nome ou CPF" required/>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn corelementos">Buscar</button>
            </div>
            <PedidosCard/>
            <PedidosCard/>
            <Pagination/>
            <a class="back-to-top" href="#"><i class="fas fa-angle-up"></i></a>
        </Layout>
    )
}

export default HomePage