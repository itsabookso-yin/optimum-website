import { getAllProductSlugs } from '@/data/products';
import ProductDetail from './product-detail';

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export default function ProductDetailPage() {
  return <ProductDetail />;
}
