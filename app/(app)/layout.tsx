import BlogNavbar from "@/components/navbar"

export default function AppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <BlogNavbar />
            <main>{children}</main>
        </>
    )
}