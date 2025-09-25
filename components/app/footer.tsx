import { BookOpen, Github, Twitter, Linkedin, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data";

export function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <BookOpen className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold">TechBlog</span>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            Your go-to source for web development tutorials, programming insights, and tech news.
                        </p>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="icon">
                                <Github className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Twitter className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Linkedin className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Rss className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {categories.slice(0, 4).map((category) => (
                                <li key={category.name}>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        {category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; 2025 TechBlog. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}