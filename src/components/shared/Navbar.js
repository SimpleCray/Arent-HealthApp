import React from 'react';
import { NavLink } from 'react-router-dom';
import SVG from '../../resources/svg';
import CustomLink from '../routing/CustomLink';
import MenuButton from './MenuButton';
// import { ReactComponent as Logo } from "../../resources/svg/logo.svg";

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                {/* <div>
                    <SVG.Logo />
                </div> */}
                <CustomLink
                    to='/test'
                    text=''
                    Icon={SVG.Logo}
                />
                <div className='nav-link-container'>
                    <CustomLink
                        to='/my-record'
                        text='自分の記録'
                        Icon={SVG.Memo}
                    />
                    <CustomLink
                        to='/'
                        text='チャレンジ'
                        Icon={SVG.Challenge}
                    />
                    <CustomLink
                        to='/'
                        text='お知らせ'
                        Icon={SVG.Info}
                    />
                    <MenuButton/>
                </div>
            </div>
        </div>
    );
};
