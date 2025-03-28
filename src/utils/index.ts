/**
 * @description 获取浏览器默认语言
 * @returns {String}
 */
export function getBrowserLang() {
  const browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
  let defaultBrowserLang = "";
  if (["cn", "zh", "zh-cn"].includes(browserLang.toLowerCase())) {
    defaultBrowserLang = "zh";
  } else {
    defaultBrowserLang = "en";
  }
  return defaultBrowserLang;
}

/**
 * @description: 设置html的font-size
 */
export function setupRem(): void {
  const setRem = () => {
    const htmlDom = document.documentElement;
    const width = htmlDom.clientWidth;
    if (width <= 1920) {
      htmlDom.style.fontSize = 16 + "px";
    } else {
      // 这里假设设计稿宽度大于1920px，划分为120份，即1rem = 16px
      const fontSize = width / 120;
      htmlDom.style.fontSize = fontSize + "px";
    }
  };

  // 初始化
  setRem();

  // 改变窗口大小时重新设置
  window.addEventListener("resize", setRem);

  // 页面显示隐藏时重新设置
  document.addEventListener("visibilitychange", setRem);
}
