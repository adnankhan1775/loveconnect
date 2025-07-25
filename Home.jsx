import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to LoveConnect ❤️</h1>
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">Login</Link>
        <Link to="/register" className="px-4 py-2 bg-green-500 text-white rounded">Register</Link>
      </div>
    </div>
  );
}
