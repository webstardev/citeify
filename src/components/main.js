import { useTranslation } from 'react-i18next';
function Main (){
  const { t } = useTranslation();
    return (
        <div>
              <div className="app__content App">
                <div className="hero-layout hero-layout--homepage">
                  <div className="row">
                    <div className="column large-12 normal-12 small-12 medium-12">
                      <div className="homepage-hero">
                        <div className="homepage-hero__inner" data-carousel="hero-carousel" style={{color: '#DF7242'}}>
                          <div className="homepage-hero__artwork">
                            <div className="homepage-hero-carousel">
                              <div className="homepage-hero-carousel__content__image">
                                <figure className="design-figure design-figure--homepage-hero-carousel">
                                  <div className="design-figure__image-container">
                                    <div className="design-figure__image-container__additional_content">&nbsp;</div>
                                  </div>
                                </figure>
                              </div>
                            </div>
                            <div className="homepage-hero-carousel__content" data-carousel-content=""
                                 data-color="#2C546B"
                                 data-carousel-step="2"
                                 data-carousel-content-json-object="{&quot;designer&quot;:&quot;PANG3STU&quot;,&quot;color&quot;:&quot;#2C546B&quot;,&quot;size&quot;:&quot;600x575&quot;,&quot;url&quot;:&quot;images/homepage/hero/hero-02.png&quot;,&quot;designer_id&quot;:1323758,&quot;attribution&quot;:&quot;PANG3STU&quot;}">
                              <div className="homepage-hero-carousel__content__image">
                                <figure className="design-figure design-figure--homepage-hero-carousel">
                                  <div className="design-figure__image-container"><img
                                      className="design-figure__image-container__image lazyload"
                                      alt="design by PANG3STU"
                                      title="by PANG3STU"
                                      srcSet="images/hero-02-d604f384.png 1x, images/hero-02-d604f384_1.png 2x"
                                      src="images/hero-02-d604f384.png"/>
                                    <div className="design-figure__image-container__additional_content">&nbsp;</div>
                                  </div>
                                </figure>
                              </div>
                            </div>
                            <div className="homepage-hero-carousel__content" data-carousel-content=""
                                 data-color="#D0568C"
                                 data-carousel-step="3"
                                 data-carousel-content-json-object="{&quot;designer&quot;:&quot;Mky&quot;,&quot;color&quot;:&quot;#D0568C&quot;,&quot;size&quot;:&quot;500x505&quot;,&quot;url&quot;:&quot;images/homepage/hero/hero-03.png&quot;,&quot;designer_id&quot;:703419,&quot;attribution&quot;:&quot;Mky&quot;}">
                              <div className="homepage-hero-carousel__content__image">
                                <figure className="design-figure design-figure--homepage-hero-carousel">
                                  <div className="design-figure__image-container"><img
                                      className="design-figure__image-container__image lazyload" alt="design by Mky"
                                      title="by Mky"
                                      srcSet="images/hero-03-c5c6fde9.png 1x, images/hero-03-c5c6fde9_1.png 2x"
                                      src="images/hero-03-c5c6fde9.png"/>
                                    <div className="design-figure__image-container__additional_content">&nbsp;</div>
                                  </div>
                                </figure>
                              </div>
                            </div>
                            <div className="homepage-hero-carousel__content" data-carousel-content=""
                                 data-color="#007ED5"
                                 data-carousel-step="4"
                                 data-carousel-content-json-object="{&quot;designer&quot;:&quot;Mad pepper&quot;,&quot;color&quot;:&quot;#007ED5&quot;,&quot;size&quot;:&quot;680x480&quot;,&quot;url&quot;:&quot;images/homepage/hero/hero-04.png&quot;,&quot;designer_id&quot;:895578,&quot;attribution&quot;:&quot;Mad pepper&quot;}">
                              <div className="homepage-hero-carousel__content__image">
                                <figure className="design-figure design-figure--homepage-hero-carousel">
                                  <div className="design-figure__image-container"><img
                                      className="design-figure__image-container__image lazyload"
                                      alt="design by Mad pepper"
                                      title="by Mad pepper"
                                      srcSet="images/hero-04-932349de.png 1x, images/hero-04-932349de_1.png 2x"
                                      src="images/hero-04-932349de.png"/>
                                    <div className="design-figure__image-container__additional_content">&nbsp;</div>
                                  </div>
                                </figure>
                              </div>
                            </div>
                            <div className="homepage-hero-carousel__content" data-carousel-content=""
                                 data-color="#4240A1"
                                 data-carousel-step="5"
                                 data-carousel-content-json-object="{&quot;designer&quot;:&quot;Layan Alhamed&quot;,&quot;color&quot;:&quot;#4240A1&quot;,&quot;size&quot;:&quot;550x480&quot;,&quot;url&quot;:&quot;images/homepage/hero/hero-05.png&quot;,&quot;designer_id&quot;:3555914,&quot;attribution&quot;:&quot;Layan Alhamed&quot;}">
                              <div className="homepage-hero-carousel__content__image">
                                <figure className="design-figure design-figure--homepage-hero-carousel">
                                  <div className="design-figure__image-container"><img
                                      className="design-figure__image-container__image lazyload"
                                      alt="design by Layan Alhamed"
                                      title="by Layan Alhamed"
                                      srcSet="images/hero-05-3e692467.png 1x, images/hero-05-3e692467_1.png 2x"
                                      src="images/hero-05-3e692467.png"/>
                                    <div className="design-figure__image-container__additional_content">&nbsp;</div>
                                  </div>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="homepage-hero__heading"><h1
                            className="heading heading--h0 heading--chameleon heading--with-divider">
                              <span>{t("main_above_section_header")}</span>
                        </h1></div>
                        <div className="homepage-hero__paragraph"><p><span
                            style={{color: '#555555'}}>{t("main_above_section_citeify")}</span><a
                            href="https://influencermarketinghub.com/branding-agencies/"><span
                            style={{color: '#555555'}}>&nbsp;</span></a><span
                            style={{color: '#555555'}}>{t("main_above_section_provider")}</span>
                          <br/><span style={{color: '#555555'}}>{t("main_above_section_service")}</span>
                        </p>
                          <p className="paragraph paragraph--narrow-widescreen paragraph--root"><span
                              style={{color: '#555555'}}>.</span>
                          </p></div>
                        <div className="homepage-hero__search">
                          <div className="cta-pair cta-pair--no-margin cta-pair--centered">
                          <span
                              style={{color: '#555555'}}><div
                              className="cta-pair__button"><div data-category-search-field=""
                                                                className="field field--icon-label field--homepage-search-input">&nbsp;</div></div></span>
                            <div className="cta-pair__button"><a data-category-search-cta=""
                                                                 className="button button--jumbo button--primary button--chameleon button--responsive"
                                                                 href="https://citeify.com/category"><span
                                style={{color: '#555555'}}><span className="button__inner"> <span
                                className="button__label"> Get started&nbsp;</span> </span> </span></a></div>
                          </div>
                          <button data-homepage-cta="" data-homepage-cta-location="hero-secondary"
                                  data-fullscreen-overlay-open="frontpage-video-hero-modal"
                                  className="button button--link button--jumbo button--icon-left button--chameleon button--responsive"
                                  type="button"><span style={{color: '#555555'}}><span className="button__inner"> <span
                              className="button__icon"></span></span></span><br/></button>
                        </div>
                        <div className="homepage-hero__artwork-meta">
                          <div className="homepage-hero__artwork-meta__attribution">
                            <div className="attribution attribution--inline attribution--small">
                              <div className="attribution__text">&nbsp;</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sticky-bar sticky-bar--hidden-small" data-sticky-bar-hidden-till-active="true"
                   data-sticky-bar="">
                <div className="sticky-bar__inner" data-sticky-bar-inner="">
                  <div className="sticky-categories-cta"><p className="sticky-categories-cta__text"
                                                            data-hidden-medium="">Logos, websites,
                    book covers &amp; more...</p>
                    <p className="sticky-categories-cta__text" data-hidden-small="" data-hidden-normal=""
                       data-hidden-large="">Logos,
                      websites &amp; more...</p><span className="sticky-categories-cta__cta"> 
                      <a data-homepage-cta=""
                        data-homepage-cta-location="category-primary"
                        className="button button--responsive button--punt-road button--primary button--hover button--jumbo"
                        href="/categories"> <span className="button__inner"> <span className="button__label"> See all design categories </span> </span> </a> </span>
                  </div>
                </div>
              </div>
              <section id="" className="section">
                <div className="row">
                  <div className="column">
                    <div className="homepage-products">
                      <div className="homepage-products__header">
                        <div className="row">
                          <div style = {{textAlign:"center"}}
                              className="column small-12 normal-5 medium-9 large-5 normal-centered medium-centered large-centered">
                            <h2 className="heading heading--h1 heading--h1-capped heading--with-divider"><span
                                id="cke_bm_18274S"
                                style={{ textAlign:"center"}}>&nbsp;</span><span>{t("main_bottom_section_header")}</span></h2>
                            <p className="paragraph paragraph--offset paragraph--no-margin paragraph--root" style ={{textAlign:"center",fontSize:18}}>{t("main_bottom_section_content")}</p></div>
                        </div>
                      </div>
                      <center>
                        <div className="">
                          <div className="">
                            <div className="">
                              <div className="homepage-product__image">
                                <div className="homepage-product__image__default">
                                  <figure
                                      className="design-figure design-figure--attribution-absolute-bottom-right design-figure--attribution-offset-right">
                                    <div className="design-figure__image-container"><img style={{}}
                                                                                         className="design-figure__image-container__image lazyload"
                                                                                         alt="greyscale illustration of artist painting"
                                                                                         title="work directly"
                                                                                         srcSet="images/project-grey-3x-9f7f7b17.png 1x, images/project-grey-3x-9f7f7b17_1.png 2x"
                                                                                         src="images/project-grey-3x-9f7f7b17.png"/>
                                      <div className="design-figure__image-container__additional_content">&nbsp;</div>
                                    </div>
                                    <figcaption className="design-figure__attribution">&nbsp;</figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </center>
                     
                    </div>
                  </div>
                </div>
              </section>
        </div>
    )
}
export default Main;