import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Inventario Home Page' },
    { name: 'description', content: 'Bienvenido!' },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Inventario</h1>
    </div>
  );
}
