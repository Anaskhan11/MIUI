import React from "react";
import "../style/PreNavbar.css";

const cartIcon = (
  <svg
    className="temp"
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    viewBox="0 0 24 24"
    width="20px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

const PreNavbar = () => {
  return (
    <div className="preNav">
      <div>
        <a href="https://www.mi.com/pk/">MI PAKISTAN</a>
        <span>|</span>
        <a href="https://new.c.mi.com/pk">MI COMMUNITY</a>
        <span>|</span>
        <a href="https://en.miui.com/">MIUI</a>
        <span>|</span>
        <a href="https://event.mi.com/global/xiaomistudios">XIAOMI STUDIO</a>
      </div>
      <div>
        <a href="https://buy.mi.com/pk/site/login">SIGN IN</a>
        <span>|</span>
        <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fbuy.mi.com%2Fpk%2Flogin%2Fcallback%3Fsign%3DYlfWc79ekc%252B%252FGft3ZLKsxFhJRlI%253D%26followup%3Dhttps%253A%252F%252Fpassport.keytool.pt.xiaomi.com%252FssoLoginTest%253Fsid%253Di18n_pk_pc_pro%26sid%3Di18n_pk_pc_pro&sid=i18n_pk_pc_pro&lsrp_checkPwd=true&_ssign=v5QFRsb2k8OFna9Qa873Ej3H52o%3D">
          SIGN UP
        </a>
        <a href="https://store.mi.com/in/site/login"> {cartIcon} CART (0)</a>
      </div>
    </div>
  );
};

export default PreNavbar;
