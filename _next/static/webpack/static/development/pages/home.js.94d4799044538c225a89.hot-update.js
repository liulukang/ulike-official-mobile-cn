webpackHotUpdate("static/development/pages/home.js",{

/***/ "../data/home.js":
/*!***********************!*\
  !*** ../data/home.js ***!
  \***********************/
/*! exports provided: title, solution, ability, advantage, business, partner, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solution", function() { return solution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ability", function() { return ability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advantage", function() { return advantage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "business", function() { return business; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partner", function() { return partner; });
const title =
  '专注于为企业提供PCBA代工，PCB 2-8层板生产、SMT贴片焊接、DIP插件焊接、测试、组装、塑胶磨具的制作、塑胶五金件的生产全套一站式电子产品代工服务 ';

const solution = {
  title: '产品和解决方案',
  dataSource: [
    {
      title: 'PCBA电路板研发设计',
      des: '硬件开发,方案优化,产品原型开发与功能验证,‌制造生产全流程‌',
      icon: 'iconfont iconzhaopin',
    },
    { title: 'SMT贴片焊接', des: '完全独立的全自动贴片线', icon: 'iconfont iconmanage' },
    { title: 'DIP插件焊接', des: '高效完善的生成流程', icon: 'iconfont iconjiedaishenqing' },
    // { title: '元器件采购', des: '原厂一级代理', icon: 'iconfont iconresources-h' },
    {
      title: '组装测试',
      des: '智能监测 + 人工并轨模式',
      icon: 'iconfont icontishengzhuanhuashuai',
    },
    {
      title: '塑胶注塑磨具',
      des: '塑胶、压铸、铝合金外壳磨具及产品生产',
      icon: 'iconfont iconpeixun ',
    },
  ],
};

// 制程能力
const ability = {
  title: 'PCBA 制程能力',
  desc: '快速交货能力，双面快件24小时内完成，多层快件可在2-4天内完成；',
  dataSource: [
    {
      key: 1,
      title: '制程工艺能力',
      icon: __webpack_require__(/*! @/static/images/cases/pcba/cases/1/images/ia_200000001.jpg */ "./static/images/cases/pcba/cases/1/images/ia_200000001.jpg"),
      descs: [
        `制造工艺：层数：1-32，最小线宽/间距：3.0mil，最大板厚孔径比：30:1，最小机械钻孔孔径：6mil `,
        `表面处理工艺：无铅喷锡、化学沉金、化学镍钯金、沉锡、沉银、全板镀金、有机涂覆处理、无铅喷锡、镀硬金、镀软金、金手指等 `,
        `材料：FR-4、高TG、无卤素、高频（Rogers、Arlon\Taconic、Nelco、泰兴微波F4B、Isola...)等 最大板尺寸：22.5″* 42.5″`,
      ],
    },
    {
      key: 2,
      title: '制程工艺能力',
      icon: __webpack_require__(/*! @/static/images/cases/pcba/cases/6/images/ia_800000001.jpg */ "./static/images/cases/pcba/cases/6/images/ia_800000001.jpg"),
      descs: [
        `层数：1-12L（金属基板＆金属芯板）、2-24L（埋/嵌金属板＆冷板＆烧结板）、1-2L（陶瓷DBC板)、板厚：0.5-7.0mm 尺寸：max:610*610 ,min:5*5mm`,
        `导热材料导热系数：常规导热材料：1-4W/m.k; 陶瓷导热材料：24-170W/m`,
        `类型：Pre-bonding、Postbonding、烧结工艺、金属夹芯、埋金属块、冷板、陶瓷DBC板`,
      ],
    },
  ],
};

// 服务优势
const advantage = {
  title: '服务优势',
  desc: '优莱克以专业专注、守时守信 为公司理念，竭力为合作客户 商提供专业的整体解决方案',
  dataSource: [
    {
      title: '快速交付能力',
      iconPosition: '0px 230px',
      desc: '客户在提供资料24小时内提供报价，确认订单材料最快4小时内交付',
    },
    {
      title: '精细化管理',
      iconPosition: '0px 460px',
      desc: '客户主管、技术主管、质检主管，精细化运营管理，为客 户提供安全放心的服务保障。',
    },
    {
      title: '双重质检保障',
      iconPosition: '0px 345px',
      desc: '双重质检，采用智能监测 + 人工并轨模式，定期提供质检报告。',
    },
    {
      title: '定制化解决方案',
      iconPosition: '0px 0px',
      desc: '定制化外包，为客户提供咨询服务，提供专属解决方案。',
    },
    {
      title: '全时服务咨询',
      iconPosition: '0px 115px',
      desc: '7*16 小时服务咨询',
    },
  ],
};

// 多行业
const business = {
  title: '全面支持 多行业',
  desc: '针对您的业务属性提供多种 可选的服务模式',
  dataSource: [
    {
      title: '医疗设备',
      icon: __webpack_require__(/*! @/static/images/icon/img3.png */ "./static/images/icon/img3.png"),
      desc: 'armarium',
    },
    {
      title: '智能安防',
      icon: __webpack_require__(/*! @/static/images/icon/img1.png */ "./static/images/icon/img1.png"),
      desc: 'safe-guard',
    },
    {
      title: '工业电子',
      icon: __webpack_require__(/*! @/static/images/icon/img2.png */ "./static/images/icon/img2.png"),
      desc: 'industrial',
    },
    {
      title: '汽车电子',
      icon: __webpack_require__(/*! @/static/images/icon/img4.png */ "./static/images/icon/img4.png"),
      desc: 'automotive',
    },
  ],
};

// 多行业
const partner = {
  title: '合作伙伴',
  desc: '累计服务超过1000+',
  dataSource: [
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor20157215454400.jpg */ "./static/images/company/Editor20157215454400.jpg"),
      title: '正崴集团',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor20157215459477.jpg */ "./static/images/company/Editor20157215459477.jpg"),
      title: 'gsmfather',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor20157215474951.jpg */ "./static/images/company/Editor20157215474951.jpg"),
      title: '奥维通信',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor201572154450303.gif */ "./static/images/company/Editor201572154450303.gif"),
      title: 'Brown and Caldwell',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor201572154457216.jpg */ "./static/images/company/Editor201572154457216.jpg"),
      title: '富士康',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor201572154529816.jpg */ "./static/images/company/Editor201572154529816.jpg"),
      title: '华为',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor201572154557171.jpg */ "./static/images/company/Editor201572154557171.jpg"),
      title: '希捷',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor201572154616481.jpg */ "./static/images/company/Editor201572154616481.jpg"),
      title: '松下',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor201572154645334.jpg */ "./static/images/company/Editor201572154645334.jpg"),
      title: '五洲龙',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor201572154657489.jpg */ "./static/images/company/Editor201572154657489.jpg"),
      title: '安保科技',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor201572154712765.jpg */ "./static/images/company/Editor201572154712765.jpg"),
      title: '大族明信',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor201572154720675.jpg */ "./static/images/company/Editor201572154720675.jpg"),
      title: '瑞思可',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor201572154729155.jpg */ "./static/images/company/Editor201572154729155.jpg"),
      title: '瑞沃德',
    },
    {
      icon: __webpack_require__(/*! @/static/images/company/Editor201572154736267.jpg */ "./static/images/company/Editor201572154736267.jpg"),
      title: '亚辉龙',
    },
  ],
};

/* harmony default export */ __webpack_exports__["default"] = ({
  title,
  solution,
  ability,
  advantage,
  business,
  partner,
});


/***/ })

})
//# sourceMappingURL=home.js.94d4799044538c225a89.hot-update.js.map