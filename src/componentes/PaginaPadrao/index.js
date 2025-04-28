import Banner from 'componentes/Banner'
import { Outlet } from 'react-router-dom'


export default function PaginaPadrao() {
  return (
    <main>

      <Banner />

      {/* O componente "Outlet" define esta rota como rota pai */}
      <Outlet />

    </main>
  )
}