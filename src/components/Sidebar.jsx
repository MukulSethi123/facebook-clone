import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import React from 'react'
import './css/Sidebar.css'
import SidebarRow from './SidebarRow'
import StoreIcon from '@material-ui/icons/Store';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import {useStateValue} from './StateProvider';


function Sidebar(){

    const [{user},dispatch] = useStateValue();
    
    return (
        <div className="sidebar">
            <SidebarRow title={user.displayName} src={user.photoURL}/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friend" />
            <SidebarRow Icon={ChatBubbleIcon} title="Messages" />
            <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
            
        </div>
    )
}

export default Sidebar;