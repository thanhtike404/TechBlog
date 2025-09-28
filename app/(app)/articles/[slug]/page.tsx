import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredPost, recentPosts } from "@/lib/data";
import Link from "next/link";

const allPosts = [featuredPost, ...recentPosts];

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.id.toString() === params.slug);

  if (!post) {
    return <div>Article not found</div>;
  }

  const relatedPosts = recentPosts.filter((p) => p.id !== post.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2">
          <article>
            <header className="mb-8">
              <img src={post.image} alt={post.title} className="rounded-lg h-96 w-full object-cover mb-8" />
              <Badge variant="outline" className="mb-2">{post.category}</Badge>
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/40?u=${post.author}`} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-gray-500">Published on {post.date}</p>
                </div>
              </div>
            </header>
            <div className="prose max-w-none">
              <p>{post.excerpt}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget ex commodo, cursus tellus sit amet, consequat eros.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
              <p>
                Nullam euismod, nisl eget aliquam ultricies, nunc nisl
                ultricies nunc, quis aliquam nisl nisl eu nisl. Sed
                euismod, nisl eget aliquam ultricies, nunc nisl ultricies
                nunc, quis aliquam nisl nisl eu nisl.
              </p>
              <h2 className="text-2xl font-bold my-4">A New Era</h2>
              <p>
                Donec euismod, nisl eget aliquam ultricies, nunc nisl
                ultricies nunc, quis aliquam nisl nisl eu nisl. Sed
                euismod, nisl eget aliquam ultricies, nunc nisl ultricies
                nunc, quis aliquam nisl nisl eu nisl.
              </p>
            </div>
          </article>
        </main>
        <aside>
          <Card>
            <CardHeader>
              <CardTitle>Related Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <li key={relatedPost.id}>
                    <Link href={`/articles/${relatedPost.id}`}>
                      <div className="flex items-center space-x-4 hover:bg-muted/50 p-2 rounded-lg">
                        <Avatar>
                          <AvatarImage src={`https://i.pravatar.cc/40?u=${relatedPost.author}`} />
                          <AvatarFallback>{relatedPost.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{relatedPost.title}</h3>
                          <p className="text-sm text-gray-500">{relatedPost.author}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}