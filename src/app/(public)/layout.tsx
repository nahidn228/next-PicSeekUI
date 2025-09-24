import { NavbarPicSeek } from "./shared/Navbar";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {/* <NavbarPicSeek /> */}
      <main className="min-h-dvh">{children}</main>
    </>
  );
};

export default PublicLayout;
