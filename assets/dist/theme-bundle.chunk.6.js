(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./assets/js/theme/blog.js":
/*!*********************************!*\
  !*** ./assets/js/theme/blog.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_3__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Blog = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Blog, _PageManager);
  function Blog() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Blog.prototype;
  _proto.onReady = function onReady() {
    this.blogFilter(this.context.posts);
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.blogOnClick();
    this.fetchRecentPosts();
  };
  _proto.blogFilter = function blogFilter(posts) {
    var _this = this;
    var tagArr = [];
    var prodTagArr = [];
    $.get("https://sufri.autocode.dev/l5t@dev/getProdListAT/", function (res) {
      res.tagsList.forEach(function (tag) {
        if (!res.productList.includes(tag)) {
          tagArr.push(tag);
        }
      });
      tagArr.forEach(function (tag) {
        var tagFilterTemplate = "<li class=\"blog-sidebar__list-item\">\n            <a href=\"/blog/tag/" + tag + "\">" + tag.toUpperCase() + "</a>\n        </li>";
        $("#tagList").append(tagFilterTemplate);
      });
      if (window.location.href.indexOf("tag") > -1) {
        $("#tagFilterList").append("<li class=\"blog-sidebar__list-item\">\n            <a href=\"/blog/\">SHOW ALL</a>\n        </li>");
      }
      posts.forEach(function (post) {
        post.tags.forEach(function (tag) {
          if (res.productList.includes(tag.name) && !prodTagArr.includes(tag.name)) {
            prodTagArr.push(tag.name);
          }
        });
      });
      prodTagArr.forEach(function (tag) {
        var prodFilterTemplate = "<li class=\"blog-sidebar__list-item product-tag\">\n            <a>" + tag.toUpperCase() + "</a>\n        </li>";
        $("#productList").append(prodFilterTemplate);
      });
      $("#productList").append("<li class=\"blog-sidebar__list-item product-tag\"><a>SHOW ALL</a></li>");
    }).then(function (next) {
      _this.configureIsotope();
    });
  };
  _proto.configureIsotope = function configureIsotope() {
    var grid = document.getElementById("blogPostsContainer");
    var iso = new isotope_layout__WEBPACK_IMPORTED_MODULE_3___default.a(grid, {
      itemSelector: ".blog-post__card"
    });
    var prodFilterTag = document.querySelectorAll(".product-tag");
    for (var i = 0; i < prodFilterTag.length; i++) {
      prodFilterTag[i].addEventListener("click", function (event) {
        var prodFil = event.target.innerHTML.toLowerCase();
        var arr = prodFil.split(" ");
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        var tagCapitalized = arr.join(" ");
        if (tagCapitalized === "Show All") {
          iso.arrange({
            filter: "*"
          });
        } else {
          iso.arrange({
            filter: function filter(itemElem) {
              var val = itemElem.getAttribute("data-filter");
              if (val.includes(tagCapitalized)) {
                return true;
              } else {
                return false;
              }
            }
          });
        }
      });
    }
  };
  _proto.blogOnClick = function blogOnClick() {
    $("article.blog-post__card").on("click", function () {
      var link = $(this).attr("data-link");
      window.location = link;
    });
    $("article.blog-post__card").on({
      mouseenter: function mouseenter() {
        $(this).css("cursor", "pointer");
      }
    });
  };
  _proto.fetchRecentPosts = function fetchRecentPosts() {
    var $sidebarRecent = $("#blog-sidebar-recent");
    if (!$sidebarRecent.length) return;
    var requestOptions = {
      config: {
        blog: {
          recent_posts: {
            limit: 5
          }
        }
      },
      template: "custom/blog/blog-recent-post-items"
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.getPage("/", requestOptions, function (err, res) {
      $sidebarRecent.html(res);
    });
  };
  return Blog;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYmxvZy5qcyJdLCJuYW1lcyI6WyJCbG9nIiwib25SZWFkeSIsImJsb2dGaWx0ZXIiLCJjb250ZXh0IiwicG9zdHMiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJibG9nT25DbGljayIsImZldGNoUmVjZW50UG9zdHMiLCJ0YWdBcnIiLCJwcm9kVGFnQXJyIiwiJCIsImdldCIsInJlcyIsInRhZ3NMaXN0IiwiZm9yRWFjaCIsInRhZyIsInByb2R1Y3RMaXN0IiwiaW5jbHVkZXMiLCJwdXNoIiwidGFnRmlsdGVyVGVtcGxhdGUiLCJ0b1VwcGVyQ2FzZSIsImFwcGVuZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluZGV4T2YiLCJwb3N0IiwidGFncyIsIm5hbWUiLCJwcm9kRmlsdGVyVGVtcGxhdGUiLCJ0aGVuIiwibmV4dCIsImNvbmZpZ3VyZUlzb3RvcGUiLCJncmlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlzbyIsIklzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJwcm9kRmlsdGVyVGFnIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcm9kRmlsIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwidG9Mb3dlckNhc2UiLCJhcnIiLCJzcGxpdCIsImNoYXJBdCIsInNsaWNlIiwidGFnQ2FwaXRhbGl6ZWQiLCJqb2luIiwiYXJyYW5nZSIsImZpbHRlciIsIml0ZW1FbGVtIiwidmFsIiwiZ2V0QXR0cmlidXRlIiwib24iLCJsaW5rIiwiYXR0ciIsIm1vdXNlZW50ZXIiLCJjc3MiLCIkc2lkZWJhclJlY2VudCIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiYmxvZyIsInJlY2VudF9wb3N0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJ1dGlscyIsImFwaSIsImdldFBhZ2UiLCJlcnIiLCJodG1sIiwiUGFnZU1hbmFnZXIiXSwibWFwcGlu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Q0FBQztJQUNKO0VBQ0YsQ0FBQztFQUFBLE9BRUQvQyxXQUFXLEdBQVgsdUJBQWM7SUFDWkksQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNrRCxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDbkQsSUFBTUMsSUFBSSxHQUFHbkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDb0QsSUFBSSxDQUFDLFdBQVcsQ0FBQztNQUN0Q3hDLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHc0MsSUFBSTtJQUN4QixDQUFDLENBQUM7SUFFRm5ELENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDa0QsRUFBRSxDQUFDO01BQzlCRyxVQUFVLEVBQUUsc0JBQVk7UUFDdEJyRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNzRCxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztNQUNsQztJQUNGLENBQUMsQ0FBQztFQUNKLENBQUM7RUFBQSxPQUVEekQsZ0JBQWdCLEdBQWhCLDRCQUFtQjtJQUNqQixJQUFNMEQsY0FBYyxHQUFHdkQsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO0lBRWhELElBQUksQ0FBQ3VELGNBQWMsQ0FBQ3ZCLE1BQU0sRUFBRTtJQUU1QixJQUFNd0IsY0FBYyxHQUFHO01BQ3JCQyxNQUFNLEVBQUU7UUFDTkMsSUFBSSxFQUFFO1VBQ0pDLFlBQVksRUFBRTtZQUNaQyxLQUFLLEVBQUU7VUFDVDtRQUNGO01BQ0YsQ0FBQztNQUNEQyxRQUFRLEVBQUU7SUFDWixDQUFDO0lBRURDLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBRVIsY0FBYyxFQUFFLFVBQUNTLEdBQUcsRUFBRS9ELEdBQUcsRUFBSztNQUNuRHFELGNBQWMsQ0FBQ1csSUFBSSxDQUFDaEUsR0FBRyxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUNKLENBQUM7RUFBQTtBQUFBLEVBN0grQmlFLHFEQUFXIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay42LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gXCIuL3BhZ2UtbWFuYWdlclwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlsc1wiO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tIFwiLi9jb21tb24vY29sbGFwc2libGVcIjtcbmltcG9ydCBJc290b3BlIGZyb20gXCJpc290b3BlLWxheW91dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICBvblJlYWR5KCkge1xuICAgIHRoaXMuYmxvZ0ZpbHRlcih0aGlzLmNvbnRleHQucG9zdHMpO1xuICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuICAgIHRoaXMuYmxvZ09uQ2xpY2soKTtcbiAgICB0aGlzLmZldGNoUmVjZW50UG9zdHMoKTtcbiAgfVxuXG4gIGJsb2dGaWx0ZXIocG9zdHMpIHtcbiAgICBsZXQgdGFnQXJyID0gW107XG4gICAgbGV0IHByb2RUYWdBcnIgPSBbXTtcbiAgICAkLmdldChcImh0dHBzOi8vc3VmcmkuYXV0b2NvZGUuZGV2L2w1dEBkZXYvZ2V0UHJvZExpc3RBVC9cIiwgZnVuY3Rpb24gKHJlcykge1xuICAgICAgcmVzLnRhZ3NMaXN0LmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICBpZiAoIXJlcy5wcm9kdWN0TGlzdC5pbmNsdWRlcyh0YWcpKSB7XG4gICAgICAgICAgdGFnQXJyLnB1c2godGFnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRhZ0Fyci5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgICAgY29uc3QgdGFnRmlsdGVyVGVtcGxhdGUgPSBgPGxpIGNsYXNzPVwiYmxvZy1zaWRlYmFyX19saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYmxvZy90YWcvJHt0YWd9XCI+JHt0YWcudG9VcHBlckNhc2UoKX08L2E+XG4gICAgICAgIDwvbGk+YDtcblxuICAgICAgICAkKFwiI3RhZ0xpc3RcIikuYXBwZW5kKHRhZ0ZpbHRlclRlbXBsYXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihcInRhZ1wiKSA+IC0xKSB7XG4gICAgICAgICQoXCIjdGFnRmlsdGVyTGlzdFwiKS5hcHBlbmQoYDxsaSBjbGFzcz1cImJsb2ctc2lkZWJhcl9fbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL2Jsb2cvXCI+U0hPVyBBTEw8L2E+XG4gICAgICAgIDwvbGk+YCk7XG4gICAgICB9XG5cbiAgICAgIHBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcbiAgICAgICAgcG9zdC50YWdzLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHJlcy5wcm9kdWN0TGlzdC5pbmNsdWRlcyh0YWcubmFtZSkgJiZcbiAgICAgICAgICAgICFwcm9kVGFnQXJyLmluY2x1ZGVzKHRhZy5uYW1lKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJvZFRhZ0Fyci5wdXNoKHRhZy5uYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2RUYWdBcnIuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2RGaWx0ZXJUZW1wbGF0ZSA9IGA8bGkgY2xhc3M9XCJibG9nLXNpZGViYXJfX2xpc3QtaXRlbSBwcm9kdWN0LXRhZ1wiPlxuICAgICAgICAgICAgPGE+JHt0YWcudG9VcHBlckNhc2UoKX08L2E+XG4gICAgICAgIDwvbGk+YDtcblxuICAgICAgICAkKFwiI3Byb2R1Y3RMaXN0XCIpLmFwcGVuZChwcm9kRmlsdGVyVGVtcGxhdGUpO1xuICAgICAgfSk7XG5cbiAgICAgICQoXCIjcHJvZHVjdExpc3RcIikuYXBwZW5kKFxuICAgICAgICBgPGxpIGNsYXNzPVwiYmxvZy1zaWRlYmFyX19saXN0LWl0ZW0gcHJvZHVjdC10YWdcIj48YT5TSE9XIEFMTDwvYT48L2xpPmBcbiAgICAgICk7XG4gICAgfSkudGhlbigobmV4dCkgPT4ge1xuICAgICAgdGhpcy5jb25maWd1cmVJc290b3BlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb25maWd1cmVJc290b3BlKCkge1xuICAgIGxldCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9nUG9zdHNDb250YWluZXJcIik7XG4gICAgbGV0IGlzbyA9IG5ldyBJc290b3BlKGdyaWQsIHsgaXRlbVNlbGVjdG9yOiBcIi5ibG9nLXBvc3RfX2NhcmRcIiB9KTtcblxuICAgIGxldCBwcm9kRmlsdGVyVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9kdWN0LXRhZ1wiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZEZpbHRlclRhZy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvZEZpbHRlclRhZ1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBwcm9kRmlsID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBhcnIgPSBwcm9kRmlsLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcnJbaV0gPSBhcnJbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhcnJbaV0uc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFnQ2FwaXRhbGl6ZWQgPSBhcnIuam9pbihcIiBcIik7XG5cbiAgICAgICAgaWYgKHRhZ0NhcGl0YWxpemVkID09PSBcIlNob3cgQWxsXCIpIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7IGZpbHRlcjogXCIqXCIgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1maWx0ZXJcIik7XG5cbiAgICAgICAgICAgICAgaWYgKHZhbC5pbmNsdWRlcyh0YWdDYXBpdGFsaXplZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGJsb2dPbkNsaWNrKCkge1xuICAgICQoXCJhcnRpY2xlLmJsb2ctcG9zdF9fY2FyZFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGxpbmsgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWxpbmtcIik7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBsaW5rO1xuICAgIH0pO1xuXG4gICAgJChcImFydGljbGUuYmxvZy1wb3N0X19jYXJkXCIpLm9uKHtcbiAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGZldGNoUmVjZW50UG9zdHMoKSB7XG4gICAgY29uc3QgJHNpZGViYXJSZWNlbnQgPSAkKFwiI2Jsb2ctc2lkZWJhci1yZWNlbnRcIik7XG5cbiAgICBpZiAoISRzaWRlYmFyUmVjZW50Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgYmxvZzoge1xuICAgICAgICAgIHJlY2VudF9wb3N0czoge1xuICAgICAgICAgICAgbGltaXQ6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZTogXCJjdXN0b20vYmxvZy9ibG9nLXJlY2VudC1wb3N0LWl0ZW1zXCIsXG4gICAgfTtcblxuICAgIHV0aWxzLmFwaS5nZXRQYWdlKFwiL1wiLCByZXF1ZXN0T3B0aW9ucywgKGVyciwgcmVzKSA9PiB7XG4gICAgICAkc2lkZWJhclJlY2VudC5odG1sKHJlcyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=