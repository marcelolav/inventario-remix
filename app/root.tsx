import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: 'https://cdn.simplecss.org/simple.min.css' }
]

export function Layout () {
  return (
   <>
    <title>Inventario - Remix</title>
    <header>
      <nav>
        <Link to="/products" className="current">Productos</Link>
      </nav>
    </header>
    <Outlet />
    <footer>Realizado por Marcelo Lavandeira</footer>
    </>
  )
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Layout />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
