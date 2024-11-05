import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOut, LinkIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";


const Header = () => {
    const navigate = useNavigate();
    const user = false;

    return (
        <>
            <nav className="py-4 flex justify-between items-center">
                <Link to="/">
                    <img src="/logo.png" />
                </Link>

                <div className="flex gap-4">
                    {!user ? (
                        <Button onClick={() => navigate("/auth")}>Login</Button>
                    ) : (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">

                                <Avatar>
                                    <AvatarImage src={user?.user_metadata?.profile_pic} />
                                    <AvatarFallback>PA</AvatarFallback>
                                </Avatar>

                            </DropdownMenuTrigger>


                            <DropdownMenuContent>
                                <DropdownMenuLabel>user</DropdownMenuLabel>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <Link to="/dashboard" className="flex">
                                        <LinkIcon className="mr-2 h-4 w-4" />
                                        My Links
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className="text-red-500"
                                >
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>
                                        Logout
                                    </span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    )}

                </div>

            </nav>

            { }
        </>
    )
}

export default Header;