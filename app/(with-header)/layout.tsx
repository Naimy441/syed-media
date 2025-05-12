import RegularHeader from "@/components/RegularHeader"

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <RegularHeader />
      {children}
    </>
  )
} 