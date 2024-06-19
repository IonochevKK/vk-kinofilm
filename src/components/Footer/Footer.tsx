import "./footer.scss";
import Button from "../UI KIT/Button/Button";
import Text from "../UI KIT/Text/Text";
import AdvertisementImg from "../../../public/image/amediateka-promo.png";
import LogoVKSvg from "../../../public/svg/vk_logo.svg?react";
import LogoTwitterSvg from "../../../public/svg/twitter_logo.svg?react";
import LogoTelegrammSvg from "../../../public/svg/telegramm_logo.svg?react";
import LogoYouTubeSvg from "../../../public/svg/youtube_logo.svg?react";
import { useResizeWidth } from "../../hooks/useResizeWidth";

const Footer = () => {
  const screenMobile = useResizeWidth(550);
  return (
    <footer>
      <div className="container-footer">
        <div className="container-advertisement">
          <div className="left">
            <div className="title">
              <Text h1 color="white">
                Смотрите сериалы в Плюсе с Амедиатекой
              </Text>
            </div>
            <div className="desc">
              <Text body3_bold color="hsla(0, 0%, 100%, .8)">
                7 дней бесплатно, далее 3990 ₽ в год
              </Text>
            </div>
            <div className="button-advertisement">
              {!screenMobile && (
                <Button type="primary">
                  <Text color="white" body4_bold>
                    Попробовать бесплатно
                  </Text>
                </Button>
              )}
              {screenMobile && (
                <Button type="primary" block>
                  <Text color="white" body4_bold>
                    Попробовать бесплатно
                  </Text>
                </Button>
              )}
            </div>
          </div>
          <div className="right">
            <img
              src={AdvertisementImg}
              alt="Рекламный баннер популярных сериалов Амедиатеки"
            />
          </div>
        </div>
        <section className="container-links">
          <div className="menu-links">
            <div className="link">
              <a href="#" aria-label="Страница Вконтакте">
                <LogoVKSvg />
              </a>
            </div>
            <div className="link">
              <a href="#" aria-label="Страница Твиттера">
                <LogoTwitterSvg />
              </a>
            </div>
            <div className="link">
              <a href="#" aria-label="Страница Телеграмма">
                <LogoTelegrammSvg />
              </a>
            </div>
            <div className="link">
              <a href="#" aria-label="Страница Ютуба">
                <LogoYouTubeSvg />
              </a>
            </div>
          </div>
        </section>
        <div className="container-nav-links">
          <nav>
            <ul className="container-items-links">
              <li className="item-links">
                <a href="/">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Вакансии
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Реклама
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Соглашение
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Правила рекомендации
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Справка
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Блог
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Кинопоиск PRO
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Предложения
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Все фильмы
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Все сериалы
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Все мультфильмы
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Передачи и шоу
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Рекомендации кино
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Акции и подписка
                  </Text>
                </a>
              </li>
              <li className="item-links">
                <a href="">
                  <Text body4 color="hsla(0, 0%, 100%, 0.6)">
                    Служба поддержки
                  </Text>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
