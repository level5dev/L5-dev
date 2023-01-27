(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _custom_its_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom/its-category */ "./assets/js/theme/custom/its-category.js");
/* harmony import */ var _custom_toggle_category_listing_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom/toggle-category-listing-view */ "./assets/js/theme/custom/toggle-category-listing-view.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _custom_its_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom/its-global */ "./assets/js/theme/custom/its-global.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);

    /**
     * IntuitSolutions - Custom Category
     */
    _this.ITSCategory = new _custom_its_category__WEBPACK_IMPORTED_MODULE_5__["default"](context);
    _this.toggleCategoryListingView = new _custom_toggle_category_listing_view__WEBPACK_IMPORTED_MODULE_6__["default"](context);
    return _this;
  }
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      "aria-live": ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$("[data-shop-by-price]").length) return;
    if ($(".navList-action").hasClass("is-active")) {
      $("a.navList-action.is-active").focus();
    }
    $("a.navList-action").on("click", function () {
      return _this2.setLiveRegionAttributes($("span.price-filter-message"), "status", "assertive");
    });
  }
  /*
  setUpIsotopeAttribute() {
    let data = {};
    const products = this.context.productList;
    const body = this;
    axios
      .get("https://sufri.api.stdlib.com/l5t@dev/getItemAttr/")
      .then(function (response) {
        data = response.data;
        products.forEach((pr) => {
          const el = $(`#product-${pr.id}`);
          el.attr(
            "product-date-created",
            data[`product-${pr.id}`]["date_created"]
          );
          el.attr("product-is-featured", data[`product-${pr.id}`]["featured"]);
          el.attr(
            "product-best-selling",
            data[`product-${pr.id}`]["best_selling"]
          );
        });
         body.configureIsotope();
      });
  }
   configureIsotope() {
    $(".grid").css("display", "grid");
    let grid = document.getElementById("grid-block");
    let iso = new Isotope(grid, {
      // options...
      itemSelector: ".product",
      layoutMode: "fitRows",
      getSortData: {
        name: function (itemElem) {
          return itemElem.getAttribute("product-data-name");
        },
        price: function (itemElem) {
          return Number(itemElem.getAttribute("product-data-price"));
        },
        review: function (itemElem) {
          return itemElem.getAttribute("product-data-review");
        },
        category: function (itemElem) {
          return itemElem.getAttribute("product-data-category");
        },
        best_selling: function (itemElem) {
          return Number(itemElem.getAttribute("product-best-selling"));
        },
        newest: function (itemElem) {
          return itemElem.getAttribute("product-date-created");
        },
        rating_count: function (itemElem) {
          return itemElem.getAttribute("product-review-count");
        },
      },
    });
     $("#sort-select").change(function () {
      const val = $(this).val().split("-");
      console.log(val[0]);
      if (val[0] === "review") {
        console.log("rec");
        iso.arrange({
          sortBy: [val[0], "rating_count"],
          sortAscending: {
            review: false,
            rating_count: false,
          },
        });
      } else {
        iso.arrange({
          sortBy: val[0],
          sortAscending: val[1] === "asc",
        });
      }
    });
     $("#featured-checkbox").change(function () {
      if (this.checked) {
        iso.arrange({
          filter: function (itemElem) {
            return itemElem.getAttribute("product-is-featured") === "true";
          },
        });
      } else {
        iso.arrange({ filter: "*" });
      }
    });
     const filter_arr = [];
     $("[filter-checkbox]").change(function () {
      if (this.checked) {
        filter_arr.push($(this).attr("data-filter-value"));
      } else {
        const index = filter_arr.indexOf($(this).attr("data-filter-value"));
        if (index > -1) {
          // only splice array when item is found
          filter_arr.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
      const temp = $(this);
      if (filter_arr.length > 0) {
        iso.arrange({
          // item element provided as argument
          filter: function (itemElem) {
            const val = itemElem.getAttribute("product-data-category");
            for (let i = 0; i < filter_arr.length; i++) {
              if (val.includes(filter_arr[i])) {
                return true;
              }
            }
             return false;
          },
        });
      } else {
        iso.arrange({ filter: "*" });
      }
    });
  }
  */;
  _proto.onReady = function onReady() {
    var _this3 = this;
    this.populateGridProduct();
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on("click", function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), "status", "polite");
    });
    this.makeShopByPriceFilterAccessible();
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($("#facetedSearch").length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on("sortBy-submitted", this.onSortBySubmit);
    }
    $("a.reset-btn").on("click", function () {
      return _this3.setLiveRegionsAttributes($("span.reset-message"), "status", "polite");
    });
    this.ariaNotifyNoProducts();
    // this.setUpIsotopeAttribute();
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $("[data-no-products-notification]");
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this4 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $("#product-listing-container");
    var $facetedSearchContainer = $("#faceted-search-container");
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: this.toggleCategoryListingView.getRequestTemplateType("category"),
        sidebar: "category/sidebar"
      },
      showMore: "category/show-more"
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $("body").triggerHandler("compareReset");
      $("html, body").animate({
        scrollTop: 0
      }, 100);

      /**
       * IntuitSolutions - Category Update
       */
      _this4.ITSCategory.afterFacetUpdate();
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
    $("body").on("productViewModeChanged", function () {
      var NewOpts = {
        config: {
          category: {
            shop_by_price: true,
            products: {
              limit: productsPerPage
            }
          }
        },
        template: {
          productListing: _this4.toggleCategoryListingView.getRequestTemplateType("category"),
          sidebar: "category/sidebar"
        },
        showMore: "category/show-more"
      };
      _this4.facetedSearch.updateRequestOptions(NewOpts);
    });
  }
  /** 
  getToken() {
    return {
      TOKEN: "l6zrmhmyv9b86pm61sm8hampmk57zgr",
      API_PATH: "https://api.bigcommerce.com/stores/89a9ntp16/v3/",
    };
  }
   requestProduct() {
    const BASE = this.getToken();
    const categoryId = this.context.categoryId;
    const endpoint = "catalog/products";
    console.log("requesting");
    console.log(BASE);
    const options = {
      method: "GET",
      url: `${BASE.API_PATH}${endpoint}`,
      params: { limit: "20" },
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": `${BASE.TOKEN}`,
        "Access-Control-Allow-Origin": "*",
      },
    };
     axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  */
  ////////////////////////////////////////////////////////////////////
  ;
  _proto.populateGridProduct = function populateGridProduct() {
    // this.requestProduct();
    var body = this;
    var UUIDcatc = this.context.UUIDcatc;
    var categoryId = this.context.categoryId;
    axios__WEBPACK_IMPORTED_MODULE_7__["default"].get("https://sufri.api.stdlib.com/l5t@dev/getAllProduct/", {
      params: {
        id: categoryId
      }
    }).then(function (response) {
      var gridAllProducts = $("#grid-all-product");
      var data = response.data.product;
      var category = response.data.category;
      console.log(data);
      data.forEach(function (pr) {
        var img = {};
        for (var i = 0; i < pr["images"].length; i++) {
          if (pr["images"][i]["is_thumbnail"]) {
            img = pr["images"][i];
            break;
          }
        }
        var actionSection = "";
        if (pr["variants"].length > 1) {
          actionSection = "<button type=\"button\" class=\"button button--primary quickview button--quickview\" data-product-id=\"" + pr["id"] + "\">View Options</button>";
        } else {
          actionSection = "\n            <div class=\"card-atc js-card-atc\">\n              <div class=\"card-atc__section card-atc__section--qty\">\n                <label for=\"card-atc__qty-" + pr["id"] + "-" + UUIDcatc + "\" class=\"card-atc__label is-srOnly\">Quantity:</label>\n                <div class=\"card-atc-increment card-atc-increment--has-buttons js-card-atc-increment\">\n\n                  <input type=\"tel\" class=\"form-input card-atc__input card-atc__input--total js-card-atc__input--total\" name=\"card-atc__qty-" + pr["id"] + "-" + UUIDcatc + "\" id=\"card-atc__qty-" + pr["id"] + "-" + UUIDcatc + "\" value=\"1\" min=\"1\" pattern=\"[0-9]*\" aria-live=\"polite\">\n                  <div class=\"card-atc-button-wrapper\">\n                    <button class=\"button button--icon\" data-action=\"inc\" type=\"button\">\n                      <span class=\"is-srOnly\">Increase Quantity of undefined</span>\n                      <span class=\"icon-wrapper\" aria-hidden=\"true\">\n                        <svg class=\"icon\">\n                          <use xlink:href=\"#icon-add\"></use>\n                        </svg>\n                      </span>\n                    </button>\n                    <button class=\"button button--icon\" data-action=\"dec\" type=\"button\">\n                      <span class=\"is-srOnly\">Decrease Quantity of undefined</span>\n                      <span class=\"icon-wrapper\" aria-hidden=\"true\">\n                        <svg class=\"icon\">\n                          <use xlink:href=\"#icon-minus\"></use>PP\n                        </svg>\n                      </span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-atc__section card-atc__section--action\">\n                <button type=\"button\" class=\"card-atc__button button button--primary js-card-atc__button\" id=\"card-atc__add-" + pr["id"] + "-" + UUIDcatc + "\" data-default-message=\"Add to Cart\" data-wait-message=\"Adding to cart\u2026\" data-added-message=\"Add to Cart\" value=\"Add to Cart\" data-card-add-to-cart=\"/cart.php?action=add&amp;product_id=" + pr["id"] + "\" data-event-type=\"product-click\">Add to Cart</button>\n                <span class=\"product-status-message aria-description--hidden\">Adding to cart\u2026 The item has been added</span>\n              </div>\n          </div>";
        }
        var template = "\n    <div id=\"product-" + pr["id"] + "\" sort-order=\"" + pr["sort_order"] + "\" class=\"product\" product-data-category=\"" + getAllCategory(category, pr["categories"]) + "\" \n                product-data-name=\"" + pr["fake-heading"] + "\" \n                product-data-review=\"" + (pr["reviews_count"] === 0 ? 0 : pr["reviews_rating_sum"] / pr["reviews_count"]) + "\"\n                product-review-count=\"" + pr["reviews_count"] + "\" \n                product-data-price=\"" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\" \n                product-date-created=\"" + pr["date_created"] + "\" \n                product-is-featured=\"" + pr["is_featured"] + "\" product-best-selling=\"" + pr["total_sold"] + "\"\n                product-custom-sort-order=\"" + pr["custom-sort-order"] + "\">\n  <div class=\"card-wrapper\">\n    <article class=\"card\" data-test=\"card-" + pr["id"] + "\">\n      <figure class=\"card-figure\">\n        <div class=\"sale-flag-sash\" style=\"display: " + (pr["variants"][0].sale_price !== 0 ? "block;" : "none;") + " \">\n          <span class=\"sale-text\">On Sale</span>\n        </div>\n        <a href=\"" + pr["custom_url"]["url"] + "\" class=\"card-figure__link\" aria-label=\"" + pr["name"] + ", $" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\">\n          <div class=\" card-img-container\">\n            <img src=\"\n            " + img["url_thumbnail"] + "\" \n            alt=\"img[\"description\"]\" title=\"" + pr["fake-heading"] + "\" data-sizes=\"auto\" \n            srcset=\"\n            " + img["url_standard"] + " 80w, \n            " + img["url_standard"] + " 160w, \n            " + img["url_standard"] + " 320w, \n            " + img["url_standard"] + " 640w, \n            " + img["url_standard"] + " 960w, \n            " + img["url_standard"] + " 1280w, \n            " + img["url_standard"] + " 1920w, \n           " + img["url_standard"] + " 2560w\" \n            \n            data-srcset=\"\n            " + img["url_standard"] + " 80w, \n            " + img["url_standard"] + " 160w, \n            " + img["url_standard"] + " 320w, \n            " + img["url_standard"] + " 640w, \n            " + img["url_standard"] + " 960w, \n            " + img["url_standard"] + " 1280w, \n            " + img["url_standard"] + " 1920w, \n            " + img["url_standard"] + " 2560w\" \n            \n            class=\"card-image lazyautosizes lazyloaded\" sizes=\"248px\">\n          </div>\n        </a>\n\n        <figcaption class=\"card-figcaption\">\n          <div class=\"card-figcaption-body\">\n          </div>\n        </figcaption>\n          </figure>\n          <div class=\"card-body\">\n            <p class=\"productView-type-title h4\" product-name=\"\">" + pr["fake-heading"] + "</p>\n\n            <h3 class=\"card-title \">\n              <a aria-label=\"" + pr["name"] + ", $" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\" href=\"" + pr["custom_url"]["url"] + "\">\n                " + pr["name"] + "\n              </a>\n            </h3>\n\n            <p class=\"card-text card-text--sku\">\n              <span>\n                SKU#: " + pr["sku"] + "\n              </span>\n            </p>\n\n            <div class=\"card-text card-text--price\" data-test-info-type=\"price\">\n\n              <div class=\"price-section price-section--withoutTax rrp-price--withoutTax h4\" style=\"display: block;\">\n                <span class=\"is-srOnly\">\n                  MSRP:\n                </span>\n                <span data-product-rrp-price-without-tax=\"\" class=\"price price--rrp h5\">\n                  " + (pr["variants"][0].sale_price !== 0 ? "$" + pr["variants"][0].retail_price : "") + "\n                </span>\n              </div>\n              <div class=\"price-section price-section--withoutTax non-sale-price--withoutTax h5\" style=\"display: none;\">\n                <span class=\"is-srOnly\">\n                  Was:\n                </span>\n                <span data-product-non-sale-price-without-tax=\"\" class=\"price price--non-sale\">\n\n                </span>\n              </div>\n              <div class=\"price-section price-section--withoutTax h4\">\n                <span class=\"price-label is-srOnly\">\n\n                </span>\n                <span class=\"price-now-label is-srOnly\" style=\"display: none;\">\n                  Now:\n                </span>\n                <span data-product-price-without-tax=\"\" class=\"price price--withoutTax\">$" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "</span>\n              </div>\n            </div>\n            <p class=\"card-text card-text--extra\" style=\"display: " + (pr["custom_fields"].find(function (field) {
          return field["name"] === "__card-extra-info";
        }) !== undefined ? "relative;" : "none;") + " \"> " + (pr["custom_fields"].find(function (field) {
          return field["name"] === "__card-extra-info";
        }) !== undefined ? pr["custom_fields"].find(function (field) {
          return field["name"] === "__card-extra-info";
        }).value : "") + "</p>\n\n            <div class=\"card-action-wrapper\">\n\n              " + actionSection + "\n              <button type=\"button\" class=\"button button--primary quickview button--quickview\" data-product-id=\"" + pr["id"] + "\">View Details</button>\n            </div>\n\n          </div>\n        </article>\n      </div>\n\n    </div>";
        gridAllProducts.append(template);
      });
      body.configureIsotopeForAll();
      body.startGlobal();
    })["catch"](function (error) {
      console.log("error");
      console.error(error);
    });
    //end of getAllProduct for parent category page
    console.log("test");
    function getAllCategory(cat_list, pr_cat) {
      var cat = "";
      for (var i = 0; i < pr_cat.length; i++) {
        // cat =
        //   cat + cat_list[pr_cat[i]] === undefined
        //     ? ""
        //     : cat_list[pr_cat[i]]["cat_id"] === undefined
        //     ? " "
        //     : cat_list[pr_cat[i]]["cat_id"].join(" ") + " ";

        if (cat_list[pr_cat[i]] !== undefined) {
          cat = cat + cat_list[pr_cat[i]]["cat_id"].join(" ") + " ";
        }
        // console.log(cat_list[pr_cat[i]]);
      }

      return cat;
    }
  };
  _proto.startGlobal = function startGlobal() {
    Object(_custom_its_global__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context);
  };
  _proto.configureIsotopeForAll = function configureIsotopeForAll() {
    $(".grid").css("display", "grid");
    $(".lds-block").hide();
    var grid = document.getElementById("grid-all-product");
    var iso = new isotope_layout__WEBPACK_IMPORTED_MODULE_8___default.a(grid, {
      // options...
      itemSelector: ".product",
      layoutMode: "fitRows",
      getSortData: {
        name: function name(itemElem) {
          return itemElem.getAttribute("product-data-name");
        },
        price: function price(itemElem) {
          return Number(itemElem.getAttribute("product-data-price"));
        },
        review: function review(itemElem) {
          return itemElem.getAttribute("product-data-review");
        },
        category: function category(itemElem) {
          return itemElem.getAttribute("product-data-category");
        },
        best_selling: function best_selling(itemElem) {
          return Number(itemElem.getAttribute("product-best-selling"));
        },
        newest: function newest(itemElem) {
          return itemElem.getAttribute("product-date-created");
        },
        custom_sort_order: function custom_sort_order(itemElem) {
          return Number(itemElem.getAttribute("product-custom-sort-order"));
        }
      }
    });

    // if (this.context.subcategories.length === 0) {

    // }

    $("#all-sort-select").change(function () {
      var val = $(this).val().split("-");
      if (val[0] === "review") {
        iso.arrange({
          sortBy: [val[0], "rating_count"],
          sortAscending: {
            review: false,
            rating_count: false
          }
        });
      } else {
        iso.arrange({
          sortBy: val[0],
          sortAscending: val[1] === "asc"
        });
      }
    });
    var filter_arr = [];

    // $("#featured-checkbox").change(function () {
    //   if (this.checked) {
    //     if (filter_arr.length > 0) {
    //       iso.arrange({
    //         // item element provided as argument
    //         filter: function (itemElem) {
    //           const val = itemElem.getAttribute("product-data-category");
    //           for (let i = 0; i < filter_arr.length; i++) {
    //             if (val.includes(filter_arr[i])) {
    //               if (isfeatured) {
    //                 return (
    //                   itemElem.getAttribute("product-is-featured") === "true"
    //                 );
    //               } else {
    //                 return true;
    //               }
    //             }
    //           }

    //           return false;
    //         },
    //       });
    //     } else {
    //       iso.arrange({
    //         filter: function (itemElem) {
    //           return itemElem.getAttribute("product-is-featured") === "true";
    //         },
    //       });
    //     }
    //   } else {
    //     if (filter_arr.length > 0) {
    //       iso.arrange({
    //         // item element provided as argument
    //         filter: function (itemElem) {
    //           const val = itemElem.getAttribute("product-data-category");
    //           for (let i = 0; i < filter_arr.length; i++) {
    //             if (val.includes(filter_arr[i])) {
    //               return true;
    //             }
    //           }

    //           return false;
    //         },
    //       });
    //     } else {
    //       iso.arrange({ filter: "*" });
    //     }
    //   }
    // });

    $("[checkbox-filter-all]").change(function () {
      var isfeatured = $("#featured-checkbox:checked").length > 0;
      if ($(this).attr("id") !== "featured-checkbox") {
        if (this.checked) {
          filter_arr.push($(this).attr("filter-value"));
        } else {
          var index = filter_arr.indexOf($(this).attr("filter-value"));
          if (index > -1) {
            // only splice array when item is found
            filter_arr.splice(index, 1); // 2nd parameter means remove one item only
          }
        }
      }

      if (filter_arr.length > 0) {
        iso.arrange({
          // item element provided as argument
          filter: function filter(itemElem) {
            var val = itemElem.getAttribute("product-data-category");
            for (var i = 0; i < filter_arr.length; i++) {
              if (val.includes(filter_arr[i])) {
                if (isfeatured) {
                  return itemElem.getAttribute("product-is-featured") === "true";
                } else {
                  return true;
                }
              }
            }
            return false;
          }
        });
      } else if (isfeatured) {
        iso.arrange({
          filter: function filter(itemElem) {
            return itemElem.getAttribute("product-is-featured") === "true";
          }
        });
      } else {
        iso.arrange({
          filter: "*"
        });
      }
    });
    if (this.context.subcategories.length === 0) {
      iso.arrange({
        sortBy: "custom_sort_order",
        sortAscending: true
      });
    } else {
      iso.arrange({
        sortBy: "best_selling",
        sortAscending: false
      });
    }
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./assets/js/theme/custom/its-category.js":
/*!************************************************!*\
  !*** ./assets/js/theme/custom/its-category.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ITSCategory; });
var ITSCategory = /*#__PURE__*/function () {
  function ITSCategory(context) {
    this.context = context;
  }
  var _proto = ITSCategory.prototype;
  _proto.afterFacetUpdate = function afterFacetUpdate() {};
  return ITSCategory;
}();


/***/ }),

