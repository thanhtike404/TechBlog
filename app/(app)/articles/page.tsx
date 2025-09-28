'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { featuredPost, recentPosts, categories } from "@/lib/data"
import Link from "next/link"
import { useState, useEffect, useMemo } from "react"

const allPosts = [featuredPost, ...recentPosts];

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = useMemo(() => {
    let results = allPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (selectedCategory !== "All") {
      results = results.filter(post => post.category === selectedCategory)
    }

    return results;
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">All Articles</h1>
        <div className="flex space-x-4">
          <Input
            type="text"
            placeholder="Search articles..."
            className="max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select onValueChange={setSelectedCategory} value={selectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.name} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
        </div>
      </div>
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/articles/${post.id}`}>
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img src={post.image} alt={post.title} className="rounded-t-lg h-48 w-full object-cover" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <Badge variant="outline" className="mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl font-semibold mb-2">{post.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={`https://i.pravatar.cc/40?u=${post.author}`} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">No Articles Found</h2>
          <p className="text-muted-foreground">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  )
}