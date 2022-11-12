import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  LocationMarkerIcon,
  PhoneIcon,
  CameraIcon,
  LoginIcon,
  UserGroupIcon,
  LinkIcon,
} from "@heroicons/react/outline";
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>Amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>Thu Dau Mot, Binh Duong</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <span>0974761679</span>
            </span>
            <span className={css.pngLine}>
              <CameraIcon className={css.icon} />
              <span>HAPH</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sin in</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UserGroupIcon className={css.icon} />
              <span>About us</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span
              className={css.pngLine}
              onClick={() => {
                window.open(
                  "https://github.com/haph762/Ecommerce_ZAINKEEPSCODE",
                  "_blank"
                );
              }}
            >
              <LinkIcon className={css.icon} />
              <span>Visit Git</span>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright &copy;2022 by Haphan</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
