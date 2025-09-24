import { NavbarPicSeek } from "./shared/Navbar";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="sticky top-2 w-full">
        <NavbarPicSeek />
      </div>
      <main className="min-h-dvh">{children}</main>
    </>
  );
};

export default PublicLayout;
