(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYmxvZy5qcyJdLCJuYW1lcyI6WyJCbG9nIiwib25SZWFkeSIsImJsb2dGaWx0ZXIiLCJjb250ZXh0IiwicG9zdHMiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJibG9nT25DbGljayIsImZldGNoUmVjZW50UG9zdHMiLCJ0YWdBcnIiLCJwcm9kVGFnQXJyIiwiJCIsImdldCIsInJlcyIsInRhZ3NMaXN0IiwiZm9yRWFjaCIsInRhZyIsInByb2R1Y3RMaXN0IiwiaW5jbHVkZXMiLCJwdXNoIiwidGFnRmlsdGVyVGVtcGxhdGUiLCJ0b1VwcGVyQ2FzZSIsImFwcGVuZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluZGV4T2YiLCJwb3N0IiwidGFncyIsIm5hbWUiLCJwcm9kRmlsdGVyVGVtcGxhdGUiLCJ0aGVuIiwibmV4dCIsImNvbmZpZ3VyZUlzb3RvcGUiLCJncmlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlzbyIsIklzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJwcm9kRmlsdGVyVGFnIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcm9kRmlsIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwidG9Mb3dlckNhc2UiLCJhcnIiLCJzcGxpdCIsImNoYXJBdCIsInNsaWNlIiwidGFnQ2FwaXRhbGl6ZWQiLCJqb2luIiwiYXJyYW5nZSIsImZpbHRlciIsIml0ZW1FbGVtIiwidmFsIiwiZ2V0QXR0cmlidXRlIiwib24iLCJsaW5rIiwiYXR0ciIsIm1vdXNlZW50ZXIiLCJjc3MiLCIkc2lkZWJhclJlY2VudCIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiYmxvZyIsInJlY2VudF9wb3N0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJ1dGlscyIsImFwaSIsImdldFBhZ2UiLCJlcnIiLCJodG1sIiwiUGFnZU1hbmFnZXIiXSwibWFwcGlu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Q0FBQztJQUNKO0VBQ0YsQ0FBQztFQUFBLE9BRUQvQyxXQUFXLEdBQVgsdUJBQWM7SUFDWkksQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNrRCxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDbkQsSUFBTUMsSUFBSSxHQUFHbkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDb0QsSUFBSSxDQUFDLFdBQVcsQ0FBQztNQUN0Q3hDLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHc0MsSUFBSTtJQUN4QixDQUFDLENBQUM7SUFFRm5ELENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDa0QsRUFBRSxDQUFDO01BQzlCRyxVQUFVLEVBQUUsc0JBQVk7UUFDdEJyRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNzRCxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztNQUNsQztJQUNGLENBQUMsQ0FBQztFQUNKLENBQUM7RUFBQSxPQUVEekQsZ0JBQWdCLEdBQWhCLDRCQUFtQjtJQUNqQixJQUFNMEQsY0FBYyxHQUFHdkQsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO0lBRWhELElBQUksQ0FBQ3VELGNBQWMsQ0FBQ3ZCLE1BQU0sRUFBRTtJQUU1QixJQUFNd0IsY0FBYyxHQUFHO01BQ3JCQyxNQUFNLEVBQUU7UUFDTkMsSUFBSSxFQUFFO1VBQ0pDLFlBQVksRUFBRTtZQUNaQyxLQUFLLEVBQUU7VUFDVDtRQUNGO01BQ0YsQ0FBQztNQUNEQyxRQUFRLEVBQUU7SUFDWixDQUFDO0lBRURDLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBRVIsY0FBYyxFQUFFLFVBQUNTLEdBQUcsRUFBRS9ELEdBQUcsRUFBSztNQUNuRHFELGNBQWMsQ0FBQ1csSUFBSSxDQUFDaEUsR0FBRyxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUNKLENBQUM7RUFBQTtBQUFBLEVBN0grQmlFLHFEQUFXIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tIFwiLi9wYWdlLW1hbmFnZXJcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHNcIjtcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSBcIi4vY29tbW9uL2NvbGxhcHNpYmxlXCI7XG5pbXBvcnQgSXNvdG9wZSBmcm9tIFwiaXNvdG9wZS1sYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZyBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgb25SZWFkeSgpIHtcbiAgICB0aGlzLmJsb2dGaWx0ZXIodGhpcy5jb250ZXh0LnBvc3RzKTtcbiAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcbiAgICB0aGlzLmJsb2dPbkNsaWNrKCk7XG4gICAgdGhpcy5mZXRjaFJlY2VudFBvc3RzKCk7XG4gIH1cblxuICBibG9nRmlsdGVyKHBvc3RzKSB7XG4gICAgbGV0IHRhZ0FyciA9IFtdO1xuICAgIGxldCBwcm9kVGFnQXJyID0gW107XG4gICAgJC5nZXQoXCJodHRwczovL3N1ZnJpLmF1dG9jb2RlLmRldi9sNXRAZGV2L2dldFByb2RMaXN0QVQvXCIsIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJlcy50YWdzTGlzdC5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgICAgaWYgKCFyZXMucHJvZHVjdExpc3QuaW5jbHVkZXModGFnKSkge1xuICAgICAgICAgIHRhZ0Fyci5wdXNoKHRhZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0YWdBcnIuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhZ0ZpbHRlclRlbXBsYXRlID0gYDxsaSBjbGFzcz1cImJsb2ctc2lkZWJhcl9fbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL2Jsb2cvdGFnLyR7dGFnfVwiPiR7dGFnLnRvVXBwZXJDYXNlKCl9PC9hPlxuICAgICAgICA8L2xpPmA7XG5cbiAgICAgICAgJChcIiN0YWdMaXN0XCIpLmFwcGVuZCh0YWdGaWx0ZXJUZW1wbGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCJ0YWdcIikgPiAtMSkge1xuICAgICAgICAkKFwiI3RhZ0ZpbHRlckxpc3RcIikuYXBwZW5kKGA8bGkgY2xhc3M9XCJibG9nLXNpZGViYXJfX2xpc3QtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9ibG9nL1wiPlNIT1cgQUxMPC9hPlxuICAgICAgICA8L2xpPmApO1xuICAgICAgfVxuXG4gICAgICBwb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XG4gICAgICAgIHBvc3QudGFncy5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICByZXMucHJvZHVjdExpc3QuaW5jbHVkZXModGFnLm5hbWUpICYmXG4gICAgICAgICAgICAhcHJvZFRhZ0Fyci5pbmNsdWRlcyh0YWcubmFtZSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByb2RUYWdBcnIucHVzaCh0YWcubmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9kVGFnQXJyLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICBjb25zdCBwcm9kRmlsdGVyVGVtcGxhdGUgPSBgPGxpIGNsYXNzPVwiYmxvZy1zaWRlYmFyX19saXN0LWl0ZW0gcHJvZHVjdC10YWdcIj5cbiAgICAgICAgICAgIDxhPiR7dGFnLnRvVXBwZXJDYXNlKCl9PC9hPlxuICAgICAgICA8L2xpPmA7XG5cbiAgICAgICAgJChcIiNwcm9kdWN0TGlzdFwiKS5hcHBlbmQocHJvZEZpbHRlclRlbXBsYXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKFwiI3Byb2R1Y3RMaXN0XCIpLmFwcGVuZChcbiAgICAgICAgYDxsaSBjbGFzcz1cImJsb2ctc2lkZWJhcl9fbGlzdC1pdGVtIHByb2R1Y3QtdGFnXCI+PGE+U0hPVyBBTEw8L2E+PC9saT5gXG4gICAgICApO1xuICAgIH0pLnRoZW4oKG5leHQpID0+IHtcbiAgICAgIHRoaXMuY29uZmlndXJlSXNvdG9wZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uZmlndXJlSXNvdG9wZSgpIHtcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvZ1Bvc3RzQ29udGFpbmVyXCIpO1xuICAgIGxldCBpc28gPSBuZXcgSXNvdG9wZShncmlkLCB7IGl0ZW1TZWxlY3RvcjogXCIuYmxvZy1wb3N0X19jYXJkXCIgfSk7XG5cbiAgICBsZXQgcHJvZEZpbHRlclRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZHVjdC10YWdcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2RGaWx0ZXJUYWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb2RGaWx0ZXJUYWdbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBsZXQgcHJvZEZpbCA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgYXJyID0gcHJvZEZpbC5zcGxpdChcIiBcIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJyW2ldID0gYXJyW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYXJyW2ldLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhZ0NhcGl0YWxpemVkID0gYXJyLmpvaW4oXCIgXCIpO1xuXG4gICAgICAgIGlmICh0YWdDYXBpdGFsaXplZCA9PT0gXCJTaG93IEFsbFwiKSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2UoeyBmaWx0ZXI6IFwiKlwiIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZmlsdGVyXCIpO1xuXG4gICAgICAgICAgICAgIGlmICh2YWwuaW5jbHVkZXModGFnQ2FwaXRhbGl6ZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBibG9nT25DbGljaygpIHtcbiAgICAkKFwiYXJ0aWNsZS5ibG9nLXBvc3RfX2NhcmRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBsaW5rID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1saW5rXCIpO1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gbGluaztcbiAgICB9KTtcblxuICAgICQoXCJhcnRpY2xlLmJsb2ctcG9zdF9fY2FyZFwiKS5vbih7XG4gICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBmZXRjaFJlY2VudFBvc3RzKCkge1xuICAgIGNvbnN0ICRzaWRlYmFyUmVjZW50ID0gJChcIiNibG9nLXNpZGViYXItcmVjZW50XCIpO1xuXG4gICAgaWYgKCEkc2lkZWJhclJlY2VudC5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGJsb2c6IHtcbiAgICAgICAgICByZWNlbnRfcG9zdHM6IHtcbiAgICAgICAgICAgIGxpbWl0OiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6IFwiY3VzdG9tL2Jsb2cvYmxvZy1yZWNlbnQtcG9zdC1pdGVtc1wiLFxuICAgIH07XG5cbiAgICB1dGlscy5hcGkuZ2V0UGFnZShcIi9cIiwgcmVxdWVzdE9wdGlvbnMsIChlcnIsIHJlcykgPT4ge1xuICAgICAgJHNpZGViYXJSZWNlbnQuaHRtbChyZXMpO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9