import { useState } from 'react';

function ResponsiveMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center justify-between">
      <ul className="flex items-center">
        <li className="mr-4">Home</li>
        <li className="mr-4">About</li>
        <li className="cursor-pointer" onClick={handleToggle}>Dropdown</li>
      </ul>

      <div className={`absolute top-full right-0 mt-2 bg-white shadow-md rounded-md hidden md:block ${isOpen ? 'block' : 'hidden'}`}>
        <ul>
          <li className="py-2 px-4 hover:bg-gray-100">Dropdown Item 1</li>
          <li className="py-2 px-4 hover:bg-gray-100">Dropdown Item 2</li>
        </ul>
      </div>

      {/* Mobile menu (replace this with your actual mobile menu implementation) */}
      <div className="md:hidden">
        {/* Mobile menu button or icon */}
      </div>
    </div>
  );
}

export default ResponsiveMenu;