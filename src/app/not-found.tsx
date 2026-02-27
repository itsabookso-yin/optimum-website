import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#0099CC]">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
        <Link
          href="/zh"
          className="mt-6 inline-block text-[#0099CC] hover:underline"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
