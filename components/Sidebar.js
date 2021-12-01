import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function SidebarButton({ children }) {
  return (
    <button className="flex items-center space-x-2 hover:text-white ">
      {children}
    </button>
  );
}

function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <SidebarButton>
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </SidebarButton>

        <SidebarButton>
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </SidebarButton>

        <SidebarButton>
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </SidebarButton>

        <hr className="border-t-[0.1px] border-gray-900" />

        <SidebarButton>
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </SidebarButton>

        <SidebarButton>
          <HeartIcon className="h-5 w-5" />
          <p>Liked SOngs</p>
        </SidebarButton>

        <SidebarButton>
          <RssIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </SidebarButton>

        <hr className="border-t-[0.1px] border-gray-900" />

        {[...Array(15)].map((_, i) => (
          <p className="cursor-pointer hover:text-white">Playlist name...</p>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
