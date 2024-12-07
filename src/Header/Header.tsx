import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconSchool, IconSettings, IconMenu2, IconX } from "@tabler/icons-react";
import NavLink from "./NavLink";
import { useState } from "react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex gap-2 items-center text-bright-sun-400">
        <IconSchool className="h-10 w-10" stroke={2.5} />
        <h1 className="text-2xl md:text-3xl font-semibold">
          <span className="text-mine-shaft-100">Job</span>folio
        </h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none hover:bg-mine-shaft-800 transition"
        aria-label="Toggle Mobile Menu"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
      </button>

      {/* Navigation */}
      <nav
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:flex absolute md:relative top-20 left-0 md:top-0 bg-mine-shaft-950 w-full md:w-auto md:bg-transparent shadow-lg md:shadow-none z-10`}
      >
        <NavLink closeMenu={() => setMobileMenuOpen(false)} />
      </nav>

      {/* User Info & Actions */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex gap-2 items-center">
          <span>Jethalal</span>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1286660994782179328/Ehh8f9ml_400x400.jpg"
            alt="Jethalal's Avatar"
            radius="xl"
          />
        </div>
        <button
          className="flex items-center bg-mine-shaft-900 p-2 rounded-full hover:bg-mine-shaft-700 transition"
          aria-label="Settings"
        >
          <IconSettings stroke={1.5} />
        </button>
        <button
          className="flex items-center bg-mine-shaft-900 p-2 rounded-full hover:bg-mine-shaft-700 transition"
          aria-label="Notifications"
        >
          <Indicator color="bright-sun.4" size={8} offset={6} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </button>
      </div>
    </header>
  );
};

export default Header;
