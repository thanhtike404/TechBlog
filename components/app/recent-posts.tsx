import { recentPosts } from "@/lib/data";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp } from "lucide-react";

export function RecentPosts() {
    return (
        <section className="container mx-auto max-w-7xl px-4 py-16">
            <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Recent Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="h-48 w-full object-cover"
                        />
                        <CardHeader className="pb-2">
                            <Badge variant="outline" className="w-fit mb-2">
                                {post.category}
                            </Badge>
                            <h3 className="font-bold text-lg hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>{post.author}</span>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {post.readTime}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}