import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/uiSlice";
import type { RootState } from "../store/store";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

const linkVariants = {
  initial: { y: 0 },
  hover: { y: -3 },
};

const Navbar = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector(
    (state: RootState) => state.ui.menuOpen
  );

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow sticky top-0 bg-white z-50">
      <h1 className="text-xl font-bold text-purple-600">
        Muqadas Resume
      </h1>

      <button
        className="md:hidden text-2xl"
        onClick={() => dispatch(toggleMenu())}
      >
        <FiMenu />
      </button>

      <ul
        className={`md:flex gap-6 font-medium
          ${menuOpen ? "block" : "hidden"}
          md:block
        `}
      >
        {[
          { label: "Home", id: "home" },
          { label: "Skills", id: "skills" },
          { label: "Education", id: "education" },
          { label: "Course", id: "course" },
          { label: "Projects", id: "projects" },
          { label: "Contact", id: "contact" },
        ].map((item) => (
          <li key={item.id} className="relative">
            <motion.a
              href={`#${item.id}`}
              onClick={() => dispatch(toggleMenu())}
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="relative inline-block text-gray-700 hover:text-purple-600 transition"
            >
              {item.label}

              {/* Purple underline */}
              <motion.span
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 -bottom-1 h-xl bg-purple-600"
              />
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
