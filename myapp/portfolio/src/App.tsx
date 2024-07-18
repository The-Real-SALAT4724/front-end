import './App.css'

import image0 from './images/GREENSTONEBLOCK.png'

import icon1 from './images/icons/html_icon.svg'
import icon2 from './images/icons/sass_icon.svg'
import icon3 from './images/icons/js_icon2.svg'
import icon4 from './images/icons/ts_icon.svg'
import icon5 from './images/icons/react_icon.svg'
import icon6 from './images/icons/redux_icon.svg'

import photo01 from './images/works_photos/photo01.png'
import photo02 from './images/works_photos/photo02.png'
import photo03 from './images/works_photos/photo03.png'
import photo04 from './images/works_photos/photo04.png'
import photo05 from './images/works_photos/photo05.png'
import photo06 from './images/works_photos/photo06.png'

import svg1 from './images/icons/telegram_icon2.svg'
import svg2 from './images/icons/discord-icon.svg'
import svg3 from './images/icons/gitHub_icon.svg'
import svg4 from './images/icons/codewars_icon.svg'


function App() {

  return (
    <div>
      <div className="tinting"></div>
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <div className="header__body">
              <ul className="header-menu">
                <li className="header-menu__link">
                  <a href="#first-screen">Home</a>
                </li>
                <li className="header-menu__link">
                  <a href="#skills">Skills</a>
                </li>
                <li className="header-menu__link">
                  <a href="#resume">Resume</a>
                </li>
                <li className="header-menu__link">
                  <a href="#works">Works</a>
                </li>
                <li className="header-menu__link">
                  <a href="#contact" className="contacts__button">Contacts</a>
                </li>
                <li className="header-menu__link">
                  <a href="https://svetailo.com" target="_blank" className="contacts__button">Svetailo</a>
                </li>
              </ul>

              <div className="animation-main animation1-1">H</div>
              <div className="animation-main animation1-2">o</div>
              <div className="animation-main animation1-3">m</div>
              <div className="animation-main animation1-4">e</div>


              <div className="animation2-1">S</div>
              <div className="animation2-2">k</div>
              <div className="animation2-3">i</div>
              <div className="animation2-4">l</div>
              <div className="animation2-5">l</div>
              <div className="animation2-6">s</div>

            </div>
          </div>
        </header>
        <main className="main">
          <section className="first-screen" id="first-screen">
            <div className="container">
              <div className="first-screen__body">
                <div className="first-screen__info">
                  <p>Hello There</p>
                  <h1>I´m Mark</h1>
                  <h2>Welcome to my Site</h2>
                </div>

                <div className="first-screen__image">
                  <img src={image0} className="greenstone" />
                </div>

              </div>
            </div>
          </section>

          <section className="skills" id="skills">
            <div className="container">
              <h2 className="title">
                Skills
                <div className="title__decor-line"></div>
              </h2>
              <div className="skills__blocks">

                <div className="skills-block">
                  <div className="skills-block__rhombus">
                    <img src={icon1} alt="" />
                  </div>
                  <h3 className="skills-block__titles">HTML</h3>
                  <p className="skills-block__text">The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>
                </div>

                <div className="skills-block">
                  <div className="skills-block__rhombus">
                    <img src={icon2} alt="" />
                  </div>
                  <h3 className="skills-block__titles">SASS</h3>
                  <p className="skills-block__text">Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>
                </div>

                <div className="skills-block">
                  <div className="skills-block__rhombus">
                    <img src={icon3} alt="" />
                  </div>
                  <h3 className="skills-block__titles">JavaScript</h3>
                  <p className="skills-block__text">JS is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>
                </div>

                <div className="skills-block">
                  <div className="skills-block__rhombus">
                    <img src={icon4} alt="" />
                  </div>
                  <h3 className="skills-block__titles">TypeScript</h3>
                  <p className="skills-block__text">TS, it is a strict syntactical superset of JavaScript and adds optional static typing to the language.</p>
                </div>

                <div className="skills-block">
                  <div className="skills-block__rhombus">
                    <img src={icon5} alt="" />
                  </div>
                  <h3 className="skills-block__titles">React</h3>
                  <p className="skills-block__text">A JavaScript library for building user interfaces</p>
                </div>


                <div className="skills-block">
                  <div className="skills-block__rhombus">
                    <img src={icon6} alt="" />
                  </div>
                  <h3 className="skills-block__titles">Redux</h3>
                  <p className="skills-block__text">Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.</p>
                </div>

              </div>

            </div>
          </section>

          <section className="resume" id="resume">
            <div className="container">
              <h2 className="title">
                Resume
                <div className="title__decor-line"></div>
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum facere id iusto officiis saepe? Corrupti in inventore debitis ipsa placeat!
              </p>
            </div>
          </section>

          <section className="works" id="works">
            <div className="container">
              <h2 className="title">
                Works
                <div className="title__decor-line"></div>
              </h2>

              <div className="works__blocks">
                <div className="works__block">
                  <div className="works__image">
                    <img src={photo01} alt="Photo 1" />
                    <div className="image-background">
                      <p>Hello World</p>
                      <a href="" className="works__link">View More</a>
                    </div>
                  </div>
                  <h4 className="works__title">Minecraft №1</h4>
                  <p className="works__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, illum?</p>
                </div>

                <div className="works__block">
                  <div className="works__image">
                    <img src={photo02} alt="Photo 2" />
                    <div className="image-background">
                      <p>Hello World</p>
                      <a href="" className="works__link">View More</a>
                    </div>

                  </div>
                  <h4 className="works__title">Minecraft №2</h4>
                  <p className="works__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, illum?</p>
                </div>

                <div className="works__block">
                  <div className="works__image">
                    <img src={photo03} alt="Photo 3" />
                    <div className="image-background">
                      <p>Hello World</p>
                      <a href="" className="works__link">View More</a>
                    </div>
                  </div>
                  <h4 className="works__title">Minecraft №3</h4>
                  <p className="works__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, illum?</p>
                </div>

                <div className="works__block">
                  <div className="works__image">
                    <img src={photo04} alt="Photo 4" />
                    <div className="image-background">
                      <p>Hello World</p>
                      <a href="" className="works__link">View More</a>
                    </div>
                  </div>
                  <h4 className="works__title">Minecraft №4</h4>
                  <p className="works__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, illum?</p>
                </div>

                <div className="works__block">
                  <div className="works__image">
                    <img src={photo05} alt="Photo 5" />
                    <div className="image-background">
                      <p>Hello World</p>
                      <a href="" className="works__link">View More</a>
                    </div>
                  </div>
                  <h4 className="works__title">Minecraft №5</h4>
                  <p className="works__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, illum?</p>
                </div>

                <div className="works__block">
                  <div className="works__image">
                    <img src={photo06} alt="Photo 6" />
                    <div className="image-background">
                      <p>Hello World</p>
                      <a href="" className="works__link">View More</a>
                    </div>
                  </div>
                  <h4 className="works__title">Minecraft №6</h4>
                  <p className="works__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, illum?</p>
                </div>

              </div>
            </div>
          </section>

          <section className="contact">
            <div className="container">
              <h2 className="title">
                Contacts
                <div className="title__decor-line"></div>
              </h2>

              <div className="form">
                <input type="text" className="input-name" placeholder="Name" />
                <input type="text" className="input-mail" placeholder="Mail" />
                <textarea className="textarea"></textarea>
                <button className="send-button">SEND</button>
              </div>


            </div>

            <button className="delete-button">Delete Event Listener - Name</button>
          </section>

        </main>
        <footer className="footer">
          <div className="container">
            <h4>Mark Rempel</h4>
            <div className="footer__links">

              <div className="footer__link">
                <img src={svg1} />
              </div>

              <div className="footer__link">
                <img src={svg2} alt="Discord" />
              </div>

              <div className="footer__link">
                <img src={svg3} alt="GitHub" />
              </div>



              {/* <div className="footer__link">
                    <img src="images/icons/twitter_icon.svg" alt="Twitter">
                  </div> */}



              <div className="footer__link">
                <img src={svg4} alt="Codewars" />
              </div>

            </div>
          </div>
        </footer>
      </div>

      <script type="module" src="./script.js"></script>

    </div>
  )
}

export default App
