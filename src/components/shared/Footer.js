import { FOOTER_LINK } from "../../shared/constants";
import CustomLink from "../routing/CustomLink";

export const Footer = () => {

    return (
        <div className="footer">
            <div className="container">
                <div className='link-container'>
                    {FOOTER_LINK.map((item, index) => (
                        <CustomLink key={index}  to={item.to} text={item.text} />
                    ))}
                </div>
            </div>
        </div>
    )
}
