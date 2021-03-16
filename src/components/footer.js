import {useEffect} from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
function Footer (){
  const { t } = useTranslation();
  useEffect(()=>{
    document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
    i18next.changeLanguage("ar");
    
  },[])
  function arabic(){
    document.getElementsByTagName("body")[0].setAttribute("dir", "rtl");
    i18next.changeLanguage("ar");
    
  }
  function english(){
    document.getElementsByTagName("body")[0].setAttribute("dir", "ltr");
    i18next.changeLanguage("en");
  }
    return (
        <div className="app__footer">
          <section id="" className="section section--dark section--collapsed">
            <div className="row">
              <div className="column">
                <div className="section-divider">&nbsp;</div>
              </div>
            </div>
          </section>
          <footer role="contentinfo">
            <div className="site-footer">
              <div className="site-footer__navigation">
                <div className="site-footer__navigation__inner">
                  <div className="site-footer__navigation__group"><h5
                      className="heading heading--h6 heading--punt-road"><b>{t("footer_nav_get_design")}</b></h5>
                    <h5 className="heading heading--h6 heading--punt-road">

                    <div className="footer-links-menu">
                      <ul className="footer-links-menu__items">
                        
                        <li className="footer-links-menu__items__item"><Link
                            className="footer-links-menu__items__item__link"
                            to="/category">{t("footer_nav_logo_design")}</Link>
                        </li>
                        <li className="footer-links-menu__items__item"><Link
                            className="footer-links-menu__items__item__link"
                            to="/category">{t("footer_nav_packaging_design")}</Link>
                        </li>
                        <li className="footer-links-menu__items__item"><Link
                            className="footer-links-menu__items__item__link"
                            to="/category">{t("footer_nav_social_media")}</Link>
                        </li>
                        <li className="footer-links-menu__items__item"><Link
                            className="footer-links-menu__items__item__link"
                            to="/category">{t("footer_nav_restor_pack")}</Link>
                        </li>
                        <li className="footer-links-menu__items__item"><Link
                            className="footer-links-menu__items__item__link"
                            to="/category">{t("footer_nav_logo_brand")}</Link>
                        </li>
                        <li className="footer-links-menu__items__item">
                          <Link className="footer-links-menu__items__item__link"
                            to="/category">{t("footer_nav_hotel_packaging")}</Link>
                        </li>
                        
                        <li className="footer-links-menu__items__item"><Link
                            className="footer-links-menu__items__item__link"
                            to="/category">{t("footer_nav_browse_category")}</Link>
                            </li>
                        <li className="footer-links-menu__items__item"><Link
                        className="footer-links-menu__items__item__link"
                        to="/category">{t("footer_nav_pricing")}</Link>
                        </li>
                      </ul>
                    </div>
                    </h5>
                  </div>
                  <div className="site-footer__navigation__group"><h5
                      className="heading heading--h6 heading--punt-road"><b>{t("footer_nav_company")}</b></h5>
                    <h5 className="heading heading--h6 heading--punt-road">
                      <div className="footer-links-menu">
                        <ul className="footer-links-menu__items">
                          <li className="footer-links-menu__items__item"><Link
                              className="footer-links-menu__items__item__link"
                              to="/about">{t("footer_nav_about")}</Link></li>
                        
                          <li className="footer-links-menu__items__item"><Link
                              className="footer-links-menu__items__item__link"
                              to="/contact">{t("footer_nav_contact")}</Link></li>

                          <li className="footer-links-menu__items__item"><Link
                              className="footer-links-menu__items__item__link"
                              to="/contact">{t("footer_nav_help")}</Link></li>
                        </ul>
                      </div>
                    </h5>
                    <div className="footer-links-menu">&nbsp;</div>
                  </div>
                </div>
              </div>
              <div className="site-footer__sub">
                <div className="site-footer__sub__inner">
                  <div className="site-footer__legal"><span
                      className="site-footer__legal__copyright-message">&copy; Citeify</span>
                    <div className="site-footer__legal__privacy-links">
                      <ul className="footer-level-nav">
                        <li className="footer-level-nav__item"><Link className="footer-level-nav__item__link"
                                                                  to="/terms-and-cond">{t("footer_nav_term_condition")}</Link>
                        </li>
                        {/* <li className="footer-level-nav__item"><a className="footer-level-nav__item__link"
                                                                  href="/legal/privacy">Privacy</a></li> */}
                        
                      </ul>
                    </div>
                  </div>
                  <div className="site-footer__language">
                    <div className="locale-switcher"><span className="locale-switcher__icon"><span
                        className="icon icon--globe-1"></span></span>
                      <div className="locale-switcher__nav">
                        <ul className="footer-level-nav">
                          <li className="footer-level-nav__item" data-state="selected">
                          <a className="footer-level-nav__item__link" onClick = {english} style = {{cursor:"pointer"}}>{t('footer_translate_english')}</a>
                          </li>
                          <li className="footer-level-nav__item">
                            <a className="footer-level-nav__item__link" onClick = {arabic} style = {{cursor:"pointer"}}>{t('footer_translate_arabic')}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="site-footer__socials">
                    <ul className="footer-level-nav">
                      <li className="footer-level-nav__item"><a href = "https://www.facebook.com/citeify.branding"><FacebookIcon style = {{color:"#555555"}}/></a></li>
                      <li className="footer-level-nav__item"><a href = "https://twitter.com/citeify"><TwitterIcon style = {{color:"#555555"}}/></a></li>
                      <li className="footer-level-nav__item"><a href = "https://www.linkedin.com/company/citeify-com/?viewAsMember=true"><LinkedInIcon style = {{color:"#555555"}}/></a></li>
                      <li className="footer-level-nav__item"><a href = "https://www.instagram.com/citeify/"><InstagramIcon style = {{color:"#555555"}}/></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
       
       
       
    )
}
export default Footer;