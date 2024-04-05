import { Link, LinkProps, useLocation } from "react-router-dom";

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
    const  { pathname } = useLocation()
    // const teste = {...props}
    // console.log(teste)
    return( <Link 
        data-current={pathname === props.to}
        className="flex items-center text-sm gap-1.5 font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground" 
        {...props}
        />
    )
}