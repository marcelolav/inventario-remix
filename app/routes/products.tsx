import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";

type Producto = {
    idproductos:     number;
    codigobarra:     string;
    nombreproducto:  string;
    descripcion:     string;
    precioventa:     number;
    precioventausd:  number;
    preciocompra:    number;
    preciocomprausd: number;
    existencia:      number;
    minimo:          number;
    rubroid:         string;
    fotoproducto:    string;
    rubro:           Rubro;
}
type Rubro = {
    idrubros:    string;
    nombrerubro: string;
}


export const loader = async (args: LoaderArgs) => {
    const response = await fetch(
      "http://localhost:3001/productos"
    );
    const productos = await response.json();
    return json({ productos });

    export default function Products () {
        // eslint-disable-next-line indent
        const { productos } = useLoaderData<typeof loader>();
        
        return (
            <>
    <h1>Productos</h1>
    <ul>
        {productos.map((producto: Producto) => (
          <li key={producto.idproductos}>
             {producto.nombreproducto}
          </li>
        ))}
      </ul>
    <Link to="/" className="current">Ir a inicio</Link>
    </>
)}
