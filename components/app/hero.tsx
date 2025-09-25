import { ArrowRight, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Welcome to{' '}
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            TechBlog
                        </span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                        Discover the latest in web development, programming tutorials, and tech insights.
                        Join thousands of developers who read our content every week.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-x-6">
                        <Button size="lg" className="flex items-center gap-2">
                            Explore Articles
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="flex items-center gap-2">
                            <Rss className="h-4 w-4" />
                            Subscribe to RSS
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}