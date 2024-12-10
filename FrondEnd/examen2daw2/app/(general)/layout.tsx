import NavBar from "@/Componets/navbar/NavBar";


export default function pageLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar></NavBar>
     {children}
    </div>
  );
}