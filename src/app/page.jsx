import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md p-8 bg-primary-faded rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Hessel de Jong</h1>
        <p className="text-lg mb-6">Full Stack Developer & UX Designer</p>
        <div className="bg-white p-6 rounded-lg shadow-inner">
          <p className="text-lg mb-4">Looking for my CV?</p>
          <Link 
            href="/curriculum-vitae" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            View CV
          </Link>
        </div>
      </div>
    </div>
  );
}


