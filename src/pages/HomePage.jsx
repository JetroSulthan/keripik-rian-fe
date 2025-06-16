import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

import { Facebook, Instagram, Twitter, MessageCircle, ShoppingCart, Star, Search, Menu, User } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    category: "Electronics",
    featured: true,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 89,
    category: "Wearables",
    featured: true,
  },
  {
    id: 3,
    name: "Organic Coffee Blend",
    price: 24.99,
    originalPrice: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 256,
    category: "Keripik",
    featured: false,
  },
  {
    id: 4,
    name: "Luxury Leather Wallet",
    price: 89.99,
    originalPrice: 119.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 67,
    category: "Accessories",
    featured: true,
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 39.99,
    originalPrice: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 143,
    category: "Electronics",
    featured: false,
  },
  {
    id: 6,
    name: "Eco-Friendly Water Bottle",
    price: 19.99,
    originalPrice: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 201,
    category: "Lifestyle",
    featured: false,
  },
]

const categories = ["All", "Electronics", "Wearables", "Keripik", "Accessories", "Lifestyle"]

export default function LandingPage() {
  const whatsappNumber = "+1234567890"
  const whatsappMessage = "Hi! I'm interested in your products."

  return (
    <div className="min-h-screen bg-background">
      {/* isi konten JSX tetap sama */}
    </div>
  )
}
