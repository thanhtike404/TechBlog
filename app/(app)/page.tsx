import { Hero } from "@/components/app/hero";
import { FeaturedPost } from "@/components/app/featured-post";
import { RecentPosts } from "@/components/app/recent-posts";
import { Community } from "@/components/app/community";
import { Footer } from "@/components/app/footer";

export default function BlogHomepage() {
    return (
        <div className="min-h-screen bg-background">
            <Hero />
            <FeaturedPost />
            <RecentPosts />
            <Community />
            <Footer />
        </div>
    );
};