import Logo from "./Logo";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <h2 className="text-sm md:text-base font-medium text-foreground hidden sm:block">
              Partner Confidently, Protect Agreements.
            </h2>
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
