import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; // Asegúrate de que la ruta es correcta

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Otros componentes o contenido pueden ir aquí */}
    </main>
  );
}