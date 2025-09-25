import { featuredPost } from "@/lib/data";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronRight, Star } from "lucide-react";

export function FeaturedPost() {
    return (
        <section className="container mx-auto max-w-7xl px-4 py-16">
            <div className="flex items-center gap-2 mb-8">
                <Star className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Featured Article</h2>
            </div>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="h-64 w-full object-cover md:h-full"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <CardHeader className="pb-4">
                            <Badge variant="secondary" className="w-fit mb-2">
                                {featuredPost.category}
                            </Badge>
                            <h3 className="text-2xl font-bold hover:text-primary transition-colors cursor-pointer">
                                {featuredPost.title}
                            </h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <span>{featuredPost.author}</span>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {featuredPost.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {featuredPost.readTime}
                                    </div>
                                </div>
                                <Button variant="ghost" className="flex items-center gap-2">
                                    Read More
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </div>
                </div>
            </Card>
        </section>
    )
}