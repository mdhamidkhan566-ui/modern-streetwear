export default function ModernStreetwearLandingPage() {
  const products = [
    {
      name: "Premium DTF Oversized T-Shirt",
      price: "৳790",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Anime DTF T-Shirt",
      price: "৳850",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Streetwear DTF Tee",
      price: "৳920",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold">Modern Streetwear</h1>
          <p className="mt-6 text-lg text-gray-300">
            Premium DTF printed t-shirts with trendy streetwear vibes.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-lg font-bold text-gray-700">
                    {product.price}
                  </p>

                  <button className="mt-5 w-full bg-black text-white py-3 rounded-2xl">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8 text-center">
        <p>© 2026 Modern Streetwear — All Rights Reserved.</p>
      </footer>
    </div>
  );
}
