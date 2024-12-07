import { Link, useLocation } from "react-router-dom";

// Define the type for a navigation link
interface NavLinkType {
  name: string;
  url: string;
}

interface NavLinkProps {
  closeMenu?: () => void; // Optional function to close the menu for mobile
}

const NavLink: React.FC<NavLinkProps> = ({ closeMenu }) => {
  const links: NavLinkType[] = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Upload Job", url: "upload-job" },
    { name: "About Us", url: "about" },
  ];

  const location = useLocation();

  return (
    <ul className="flex flex-col md:flex-row gap-3 md:gap-5 text-mine-shaft-300 items-center">
      {links.map((link) => (
        <li
          key={link.url}
          className={`${
            location.pathname === `/${link.url}`
              ? "border-bright-sun-400 text-bright-sun-400"
              : "border-transparent"
          } border-t-[3px] md:border-none md:h-full flex items-center`}
        >
          <Link
            to={`/${link.url}`}
            className="px-3 py-2 hover:text-bright-sun-300 transition"
            onClick={closeMenu}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