/***/ "./assets/js/theme/custom/toggle-category-listing-view.js":
/*!****************************************************************!*\
  !*** ./assets/js/theme/custom/toggle-category-listing-view.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleCategoryListingView; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");


var ToggleCategoryListingView = /*#__PURE__*/function () {
  function ToggleCategoryListingView(context) {
    var _this = this;
    this.context = context;
    this.defaultViewType = this.context.defaultViewType;
    this.oppositeViewType = this.defaultViewType !== 'grid' ? 'grid' : 'list';
    this.productsPerPage = this.context.categoryProductsPerPage;
    this.loadingOverlay = $('.loadingOverlay.loadingOverlay--product-listing');
    $('body').on('facetedSearchRefresh', function () {
      _this.addToggleEvents();
    });
    this.init();
  }
  var _proto = ToggleCategoryListingView.prototype;
  _proto.getStoredViewType = function getStoredViewType() {
    return sessionStorage.getItem('category-view-type') || null;
  };
  _proto.getRequestTemplateType = function getRequestTemplateType(type) {
    var pageType = this.getStoredViewType();
    return !pageType ? type + "/product-listing" : "custom/category-" + pageType + "-view";
  };
  _proto.storeViewType = function storeViewType(type) {
    sessionStorage.setItem('category-view-type', type);
  };
  _proto.getCategoryPage = function getCategoryPage(pageType) {
    var _this2 = this;
    var config = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: this.productsPerPage
          }
        }
      },
      template: "custom/category-" + pageType + "-view"
    };
    this.loadingOverlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["api"].getPage(_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getUrl(), config, function (err, content) {
      if (err) {
        throw new Error(err);
      }
      $('#product-listing-container').html(content);
      _this2.loadingOverlay.hide();
      _this2.storeViewType(pageType);
      _this2.addToggleEvents();
      $('body').triggerHandler('productViewModeChanged');
    });
  };
  _proto.addToggleEvents = function addToggleEvents() {
    var _this3 = this;
    $('.js-category__toggle-view').on('click', function (e) {
      var type = $(e.currentTarget).data('view-type');
      if ($(e.currentTarget).hasClass('active-category-view')) return;
      _this3.getCategoryPage(type, _this3.addToggleEvents);
    });
  };
  _proto.init = function init() {
    var storedViewType = this.getStoredViewType();
    if (storedViewType === this.defaultViewType || !storedViewType) {
      return this.addToggleEvents();
    }
    this.getCategoryPage(this.oppositeViewType);
  };
  return ToggleCategoryListingView;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9pdHMtY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS90b2dnbGUtY2F0ZWdvcnktbGlzdGluZy12aWV3LmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwiY29udGV4dCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiSVRTQ2F0ZWdvcnkiLCJ0b2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3IiwiVG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldyIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwiYXR0ciIsInJvbGUiLCJtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlIiwiJCIsImxlbmd0aCIsImhhc0NsYXNzIiwiZm9jdXMiLCJvbiIsIm9uUmVhZHkiLCJwb3B1bGF0ZUdyaWRQcm9kdWN0IiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJlIiwiY3VycmVudFRhcmdldCIsIm5leHQiLCJjb21wYXJlUHJvZHVjdHMiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsImhvb2tzIiwic2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzIiwiYXJpYU5vdGlmeU5vUHJvZHVjdHMiLCIkbm9Qcm9kdWN0c01lc3NhZ2UiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJnZXRSZXF1ZXN0VGVtcGxhdGVUeXBlIiwic2lkZWJhciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImFmdGVyRmFjZXRVcGRhdGUiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsIk5ld09wdHMiLCJ1cGRhdGVSZXF1ZXN0T3B0aW9ucyIsImJvZHkiLCJVVUlEY2F0YyIsImNhdGVnb3J5SWQiLCJheGlvcyIsImdldCIsInBhcmFtcyIsImlkIiwidGhlbiIsInJlc3BvbnNlIiwiZ3JpZEFsbFByb2R1Y3RzIiwiZGF0YSIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsInByIiwiaW1nIiwiaSIsImFjdGlvblNlY3Rpb24iLCJnZXRBbGxDYXRlZ29yeSIsInRvRml4ZWQiLCJzYWxlX3ByaWNlIiwicmV0YWlsX3ByaWNlIiwiZmluZCIsImZpZWxkIiwidW5kZWZpbmVkIiwidmFsdWUiLCJhcHBlbmQiLCJjb25maWd1cmVJc290b3BlRm9yQWxsIiwic3RhcnRHbG9iYWwiLCJlcnJvciIsImNhdF9saXN0IiwicHJfY2F0IiwiY2F0Iiwiam9pbiIsImN1c3RvbUdsb2JhbCIsImNzcyIsImhpZGUiLCJncmlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlzbyIsIklzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJsYXlvdXRNb2RlIiwiZ2V0U29ydERhdGEiLCJuYW1lIiwiaXRlbUVsZW0iLCJnZXRBdHRyaWJ1dGUiLCJwcmljZSIsIk51bWJlciIsInJldmlldyIsImJlc3Rfc2VsbGluZyIsIm5ld2VzdCIsImN1c3RvbV9zb3J0X29yZGVyIiwiY2hhbmdlIiwidmFsIiwic3BsaXQiLCJhcnJhbmdlIiwic29ydEJ5Iiwic29ydEFzY2VuZGluZyIsInJhdGluZ19jb3VudCIsImZpbHRlcl9hcnIiLCJpc2ZlYXR1cmVkIiwiY2hlY2tlZCIsInB1c2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInN1YmNhdGVnb3JpZXMiLCJDYXRhbG9nUGFnZSIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJKU09OIiwicGFyc2UiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInBvcCIsInJlZHVjZSIsImFjYyIsImRlZmF1bHRWaWV3VHlwZSIsIm9wcG9zaXRlVmlld1R5cGUiLCJsb2FkaW5nT3ZlcmxheSIsImFkZFRvZ2dsZUV2ZW50cyIsImluaXQiLCJnZXRTdG9yZWRWaWV3VHlwZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInR5cGUiLCJwYWdlVHlwZSIsInN0b3JlVmlld1R5cGUiLCJzZXRJdGVtIiwiZ2V0Q2F0ZWdvcnlQYWdlIiwic2hvdyIsImFwaSIsImdldFBhZ2UiLCJ1cmxVdGlscyIs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QUFKLGdCQUFPO0lBQ0gsSUFBTWdCLGNBQWMsR0FBRyxJQUFJLENBQUNmLGlCQUFpQixFQUFFO0lBRS9DLElBQUllLGNBQWMsS0FBSyxJQUFJLENBQUNwQixlQUFlLElBQUksQ0FBQ29CLGNBQWMsRUFBRTtNQUM1RCxPQUFPLElBQUksQ0FBQ2pCLGVBQWUsRUFBRTtJQUNqQztJQUVBLElBQUksQ0FBQ1MsZUFBZSxDQUFDLElBQUksQ0FBQ1gsZ0JBQWdCLENBQUM7RUFDL0MsQ0FBQztFQUFBO0FBQUEiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tIFwiQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHNcIjtcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tIFwiLi9jYXRhbG9nXCI7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gXCIuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzXCI7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tIFwiLi9jb21tb24vZmFjZXRlZC1zZWFyY2hcIjtcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gXCIuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzXCI7XG5pbXBvcnQgSVRTQ2F0ZWdvcnkgZnJvbSBcIi4vY3VzdG9tL2l0cy1jYXRlZ29yeVwiO1xuaW1wb3J0IFRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXcgZnJvbSBcIi4vY3VzdG9tL3RvZ2dsZS1jYXRlZ29yeS1saXN0aW5nLXZpZXdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBJc290b3BlIGZyb20gXCJpc290b3BlLWxheW91dFwiO1xuaW1wb3J0IGN1c3RvbUdsb2JhbCBmcm9tIFwiLi9jdXN0b20vaXRzLWdsb2JhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG5cbiAgICAvKipcbiAgICAgKiBJbnR1aXRTb2x1dGlvbnMgLSBDdXN0b20gQ2F0ZWdvcnlcbiAgICAgKi9cbiAgICB0aGlzLklUU0NhdGVnb3J5ID0gbmV3IElUU0NhdGVnb3J5KGNvbnRleHQpO1xuICAgIHRoaXMudG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldyA9IG5ldyBUb2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3KGNvbnRleHQpO1xuICB9XG5cbiAgc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGVsZW1lbnQsIHJvbGVUeXBlLCBhcmlhTGl2ZVN0YXR1cykge1xuICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICBcImFyaWEtbGl2ZVwiOiBhcmlhTGl2ZVN0YXR1cyxcbiAgICB9KTtcbiAgfVxuXG4gIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XG4gICAgaWYgKCEkKFwiW2RhdGEtc2hvcC1ieS1wcmljZV1cIikubGVuZ3RoKSByZXR1cm47XG5cbiAgICBpZiAoJChcIi5uYXZMaXN0LWFjdGlvblwiKS5oYXNDbGFzcyhcImlzLWFjdGl2ZVwiKSkge1xuICAgICAgJChcImEubmF2TGlzdC1hY3Rpb24uaXMtYWN0aXZlXCIpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgJChcImEubmF2TGlzdC1hY3Rpb25cIikub24oXCJjbGlja1wiLCAoKSA9PlxuICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcyhcbiAgICAgICAgJChcInNwYW4ucHJpY2UtZmlsdGVyLW1lc3NhZ2VcIiksXG4gICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgIFwiYXNzZXJ0aXZlXCJcbiAgICAgIClcbiAgICApO1xuICB9XG4gIC8qXG4gIHNldFVwSXNvdG9wZUF0dHJpYnV0ZSgpIHtcbiAgICBsZXQgZGF0YSA9IHt9O1xuICAgIGNvbnN0IHByb2R1Y3RzID0gdGhpcy5jb250ZXh0LnByb2R1Y3RMaXN0O1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9zdWZyaS5hcGkuc3RkbGliLmNvbS9sNXRAZGV2L2dldEl0ZW1BdHRyL1wiKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKChwcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsID0gJChgI3Byb2R1Y3QtJHtwci5pZH1gKTtcbiAgICAgICAgICBlbC5hdHRyKFxuICAgICAgICAgICAgXCJwcm9kdWN0LWRhdGUtY3JlYXRlZFwiLFxuICAgICAgICAgICAgZGF0YVtgcHJvZHVjdC0ke3ByLmlkfWBdW1wiZGF0ZV9jcmVhdGVkXCJdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlbC5hdHRyKFwicHJvZHVjdC1pcy1mZWF0dXJlZFwiLCBkYXRhW2Bwcm9kdWN0LSR7cHIuaWR9YF1bXCJmZWF0dXJlZFwiXSk7XG4gICAgICAgICAgZWwuYXR0cihcbiAgICAgICAgICAgIFwicHJvZHVjdC1iZXN0LXNlbGxpbmdcIixcbiAgICAgICAgICAgIGRhdGFbYHByb2R1Y3QtJHtwci5pZH1gXVtcImJlc3Rfc2VsbGluZ1wiXVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJvZHkuY29uZmlndXJlSXNvdG9wZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBjb25maWd1cmVJc290b3BlKCkge1xuICAgICQoXCIuZ3JpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZ3JpZFwiKTtcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JpZC1ibG9ja1wiKTtcbiAgICBsZXQgaXNvID0gbmV3IElzb3RvcGUoZ3JpZCwge1xuICAgICAgLy8gb3B0aW9ucy4uLlxuICAgICAgaXRlbVNlbGVjdG9yOiBcIi5wcm9kdWN0XCIsXG4gICAgICBsYXlvdXRNb2RlOiBcImZpdFJvd3NcIixcbiAgICAgIGdldFNvcnREYXRhOiB7XG4gICAgICAgIG5hbWU6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtbmFtZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2U6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgIHJldHVybiBOdW1iZXIoaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1kYXRhLXByaWNlXCIpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmV2aWV3OiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1kYXRhLXJldmlld1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2F0ZWdvcnk6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtY2F0ZWdvcnlcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGJlc3Rfc2VsbGluZzogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlcihpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWJlc3Qtc2VsbGluZ1wiKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG5ld2VzdDogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0ZS1jcmVhdGVkXCIpO1xuICAgICAgICB9LFxuICAgICAgICByYXRpbmdfY291bnQ6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LXJldmlldy1jb3VudFwiKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAkKFwiI3NvcnQtc2VsZWN0XCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCB2YWwgPSAkKHRoaXMpLnZhbCgpLnNwbGl0KFwiLVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHZhbFswXSk7XG4gICAgICBpZiAodmFsWzBdID09PSBcInJldmlld1wiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVjXCIpO1xuICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgc29ydEJ5OiBbdmFsWzBdLCBcInJhdGluZ19jb3VudFwiXSxcbiAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB7XG4gICAgICAgICAgICByZXZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgcmF0aW5nX2NvdW50OiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICBzb3J0Qnk6IHZhbFswXSxcbiAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB2YWxbMV0gPT09IFwiYXNjXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIiNmZWF0dXJlZC1jaGVja2JveFwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlzLWZlYXR1cmVkXCIpID09PSBcInRydWVcIjtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzby5hcnJhbmdlKHsgZmlsdGVyOiBcIipcIiB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbHRlcl9hcnIgPSBbXTtcblxuICAgICQoXCJbZmlsdGVyLWNoZWNrYm94XVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICBmaWx0ZXJfYXJyLnB1c2goJCh0aGlzKS5hdHRyKFwiZGF0YS1maWx0ZXItdmFsdWVcIikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJfYXJyLmluZGV4T2YoJCh0aGlzKS5hdHRyKFwiZGF0YS1maWx0ZXItdmFsdWVcIikpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIC8vIG9ubHkgc3BsaWNlIGFycmF5IHdoZW4gaXRlbSBpcyBmb3VuZFxuICAgICAgICAgIGZpbHRlcl9hcnIuc3BsaWNlKGluZGV4LCAxKTsgLy8gMm5kIHBhcmFtZXRlciBtZWFucyByZW1vdmUgb25lIGl0ZW0gb25seVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB0ZW1wID0gJCh0aGlzKTtcbiAgICAgIGlmIChmaWx0ZXJfYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgIC8vIGl0ZW0gZWxlbWVudCBwcm92aWRlZCBhcyBhcmd1bWVudFxuICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtY2F0ZWdvcnlcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcl9hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHZhbC5pbmNsdWRlcyhmaWx0ZXJfYXJyW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzby5hcnJhbmdlKHsgZmlsdGVyOiBcIipcIiB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuKi9cbiAgb25SZWFkeSgpIHtcbiAgICB0aGlzLnBvcHVsYXRlR3JpZFByb2R1Y3QoKTtcbiAgICB0aGlzLmFycmFuZ2VGb2N1c09uU29ydEJ5KCk7XG5cbiAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oXCJjbGlja1wiLCAoZSkgPT5cbiAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoXG4gICAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS5uZXh0KCksXG4gICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgIFwicG9saXRlXCJcbiAgICAgIClcbiAgICApO1xuXG4gICAgdGhpcy5tYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCk7XG5cbiAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcblxuICAgIGlmICgkKFwiI2ZhY2V0ZWRTZWFyY2hcIikubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgaG9va3Mub24oXCJzb3J0Qnktc3VibWl0dGVkXCIsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgICQoXCJhLnJlc2V0LWJ0blwiKS5vbihcImNsaWNrXCIsICgpID0+XG4gICAgICB0aGlzLnNldExpdmVSZWdpb25zQXR0cmlidXRlcygkKFwic3Bhbi5yZXNldC1tZXNzYWdlXCIpLCBcInN0YXR1c1wiLCBcInBvbGl0ZVwiKVxuICAgICk7XG5cbiAgICB0aGlzLmFyaWFOb3RpZnlOb1Byb2R1Y3RzKCk7XG4gICAgLy8gdGhpcy5zZXRVcElzb3RvcGVBdHRyaWJ1dGUoKTtcbiAgfVxuXG4gIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xuICAgIGNvbnN0ICRub1Byb2R1Y3RzTWVzc2FnZSA9ICQoXCJbZGF0YS1uby1wcm9kdWN0cy1ub3RpZmljYXRpb25dXCIpO1xuICAgIGlmICgkbm9Qcm9kdWN0c01lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKFwiI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXJcIik7XG4gICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKFwiI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgcHJvZHVjdExpc3Rpbmc6XG4gICAgICAgICAgdGhpcy50b2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3LmdldFJlcXVlc3RUZW1wbGF0ZVR5cGUoXCJjYXRlZ29yeVwiKSxcbiAgICAgICAgc2lkZWJhcjogXCJjYXRlZ29yeS9zaWRlYmFyXCIsXG4gICAgICB9LFxuICAgICAgc2hvd01vcmU6IFwiY2F0ZWdvcnkvc2hvdy1tb3JlXCIsXG4gICAgfTtcblxuICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKFxuICAgICAgcmVxdWVzdE9wdGlvbnMsXG4gICAgICAoY29udGVudCkgPT4ge1xuICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICQoXCJib2R5XCIpLnRyaWdnZXJIYW5kbGVyKFwiY29tcGFyZVJlc2V0XCIpO1xuXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTAwXG4gICAgICAgICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludHVpdFNvbHV0aW9ucyAtIENhdGVnb3J5IFVwZGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5JVFNDYXRlZ29yeS5hZnRlckZhY2V0VXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgJChcImJvZHlcIikub24oXCJwcm9kdWN0Vmlld01vZGVDaGFuZ2VkXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IE5ld09wdHMgPSB7XG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICBwcm9kdWN0TGlzdGluZzpcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldy5nZXRSZXF1ZXN0VGVtcGxhdGVUeXBlKFwiY2F0ZWdvcnlcIiksXG4gICAgICAgICAgc2lkZWJhcjogXCJjYXRlZ29yeS9zaWRlYmFyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dNb3JlOiBcImNhdGVnb3J5L3Nob3ctbW9yZVwiLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5mYWNldGVkU2VhcmNoLnVwZGF0ZVJlcXVlc3RPcHRpb25zKE5ld09wdHMpO1xuICAgIH0pO1xuICB9XG4gIC8qKiBcbiAgZ2V0VG9rZW4oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFRPS0VOOiBcImw2enJtaG15djliODZwbTYxc204aGFtcG1rNTd6Z3JcIixcbiAgICAgIEFQSV9QQVRIOiBcImh0dHBzOi8vYXBpLmJpZ2NvbW1lcmNlLmNvbS9zdG9yZXMvODlhOW50cDE2L3YzL1wiLFxuICAgIH07XG4gIH1cblxuICByZXF1ZXN0UHJvZHVjdCgpIHtcbiAgICBjb25zdCBCQVNFID0gdGhpcy5nZXRUb2tlbigpO1xuICAgIGNvbnN0IGNhdGVnb3J5SWQgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlJZDtcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiY2F0YWxvZy9wcm9kdWN0c1wiO1xuICAgIGNvbnNvbGUubG9nKFwicmVxdWVzdGluZ1wiKTtcbiAgICBjb25zb2xlLmxvZyhCQVNFKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgdXJsOiBgJHtCQVNFLkFQSV9QQVRIfSR7ZW5kcG9pbnR9YCxcbiAgICAgIHBhcmFtczogeyBsaW1pdDogXCIyMFwiIH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIlgtQXV0aC1Ub2tlblwiOiBgJHtCQVNFLlRPS0VOfWAsXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgYXhpb3NcbiAgICAgIC5yZXF1ZXN0KG9wdGlvbnMpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG4gICovXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIHBvcHVsYXRlR3JpZFByb2R1Y3QoKSB7XG4gICAgLy8gdGhpcy5yZXF1ZXN0UHJvZHVjdCgpO1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzO1xuICAgIGNvbnN0IFVVSURjYXRjID0gdGhpcy5jb250ZXh0LlVVSURjYXRjO1xuICAgIGNvbnN0IGNhdGVnb3J5SWQgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlJZDtcbiAgICBheGlvc1xuICAgICAgLmdldChcImh0dHBzOi8vc3VmcmkuYXBpLnN0ZGxpYi5jb20vbDV0QGRldi9nZXRBbGxQcm9kdWN0L1wiLCB7XG4gICAgICAgIHBhcmFtczogeyBpZDogY2F0ZWdvcnlJZCB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zdCBncmlkQWxsUHJvZHVjdHMgPSAkKFwiI2dyaWQtYWxsLXByb2R1Y3RcIik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhLnByb2R1Y3Q7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gcmVzcG9uc2UuZGF0YS5jYXRlZ29yeTtcblxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZGF0YS5mb3JFYWNoKChwcikgPT4ge1xuICAgICAgICAgIGxldCBpbWcgPSB7fTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJbXCJpbWFnZXNcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcltcImltYWdlc1wiXVtpXVtcImlzX3RodW1ibmFpbFwiXSkge1xuICAgICAgICAgICAgICBpbWcgPSBwcltcImltYWdlc1wiXVtpXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBhY3Rpb25TZWN0aW9uID0gXCJcIjtcbiAgICAgICAgICBpZiAocHJbXCJ2YXJpYW50c1wiXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBhY3Rpb25TZWN0aW9uID0gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBxdWlja3ZpZXcgYnV0dG9uLS1xdWlja3ZpZXdcIiBkYXRhLXByb2R1Y3QtaWQ9XCIke3ByW1wiaWRcIl19XCI+VmlldyBPcHRpb25zPC9idXR0b24+YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aW9uU2VjdGlvbiA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWF0YyBqcy1jYXJkLWF0Y1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hdGNfX3NlY3Rpb24gY2FyZC1hdGNfX3NlY3Rpb24tLXF0eVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjYXJkLWF0Y19fcXR5LSR7cHJbXCJpZFwiXX0tJHtVVUlEY2F0Y31cIiBjbGFzcz1cImNhcmQtYXRjX19sYWJlbCBpcy1zck9ubHlcIj5RdWFudGl0eTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWF0Yy1pbmNyZW1lbnQgY2FyZC1hdGMtaW5jcmVtZW50LS1oYXMtYnV0dG9ucyBqcy1jYXJkLWF0Yy1pbmNyZW1lbnRcIj5cblxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBjbGFzcz1cImZvcm0taW5wdXQgY2FyZC1hdGNfX2lucHV0IGNhcmQtYXRjX19pbnB1dC0tdG90YWwganMtY2FyZC1hdGNfX2lucHV0LS10b3RhbFwiIG5hbWU9XCJjYXJkLWF0Y19fcXR5LSR7cHJbXCJpZFwiXX0tJHtVVUlEY2F0Y31cIiBpZD1cImNhcmQtYXRjX19xdHktJHtwcltcImlkXCJdfS0ke1VVSURjYXRjfVwiIHZhbHVlPVwiMVwiIG1pbj1cIjFcIiBwYXR0ZXJuPVwiWzAtOV0qXCIgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hdGMtYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWljb25cIiBkYXRhLWFjdGlvbj1cImluY1wiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPkluY3JlYXNlIFF1YW50aXR5IG9mIHVuZGVmaW5lZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24td3JhcHBlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljb24tYWRkXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0taWNvblwiIGRhdGEtYWN0aW9uPVwiZGVjXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+RGVjcmVhc2UgUXVhbnRpdHkgb2YgdW5kZWZpbmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi13cmFwcGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1taW51c1wiPjwvdXNlPlBQXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hdGNfX3NlY3Rpb24gY2FyZC1hdGNfX3NlY3Rpb24tLWFjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FyZC1hdGNfX2J1dHRvbiBidXR0b24gYnV0dG9uLS1wcmltYXJ5IGpzLWNhcmQtYXRjX19idXR0b25cIiBpZD1cImNhcmQtYXRjX19hZGQtJHtwcltcImlkXCJdfS0ke1VVSURjYXRjfVwiIGRhdGEtZGVmYXVsdC1tZXNzYWdlPVwiQWRkIHRvIENhcnRcIiBkYXRhLXdhaXQtbWVzc2FnZT1cIkFkZGluZyB0byBjYXJ04oCmXCIgZGF0YS1hZGRlZC1tZXNzYWdlPVwiQWRkIHRvIENhcnRcIiB2YWx1ZT1cIkFkZCB0byBDYXJ0XCIgZGF0YS1jYXJkLWFkZC10by1jYXJ0PVwiL2NhcnQucGhwP2FjdGlvbj1hZGQmYW1wO3Byb2R1Y3RfaWQ9JHtwcltcImlkXCJdfVwiIGRhdGEtZXZlbnQtdHlwZT1cInByb2R1Y3QtY2xpY2tcIj5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zdGF0dXMtbWVzc2FnZSBhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5BZGRpbmcgdG8gY2FydOKApiBUaGUgaXRlbSBoYXMgYmVlbiBhZGRlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICA8ZGl2IGlkPVwicHJvZHVjdC0ke3ByW1wiaWRcIl19XCIgc29ydC1vcmRlcj1cIiR7XG4gICAgICAgICAgICBwcltcInNvcnRfb3JkZXJcIl1cbiAgICAgICAgICB9XCIgY2xhc3M9XCJwcm9kdWN0XCIgcHJvZHVjdC1kYXRhLWNhdGVnb3J5PVwiJHtnZXRBbGxDYXRlZ29yeShcbiAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgcHJbXCJjYXRlZ29yaWVzXCJdXG4gICAgICAgICAgKX1cIiBcbiAgICAgICAgICAgICAgICBwcm9kdWN0LWRhdGEtbmFtZT1cIiR7cHJbXCJmYWtlLWhlYWRpbmdcIl19XCIgXG4gICAgICAgICAgICAgICAgcHJvZHVjdC1kYXRhLXJldmlldz1cIiR7XG4gICAgICAgICAgICAgICAgICBwcltcInJldmlld3NfY291bnRcIl0gPT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogcHJbXCJyZXZpZXdzX3JhdGluZ19zdW1cIl0gLyBwcltcInJldmlld3NfY291bnRcIl1cbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LXJldmlldy1jb3VudD1cIiR7cHJbXCJyZXZpZXdzX2NvdW50XCJdfVwiIFxuICAgICAgICAgICAgICAgIHByb2R1Y3QtZGF0YS1wcmljZT1cIiR7XG4gICAgICAgICAgICAgICAgICBwcltcInZhcmlhbnRzXCJdLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgIDogcHJbXCJjYWxjdWxhdGVkX3ByaWNlXCJdLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICB9XCIgXG4gICAgICAgICAgICAgICAgcHJvZHVjdC1kYXRlLWNyZWF0ZWQ9XCIke3ByW1wiZGF0ZV9jcmVhdGVkXCJdfVwiIFxuICAgICAgICAgICAgICAgIHByb2R1Y3QtaXMtZmVhdHVyZWQ9XCIke1xuICAgICAgICAgICAgICAgICAgcHJbXCJpc19mZWF0dXJlZFwiXVxuICAgICAgICAgICAgICAgIH1cIiBwcm9kdWN0LWJlc3Qtc2VsbGluZz1cIiR7cHJbXCJ0b3RhbF9zb2xkXCJdfVwiXG4gICAgICAgICAgICAgICAgcHJvZHVjdC1jdXN0b20tc29ydC1vcmRlcj1cIiR7cHJbXCJjdXN0b20tc29ydC1vcmRlclwiXX1cIj5cbiAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlclwiPlxuICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZFwiIGRhdGEtdGVzdD1cImNhcmQtJHtwcltcImlkXCJdfVwiPlxuICAgICAgPGZpZ3VyZSBjbGFzcz1cImNhcmQtZmlndXJlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzYWxlLWZsYWctc2FzaFwiIHN0eWxlPVwiZGlzcGxheTogJHtcbiAgICAgICAgICBwcltcInZhcmlhbnRzXCJdWzBdLnNhbGVfcHJpY2UgIT09IDAgPyBcImJsb2NrO1wiIDogXCJub25lO1wiXG4gICAgICAgIH0gXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzYWxlLXRleHRcIj5PbiBTYWxlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgaHJlZj1cIiR7XG4gICAgICAgICAgcHJbXCJjdXN0b21fdXJsXCJdW1widXJsXCJdXG4gICAgICAgIH1cIiBjbGFzcz1cImNhcmQtZmlndXJlX19saW5rXCIgYXJpYS1sYWJlbD1cIiR7cHJbXCJuYW1lXCJdfSwgJCR7XG4gICAgICAgICAgICBwcltcInZhcmlhbnRzXCJdLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgIDogcHJbXCJjYWxjdWxhdGVkX3ByaWNlXCJdLnRvRml4ZWQoMilcbiAgICAgICAgICB9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiBjYXJkLWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXG4gICAgICAgICAgICAke2ltZ1tcInVybF90aHVtYm5haWxcIl19XCIgXG4gICAgICAgICAgICBhbHQ9XCJpbWdbXCJkZXNjcmlwdGlvblwiXVwiIHRpdGxlPVwiJHtcbiAgICAgICAgICAgICAgcHJbXCJmYWtlLWhlYWRpbmdcIl1cbiAgICAgICAgICAgIH1cIiBkYXRhLXNpemVzPVwiYXV0b1wiIFxuICAgICAgICAgICAgc3Jjc2V0PVwiXG4gICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gODB3LCBcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxNjB3LCBcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAzMjB3LCBcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA2NDB3LCBcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA5NjB3LCBcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxMjgwdywgXG4gICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTkyMHcsIFxuICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMjU2MHdcIiBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGF0YS1zcmNzZXQ9XCJcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA4MHcsIFxuICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDE2MHcsIFxuICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDMyMHcsIFxuICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDY0MHcsIFxuICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDk2MHcsIFxuICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDEyODB3LCBcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxOTIwdywgXG4gICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMjU2MHdcIiBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWltYWdlIGxhenlhdXRvc2l6ZXMgbGF6eWxvYWRlZFwiIHNpemVzPVwiMjQ4cHhcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZmlnY2FwdGlvbi1ib2R5XCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RWaWV3LXR5cGUtdGl0bGUgaDRcIiBwcm9kdWN0LW5hbWU9XCJcIj4ke1xuICAgICAgICAgICAgICBwcltcImZha2UtaGVhZGluZ1wiXVxuICAgICAgICAgICAgfTwvcD5cblxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSBcIj5cbiAgICAgICAgICAgICAgPGEgYXJpYS1sYWJlbD1cIiR7cHJbXCJuYW1lXCJdfSwgJCR7XG4gICAgICAgICAgICBwcltcInZhcmlhbnRzXCJdLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgIDogcHJbXCJjYWxjdWxhdGVkX3ByaWNlXCJdLnRvRml4ZWQoMilcbiAgICAgICAgICB9XCIgaHJlZj1cIiR7cHJbXCJjdXN0b21fdXJsXCJdW1widXJsXCJdfVwiPlxuICAgICAgICAgICAgICAgICR7cHJbXCJuYW1lXCJdfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLXRleHQtLXNrdVwiPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICBTS1UjOiAke3ByW1wic2t1XCJdfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHQgY2FyZC10ZXh0LS1wcmljZVwiIGRhdGEtdGVzdC1pbmZvLXR5cGU9XCJwcmljZVwiPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggcnJwLXByaWNlLS13aXRob3V0VGF4IGg0XCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlxuICAgICAgICAgICAgICAgICAgTVNSUDpcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXJycCBoNVwiPlxuICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgcHJbXCJ2YXJpYW50c1wiXVswXS5zYWxlX3ByaWNlICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIiRcIiArIHByW1widmFyaWFudHNcIl1bMF0ucmV0YWlsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheCBoNVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlxuICAgICAgICAgICAgICAgICAgV2FzOlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPlxuXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBoNFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtbGFiZWwgaXMtc3JPbmx5XCI+XG5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS1ub3ctbGFiZWwgaXMtc3JPbmx5XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgTm93OlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JCR7XG4gICAgICAgICAgICAgICAgICBwcltcInZhcmlhbnRzXCJdLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgIDogcHJbXCJjYWxjdWxhdGVkX3ByaWNlXCJdLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgY2FyZC10ZXh0LS1leHRyYVwiIHN0eWxlPVwiZGlzcGxheTogJHtcbiAgICAgICAgICAgICAgcHJbXCJjdXN0b21fZmllbGRzXCJdLmZpbmQoXG4gICAgICAgICAgICAgICAgKGZpZWxkKSA9PiBmaWVsZFtcIm5hbWVcIl0gPT09IFwiX19jYXJkLWV4dHJhLWluZm9cIlxuICAgICAgICAgICAgICApICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IFwicmVsYXRpdmU7XCJcbiAgICAgICAgICAgICAgICA6IFwibm9uZTtcIlxuICAgICAgICAgICAgfSBcIj4gJHtcbiAgICAgICAgICAgIHByW1wiY3VzdG9tX2ZpZWxkc1wiXS5maW5kKFxuICAgICAgICAgICAgICAoZmllbGQpID0+IGZpZWxkW1wibmFtZVwiXSA9PT0gXCJfX2NhcmQtZXh0cmEtaW5mb1wiXG4gICAgICAgICAgICApICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBwcltcImN1c3RvbV9maWVsZHNcIl0uZmluZChcbiAgICAgICAgICAgICAgICAgIChmaWVsZCkgPT4gZmllbGRbXCJuYW1lXCJdID09PSBcIl9fY2FyZC1leHRyYS1pbmZvXCJcbiAgICAgICAgICAgICAgICApLnZhbHVlXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH08L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbi13cmFwcGVyXCI+XG5cbiAgICAgICAgICAgICAgJHthY3Rpb25TZWN0aW9ufVxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgcXVpY2t2aWV3IGJ1dHRvbi0tcXVpY2t2aWV3XCIgZGF0YS1wcm9kdWN0LWlkPVwiJHtcbiAgICAgICAgICAgICAgICBwcltcImlkXCJdXG4gICAgICAgICAgICAgIH1cIj5WaWV3IERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+YDtcbiAgICAgICAgICBncmlkQWxsUHJvZHVjdHMuYXBwZW5kKHRlbXBsYXRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYm9keS5jb25maWd1cmVJc290b3BlRm9yQWxsKCk7XG4gICAgICAgIGJvZHkuc3RhcnRHbG9iYWwoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgLy9lbmQgb2YgZ2V0QWxsUHJvZHVjdCBmb3IgcGFyZW50IGNhdGVnb3J5IHBhZ2VcbiAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XG5cbiAgICBmdW5jdGlvbiBnZXRBbGxDYXRlZ29yeShjYXRfbGlzdCwgcHJfY2F0KSB7XG4gICAgICBsZXQgY2F0ID0gXCJcIjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJfY2F0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGNhdCA9XG4gICAgICAgIC8vICAgY2F0ICsgY2F0X2xpc3RbcHJfY2F0W2ldXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgIC8vICAgICA/IFwiXCJcbiAgICAgICAgLy8gICAgIDogY2F0X2xpc3RbcHJfY2F0W2ldXVtcImNhdF9pZFwiXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgIC8vICAgICA/IFwiIFwiXG4gICAgICAgIC8vICAgICA6IGNhdF9saXN0W3ByX2NhdFtpXV1bXCJjYXRfaWRcIl0uam9pbihcIiBcIikgKyBcIiBcIjtcblxuICAgICAgICBpZiAoY2F0X2xpc3RbcHJfY2F0W2ldXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2F0ID0gY2F0ICsgY2F0X2xpc3RbcHJfY2F0W2ldXVtcImNhdF9pZFwiXS5qb2luKFwiIFwiKSArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNhdF9saXN0W3ByX2NhdFtpXV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2F0O1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0R2xvYmFsKCkge1xuICAgIGN1c3RvbUdsb2JhbCh0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgY29uZmlndXJlSXNvdG9wZUZvckFsbCgpIHtcbiAgICAkKFwiLmdyaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImdyaWRcIik7XG4gICAgJChcIi5sZHMtYmxvY2tcIikuaGlkZSgpO1xuICAgIGxldCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkLWFsbC1wcm9kdWN0XCIpO1xuICAgIGxldCBpc28gPSBuZXcgSXNvdG9wZShncmlkLCB7XG4gICAgICAvLyBvcHRpb25zLi4uXG4gICAgICBpdGVtU2VsZWN0b3I6IFwiLnByb2R1Y3RcIixcbiAgICAgIGxheW91dE1vZGU6IFwiZml0Um93c1wiLFxuICAgICAgZ2V0U29ydERhdGE6IHtcbiAgICAgICAgbmFtZTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1uYW1lXCIpO1xuICAgICAgICB9LFxuICAgICAgICBwcmljZTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlcihpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtcHJpY2VcIikpO1xuICAgICAgICB9LFxuICAgICAgICByZXZpZXc6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtcmV2aWV3XCIpO1xuICAgICAgICB9LFxuICAgICAgICBjYXRlZ29yeTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1jYXRlZ29yeVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmVzdF9zZWxsaW5nOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtYmVzdC1zZWxsaW5nXCIpKTtcbiAgICAgICAgfSxcbiAgICAgICAgbmV3ZXN0OiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1kYXRlLWNyZWF0ZWRcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbV9zb3J0X29yZGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtY3VzdG9tLXNvcnQtb3JkZXJcIikpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIGlmICh0aGlzLmNvbnRleHQuc3ViY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcblxuICAgIC8vIH1cblxuICAgICQoXCIjYWxsLXNvcnQtc2VsZWN0XCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCB2YWwgPSAkKHRoaXMpLnZhbCgpLnNwbGl0KFwiLVwiKTtcblxuICAgICAgaWYgKHZhbFswXSA9PT0gXCJyZXZpZXdcIikge1xuICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgc29ydEJ5OiBbdmFsWzBdLCBcInJhdGluZ19jb3VudFwiXSxcbiAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB7XG4gICAgICAgICAgICByZXZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgcmF0aW5nX2NvdW50OiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICBzb3J0Qnk6IHZhbFswXSxcbiAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB2YWxbMV0gPT09IFwiYXNjXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsdGVyX2FyciA9IFtdO1xuXG4gICAgLy8gJChcIiNmZWF0dXJlZC1jaGVja2JveFwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgIC8vICAgICBpZiAoZmlsdGVyX2Fyci5sZW5ndGggPiAwKSB7XG4gICAgLy8gICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgIC8vICAgICAgICAgLy8gaXRlbSBlbGVtZW50IHByb3ZpZGVkIGFzIGFyZ3VtZW50XG4gICAgLy8gICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgIC8vICAgICAgICAgICBjb25zdCB2YWwgPSBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtY2F0ZWdvcnlcIik7XG4gICAgLy8gICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyX2Fyci5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICAgICAgIGlmICh2YWwuaW5jbHVkZXMoZmlsdGVyX2FycltpXSkpIHtcbiAgICAvLyAgICAgICAgICAgICAgIGlmIChpc2ZlYXR1cmVkKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgICAgICAgICAgICAgaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1pcy1mZWF0dXJlZFwiKSA9PT0gXCJ0cnVlXCJcbiAgICAvLyAgICAgICAgICAgICAgICAgKTtcbiAgICAvLyAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIC8vICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgfSk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgIC8vICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAvLyAgICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtaXMtZmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiO1xuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgaWYgKGZpbHRlcl9hcnIubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAvLyAgICAgICAgIC8vIGl0ZW0gZWxlbWVudCBwcm92aWRlZCBhcyBhcmd1bWVudFxuICAgIC8vICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAvLyAgICAgICAgICAgY29uc3QgdmFsID0gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1kYXRhLWNhdGVnb3J5XCIpO1xuICAgIC8vICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcl9hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAodmFsLmluY2x1ZGVzKGZpbHRlcl9hcnJbaV0pKSB7XG4gICAgLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgIH0pO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGlzby5hcnJhbmdlKHsgZmlsdGVyOiBcIipcIiB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgJChcIltjaGVja2JveC1maWx0ZXItYWxsXVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaXNmZWF0dXJlZCA9ICQoXCIjZmVhdHVyZWQtY2hlY2tib3g6Y2hlY2tlZFwiKS5sZW5ndGggPiAwO1xuICAgICAgaWYgKCQodGhpcykuYXR0cihcImlkXCIpICE9PSBcImZlYXR1cmVkLWNoZWNrYm94XCIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgIGZpbHRlcl9hcnIucHVzaCgkKHRoaXMpLmF0dHIoXCJmaWx0ZXItdmFsdWVcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gZmlsdGVyX2Fyci5pbmRleE9mKCQodGhpcykuYXR0cihcImZpbHRlci12YWx1ZVwiKSk7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIC8vIG9ubHkgc3BsaWNlIGFycmF5IHdoZW4gaXRlbSBpcyBmb3VuZFxuICAgICAgICAgICAgZmlsdGVyX2Fyci5zcGxpY2UoaW5kZXgsIDEpOyAvLyAybmQgcGFyYW1ldGVyIG1lYW5zIHJlbW92ZSBvbmUgaXRlbSBvbmx5XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWx0ZXJfYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgIC8vIGl0ZW0gZWxlbWVudCBwcm92aWRlZCBhcyBhcmd1bWVudFxuICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtY2F0ZWdvcnlcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcl9hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHZhbC5pbmNsdWRlcyhmaWx0ZXJfYXJyW2ldKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc2ZlYXR1cmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlzLWZlYXR1cmVkXCIpID09PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNmZWF0dXJlZCkge1xuICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlzLWZlYXR1cmVkXCIpID09PSBcInRydWVcIjtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzby5hcnJhbmdlKHsgZmlsdGVyOiBcIipcIiB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmNvbnRleHQuc3ViY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgc29ydEJ5OiBcImN1c3RvbV9zb3J0X29yZGVyXCIsXG4gICAgICAgIHNvcnRBc2NlbmRpbmc6IHRydWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICBzb3J0Qnk6IFwiYmVzdF9zZWxsaW5nXCIsXG4gICAgICAgIHNvcnRBc2NlbmRpbmc6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJVFNDYXRlZ29yeSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIGFmdGVyRmFjZXRVcGRhdGUoKSB7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5kZWZhdWx0Vmlld1R5cGUgPSB0aGlzLmNvbnRleHQuZGVmYXVsdFZpZXdUeXBlO1xuICAgICAgICB0aGlzLm9wcG9zaXRlVmlld1R5cGUgPSB0aGlzLmRlZmF1bHRWaWV3VHlwZSAhPT0gJ2dyaWQnID8gJ2dyaWQnIDogJ2xpc3QnO1xuICAgICAgICB0aGlzLnByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nT3ZlcmxheSA9ICQoJy5sb2FkaW5nT3ZlcmxheS5sb2FkaW5nT3ZlcmxheS0tcHJvZHVjdC1saXN0aW5nJyk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdmYWNldGVkU2VhcmNoUmVmcmVzaCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9nZ2xlRXZlbnRzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGdldFN0b3JlZFZpZXdUeXBlKCkge1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcnktdmlldy10eXBlJykgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0VGVtcGxhdGVUeXBlKHR5cGUpIHtcbiAgICAgICAgY29uc3QgcGFnZVR5cGUgPSB0aGlzLmdldFN0b3JlZFZpZXdUeXBlKCk7XG4gICAgICAgIHJldHVybiAhcGFnZVR5cGUgPyBgJHt0eXBlfS9wcm9kdWN0LWxpc3RpbmdgIDogYGN1c3RvbS9jYXRlZ29yeS0ke3BhZ2VUeXBlfS12aWV3YDtcbiAgICB9XG5cbiAgICBzdG9yZVZpZXdUeXBlKHR5cGUpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY2F0ZWdvcnktdmlldy10eXBlJywgdHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0Q2F0ZWdvcnlQYWdlKHBhZ2VUeXBlKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5wcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYGN1c3RvbS9jYXRlZ29yeS0ke3BhZ2VUeXBlfS12aWV3YCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxvYWRpbmdPdmVybGF5LnNob3coKTtcblxuICAgICAgICBhcGkuZ2V0UGFnZSh1cmxVdGlscy5nZXRVcmwoKSwgY29uZmlnLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJykuaHRtbChjb250ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nT3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RvcmVWaWV3VHlwZShwYWdlVHlwZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkVG9nZ2xlRXZlbnRzKCk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcigncHJvZHVjdFZpZXdNb2RlQ2hhbmdlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRUb2dnbGVFdmVudHMoKSB7XG4gICAgICAgICQoJy5qcy1jYXRlZ29yeV9fdG9nZ2xlLXZpZXcnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKCd2aWV3LXR5cGUnKTtcblxuICAgICAgICAgICAgaWYgKCQoZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnYWN0aXZlLWNhdGVnb3J5LXZpZXcnKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmdldENhdGVnb3J5UGFnZSh0eXBlLCB0aGlzLmFkZFRvZ2dsZUV2ZW50cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFZpZXdUeXBlID0gdGhpcy5nZXRTdG9yZWRWaWV3VHlwZSgpO1xuXG4gICAgICAgIGlmIChzdG9yZWRWaWV3VHlwZSA9PT0gdGhpcy5kZWZhdWx0Vmlld1R5cGUgfHwgIXN0b3JlZFZpZXdUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRUb2dnbGVFdmVudHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcnlQYWdlKHRoaXMub3Bwb3NpdGVWaWV3VHlwZSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==