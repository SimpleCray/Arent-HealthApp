import React, { useRef } from 'react';
import useBoolean from '../../hook/useBoolean';
import useOnClickOutside from '../../hook/useClickOutside';
import SVG from '../../resources/svg';
import { MENU_LINK } from '../../shared/constants';
import CustomLink from '../routing/CustomLink';

const MenuButton = () => {
    const [menuOpen, setMenuOpen] = useBoolean(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setMenuOpen());
    return (
        <div className='menu-button'>
            <SVG.Menu onClick={setMenuOpen} />
            {menuOpen && (
                <div className='menu-option' ref={ref}>
                    {MENU_LINK.map((item, index) => (
                        <div key={index} className='option'>
                            <CustomLink to={item.to} text={item.text} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuButton;
