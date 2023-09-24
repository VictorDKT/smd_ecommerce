import React from 'react';
import { MdListAlt, MdHome, MdOutlineSell } from "react-icons/md";
import { testUrl } from '../../../tools/testUrl';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import "./SideBar.css";

type SidebarItem = {
    key: string;
    link: string;
    icon: JSX.Element;
    onClick?: React.MouseEventHandler;
    permission?: string;
    testSidebar?: string;
    label: string;
}

const items: SidebarItem[] = [
    {
        key: "reports",
        link: "admin/reports",
        icon: <MdHome/>,
        label: "Relatórios",
    },
    {
        key: "purchases",
        link: "admin/purchases",
        icon: <AiOutlineShoppingCart/>,
        label: "Vendas",
    },
    {
        key: "products",
        link: "admin/products",
        icon: <MdOutlineSell/>,
        label: "Produtos",
    },
    {
        key: "categories",
        link: "admin/categories",
        icon: <MdListAlt/>,
        label: "Categorias",
    },
]

function SideBar() {
    return (
        <div className={`side-bar`}>
            <div className="side-bar-body">
                {items.map(item => (
                    <div 
                        key={item.key}
                        onClick={item.onClick === undefined ? () => {window.location.pathname = item.link} : item.onClick}
                        className={ testUrl(item.key) || (item.testSidebar ? testUrl(item.testSidebar) : false) ? "side-bar-item-active" : "side-bar-item"}
                    >
                        {React.cloneElement(item.icon, {className: "side-bar-icon"})}
                        <div className="side-bar-item-text-content">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideBar;