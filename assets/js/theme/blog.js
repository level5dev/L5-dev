import PageManager from "./page-manager";
import utils from "@bigcommerce/stencil-utils";
import collapsibleFactory from "./common/collapsible";

export default class Blog extends PageManager {
  onReady() {
    collapsibleFactory();
    this.blogOnClick();
    this.fetchRecentPosts();
  }

  blogOnClick() {
    $("article").on("click", function () {
      const link = $(this).attr("data-link");
      window.location = link;
    });

    $("article").on({
      mouseenter: function () {
        console.log("point");
        $(this).css("cursor", "pointer");
      },
    });
  }

  fetchRecentPosts() {
    const $sidebarRecent = $("#blog-sidebar-recent");

    if (!$sidebarRecent.length) return;

    const requestOptions = {
      config: {
        blog: {
          recent_posts: {
            limit: 5,
          },
        },
      },
      template: "custom/blog/blog-recent-post-items",
    };

    utils.api.getPage("/", requestOptions, (err, res) => {
      $sidebarRecent.html(res);
    });
  }
}
