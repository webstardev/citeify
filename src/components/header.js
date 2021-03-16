import React from "react";
import PhoneIcon from '@material-ui/icons/Phone';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
function Header() {
    const { t } = useTranslation();
    return (
        <div className="app max--widescreen">
            <div className="app__header">
                <header className="site-header site-header--static site-header--signed-out">
                <div className="site-header__inner1">
                    <div className="site-header__inner2">
                    <div className="site-header__item site-header__item--left-oc-trigger">
                        <button className="site-header__left-oc-trigger" type="button"
                                data-oc-trigger="left"></button>
                    </div>
                    <div className="site-header__item site-header__item--branding"><span
                        style={{fontSize: '36px'}}><strong>
                            
                            <Link  to="/">
                                <span style={{color: '#555555'}} >Citeify</span>
                            </Link>
                            </strong>
                        </span>
                    </div>
                    <div className="site-header__item site-header__item--primary-navigation">
                        <div className="top-level-nav">
                       
                        <div className="top-level-nav__item">
                            <Link className="top-level-nav__item__link" to = "/category"><b>{t("sidebar_categories")}</b>&nbsp;</Link>
                        </div>
                        <div className="top-level-nav__item">
                            <Link className="top-level-nav__item__link" to = "/portfolio"><b>{t("sidebar_portfolio")}</b></Link>
                        </div>
                        <div className="top-level-nav__item">
                            <Link className="top-level-nav__item__link" to = "/about"><b>{t("sidebar_about")}</b></Link></div>
                        <div className="top-level-nav__item">&nbsp;</div>
                        </div>
                    </div>
                    <div className="site-header__item site-header__item--secondary-navigation">
                        <div className="top-level-nav">
                        <div className="top-level-nav__item">&nbsp;</div>
                        </div>
                    </div>
                    <div className="site-header__item site-header__item--account-navigation">
                        <div className="top-level-nav">
                        <div className="top-level-nav__item top-level-nav__item--first">&nbsp;</div>
                        </div>
                    </div>
                    <div >
                        <div className="top-level-nav">
                        <div className="top-level-nav__item top-level-nav__item--first" style = {{marginRight:10}}><Link
                            className="top-level-nav__item__link SMOKETEST_login_link"
                             to="/login"><PhoneIcon style = {{fontSize:23, marginRight:5}}/>1800 513 1678</Link></div>
                        
                        <div className="top-level-nav__item top-level-nav__item--first"><Link
                            className="top-level-nav__item__link SMOKETEST_login_link"
                             to="/login">{t("sidebar_login_text")}</Link></div>
                        </div>
                    </div>
                    </div>
                </div>
                
                </header>
            </div>
            
        </div>
    )
}
export default Header;