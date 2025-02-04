

import { Home, Square, Type, Mail, MousePointer2, Hand } from 'lucide-react';


export default function Dashboard(){
    const menuItems = [
        { icon: Hand, label: 'Move' },
        { icon: MousePointer2, label: 'Move-tool' },
        { icon: Square, label: 'Box' },

      ];
    return(
        <>
        
    <div className="fixed left-2 top-10 h-auto w-16 bg-gray-600 text-white flex flex-col items-center py-4 shadow-lg rounded-md">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="p-3 hover:bg-gray-800 rounded-lg mb-2 transition-colors duration-200 group relative"
          onClick={() => console.log(`Clicked ${item.label}`)}
        >
          <item.icon className="w-6 h-6" />
          <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {item.label}
          </span>
        </button>
      ))}
    </div>
        </>
    )
}

