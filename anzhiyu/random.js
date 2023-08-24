var posts=["2021/08/23/360DvrMgr/","2021/08/30/AIDA64/","2023/03/31/AWX/","2022/06/01/DIY220601/","2023/02/27/DIY230227/","2023/03/01/BRICS-FS-11/","2021/08/25/DirectX/","2021/08/30/Diskgenius/","2021/08/30/Dismp2/","2018/01/01/DiyX/","2021/08/30/GPU-Z/","2022/06/16/Hexo-Theme-Butterfly-Tag-Plugins-Demo/","2023/04/01/Ex2/","2022/06/24/Hexo-bilibili-card-Demo/","2022/06/10/IDA/","2022/06/20/Hexo-markmap-demo/","2018/10/01/JavaE/","2023/01/31/KVM/","2022/07/26/Markdown-respace/","2022/07/07/Openwrt-menuconfig/","2022/06/10/PBO2/","2023/01/05/RHCE-EX294/","2021/12/04/Python Socket teach/","2022/06/12/Ryzen5keq/","2023/01/05/RHCSA8-EX200/","2021/08/30/Windows10Manager/","2022/07/26/cdcall/","2022/06/10/Windows11Manager/","2021/08/24/dotNET/","2021/12/06/enspfix40/","2022/06/10/cpuz/","2021/08/21/hwid/","2021/08/21/hash/","2022/01/04/iPerf3/","2021/08/21/idm/","2022/03/13/office/","2022/07/07/openwrt-compilemenu/","2023/02/02/python-man/","2021/12/02/potplayer/","2022/07/07/router-boot/","2022/07/04/router-hardware/","2022/07/04/router-development-common/","2022/06/11/screen/","2022/07/04/router-software/","2021/08/22/sougou/","2021/12/15/serverPlam/","2022/06/10/smms/","2022/07/07/uboot-QCA/","2022/07/07/uboot-MTK/","2021/08/24/vc2plus/","2021/08/21/win11/","2021/12/01/vm16toolsProblem/","2021/08/21/win11install/","2021/12/01/win2008theme/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"De1p`Blog","link":"https://de1p.gitee.io/","avatar":"https://de1p.gitee.io/img/avatar.jpg","descr":"De1p's Blog","siteshot":"https://s2.loli.net/2023/04/01/eSHAXGsM5fPhpiu.jpg","color":"#3b70fc","tag":"技术"},{"name":"HJDragon`Blog","link":"https://www.hh.jl.cn/","avatar":"https://s2.loli.net/2023/03/24/UbMlQ7gAds4r6L3.png","descr":"HJDragon's Blog","siteshot":"https://s2.loli.net/2023/04/01/ISradBKLCnvo81P.jpg","color":"speed","tag":"生活"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg","color":"vip","tag":"技术"},{"name":"De1p`Blog","hundredSuffix":"","link":"https://de1p.gitee.io/","avatar":"https://de1p.gitee.io/img/avatar.jpg","descr":"De1p's Blog"},{"name":"HJDragon`Blog","hundredSuffix":"","link":"https://www.hh.jl.cn/","avatar":"https://s2.loli.net/2023/03/24/UbMlQ7gAds4r6L3.png","descr":"HJDragon's Blog"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };