import { ShoppingCart, Star } from "lucide-react"

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={product.image || "/placeholder.svg?height=300&width=300"}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">Featured</span>
        )}
        <span className="absolute top-2 right-2 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
          {product.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>

        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm ml-1 text-gray-600">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">Rp{product.price}</span>
          <span className="text-sm text-gray-500 line-through">Rp{product.originalPrice}</span>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Beli Produk
        </button>
      </div>
    </div>
  )
}

export default ProductCard
