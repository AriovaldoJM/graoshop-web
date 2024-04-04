import { Coffee, Home, UtensilsCrossed } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center gap-6 px-6">
            <Coffee className="h-6 w-6"/>
            <Separator orientation="vertical" className="h-6"/>
            <nav className="flex items-center space-x-4 lg:space-x-6"></nav>
            <Link to="/">
                <Home className="h-4 w-4"/>
                Início
            </Link>
            <Link to="/">
                <UtensilsCrossed className="h-4 w-4"/>
                Pedidos
            </Link>
            </div>
        </div>
    )
}