"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Eye, BarChart3, Package, Users, DollarSign, ArrowLeft } from "lucide-react"

const initialProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    category: "Electronics",
    stock: 45,
    status: "active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    category: "Wearables",
    stock: 23,
    status: "active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Organic Coffee Blend",
    price: 24.99,
    originalPrice: 29.99,
    category: "Keripik",
    stock: 0,
    status: "out_of_stock",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const stats = [
  {
    title: "Total Revenue",
    value: "$12,345",
    icon: DollarSign,
    change: "+12.5%",
  },
  {
    title: "Total Products",
    value: "156",
    icon: Package,
    change: "+3.2%",
  },
  {
    title: "Total Customers",
    value: "2,341",
    icon: Users,
    change: "+8.1%",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    icon: BarChart3,
    change: "+0.5%",
  },
]

export default function AdminDashboard() {
  const [products, setProducts] = useState(initialProducts)
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    originalPrice: "",
    category: "",
    stock: "",
    description: "",
    image: "",
  })

  const handleAddProduct = () => {
    const product = {
      id: products.length + 1,
      ...newProduct,
      price: parseFloat(newProduct.price),
      originalPrice: parseFloat(newProduct.originalPrice),
      stock: parseInt(newProduct.stock),
      status: parseInt(newProduct.stock) > 0 ? "active" : "out_of_stock",
      image: "/placeholder.svg?height=100&width=100",
    }
    setProducts([...products, product])
    setNewProduct({
      name: "",
      price: "",
      originalPrice: "",
      category: "",
      stock: "",
      description: "",
      image: "",
    })
    setIsAddProductOpen(false)
  }

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge variant="default">Active</Badge>
      case "out_of_stock":
        return <Badge variant="destructive">Out of Stock</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ...seluruh UI tetap sama seperti versi .tsx */}
      {/* Silakan lanjutkan isi UI yang sudah kamu punya di JSX */}
    </div>
  )
}
