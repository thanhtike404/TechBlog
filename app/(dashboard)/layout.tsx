// import { Nv } from "@/components/Nv";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {/* <Navbar /> */}
            <main>{children}</main>
        </>
    )
}