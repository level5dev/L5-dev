(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Blog = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Blog, _PageManager);
  function Blog() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Blog.prototype;
  _proto.onReady = function onReady() {
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.blogOnClick();
    this.fetchRecentPosts();
  };
  _proto.blogOnClick = function blogOnClick() {
    $("article").on("click", function () {
      var link = $(this).attr("data-link");
      window.location = link;
    });
    $("article").on({
      mouseenter: function mouseenter() {
        console.log("point");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYmxvZy5qcyJdLCJuYW1lcyI6WyJCbG9nIiwib25SZWFkeSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsImJsb2dPbkNsaWNrIiwiZmV0Y2hSZWNlbnRQb3N0cyIsIiQiLCJvbiIsImxpbmsiLCJhdHRyIiwid2luZG93IiwibG9jYXRpb24iLCJtb3VzZWVudGVyIiwiY29uc29sZSIsImxvZyIsImNzcyIsIiRzaWRlYmFyUmVjZW50IiwibGVuZ3RoIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJibG9nIiwicmVjZW50X3Bvc3RzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsInJlcyIsImh0bWwiLCJQYWdlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTTtBQUNPO0FBQUEsSUFFakNBLElBQUk7RUFBQTtFQUFBO0lBQUE7RUFBQTtFQUFBO0VBQUEsT0FDdkJDLE9BQU8sR0FBUCxtQkFBVTtJQUNSQyxtRUFBa0IsRUFBRTtJQUNwQixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNDLGdCQUFnQixFQUFFO0VBQ3pCLENBQUM7RUFBQSxPQUVERCxXQUFXLEdBQVgsdUJBQWM7SUFDWkUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDbkMsSUFBTUMsSUFBSSxHQUFHRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNHLElBQUksQ0FBQyxXQUFXLENBQUM7TUFDdENDLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHSCxJQUFJO0lBQ3hCLENBQUMsQ0FBQztJQUVGRixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNDLEVBQUUsQ0FBQztNQUNkSyxVQUFVLEVBQUUsc0JBQVk7UUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUNwQlIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDUyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztNQUNsQztJQUNGLENBQUMsQ0FBQztFQUNKLENBQUM7RUFBQSxPQUVEVixnQkFBZ0IsR0FBaEIsNEJBQW1CO0lBQ2pCLElBQU1XLGNBQWMsR0FBR1YsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO0lBRWhELElBQUksQ0FBQ1UsY0FBYyxDQUFDQyxNQUFNLEVBQUU7SUFFNUIsSUFBTUMsY0FBYyxHQUFHO01BQ3JCQyxNQUFNLEVBQUU7UUFDTkMsSUFBSSxFQUFFO1VBQ0pDLFlBQVksRUFBRTtZQUNaQyxLQUFLLEVBQUU7VUFDVDtRQUNGO01BQ0YsQ0FBQztNQUNEQyxRQUFRLEVBQUU7SUFDWixDQUFDO0lBRURDLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBRVIsY0FBYyxFQUFFLFVBQUNTLEdBQUcsRUFBRUMsR0FBRyxFQUFLO01BQ25EWixjQUFjLENBQUNhLElBQUksQ0FBQ0QsR0FBRyxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUNKLENBQUM7RUFBQTtBQUFBLEVBeEMrQkUscURBQVciLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSBcIi4vcGFnZS1tYW5hZ2VyXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIkBiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzXCI7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gXCIuL2NvbW1vbi9jb2xsYXBzaWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICBvblJlYWR5KCkge1xuICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuICAgIHRoaXMuYmxvZ09uQ2xpY2soKTtcbiAgICB0aGlzLmZldGNoUmVjZW50UG9zdHMoKTtcbiAgfVxuXG4gIGJsb2dPbkNsaWNrKCkge1xuICAgICQoXCJhcnRpY2xlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgbGluayA9ICQodGhpcykuYXR0cihcImRhdGEtbGlua1wiKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGxpbms7XG4gICAgfSk7XG5cbiAgICAkKFwiYXJ0aWNsZVwiKS5vbih7XG4gICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicG9pbnRcIik7XG4gICAgICAgICQodGhpcykuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBmZXRjaFJlY2VudFBvc3RzKCkge1xuICAgIGNvbnN0ICRzaWRlYmFyUmVjZW50ID0gJChcIiNibG9nLXNpZGViYXItcmVjZW50XCIpO1xuXG4gICAgaWYgKCEkc2lkZWJhclJlY2VudC5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGJsb2c6IHtcbiAgICAgICAgICByZWNlbnRfcG9zdHM6IHtcbiAgICAgICAgICAgIGxpbWl0OiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6IFwiY3VzdG9tL2Jsb2cvYmxvZy1yZWNlbnQtcG9zdC1pdGVtc1wiLFxuICAgIH07XG5cbiAgICB1dGlscy5hcGkuZ2V0UGFnZShcIi9cIiwgcmVxdWVzdE9wdGlvbnMsIChlcnIsIHJlcykgPT4ge1xuICAgICAgJHNpZGViYXJSZWNlbnQuaHRtbChyZXMpO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9