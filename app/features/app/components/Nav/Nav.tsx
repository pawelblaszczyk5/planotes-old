import { useMedia } from '~/lib/hooks';

const MobileNav = () => {
  return (
    <nav className="lg:hidden">
      <p>Mobile nav</p>
    </nav>
  );
};

const DesktopNav = () => {
  return (
    <nav className="hidden lg:block">
      <p>Desktop nav</p>
    </nav>
  );
};

export const Nav = () => {
  const isDesktop = useMedia('(min-width: 1024px)');
  const shouldShowDesktopNav = typeof isDesktop !== 'boolean' || isDesktop;
  const shouldShowMobileNav = typeof isDesktop !== 'boolean' || !isDesktop;

  return (
    <>
      {shouldShowDesktopNav && <DesktopNav />}
      {shouldShowMobileNav && <MobileNav />}
    </>
  );
};
