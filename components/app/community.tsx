import { categories } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Community() {
    return (
        <section className="bg-muted/50">
            <div className="container mx-auto max-w-7xl px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Categories */}
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-6">Browse by Category</h3>
                        <div className="space-y-3">
                            {categories.map((category) => (
                                <div
                                    key={category.name}
                                    className="flex items-center justify-between p-3 rounded-lg border bg-background hover:bg-accent transition-colors cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                                        <span className="font-medium">{category.name}</span>
                                    </div>
                                    <Badge variant="secondary">{category.count} articles</Badge>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-6">Stay Updated</h3>
                        <Card>
                            <CardContent className="p-6">
                                <p className="text-muted-foreground mb-4">
                                    Get the latest articles delivered to your inbox. No spam, just quality content.
                                </p>
                                <div className="flex gap-2">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1"
                                    />
                                    <Button>
                                        Subscribe
                                    </Button>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2">
                                    Join 10,000+ developers who read our weekly newsletter.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}