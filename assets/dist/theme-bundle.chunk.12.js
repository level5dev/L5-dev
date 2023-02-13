(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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
    console.log("body", body);
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
    console.log("grid", grid);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9pdHMtY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS90b2dnbGUtY2F0ZWdvcnktbGlzdGluZy12aWV3LmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwiY29udGV4dCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiSVRTQ2F0ZWdvcnkiLCJ0b2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3IiwiVG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldyIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwiYXR0ciIsInJvbGUiLCJtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlIiwiJCIsImxlbmd0aCIsImhhc0NsYXNzIiwiZm9jdXMiLCJvbiIsIm9uUmVhZHkiLCJwb3B1bGF0ZUdyaWRQcm9kdWN0IiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJlIiwiY3VycmVudFRhcmdldCIsIm5leHQiLCJjb21wYXJlUHJvZHVjdHMiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsImhvb2tzIiwic2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzIiwiYXJpYU5vdGlmeU5vUHJvZHVjdHMiLCIkbm9Qcm9kdWN0c01lc3NhZ2UiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJnZXRSZXF1ZXN0VGVtcGxhdGVUeXBlIiwic2lkZWJhciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImFmdGVyRmFjZXRVcGRhdGUiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsIk5ld09wdHMiLCJ1cGRhdGVSZXF1ZXN0T3B0aW9ucyIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiVVVJRGNhdGMiLCJjYXRlZ29yeUlkIiwiYXhpb3MiLCJnZXQiLCJwYXJhbXMiLCJpZCIsInRoZW4iLCJyZXNwb25zZSIsImdyaWRBbGxQcm9kdWN0cyIsImRhdGEiLCJwcm9kdWN0IiwiZm9yRWFjaCIsInByIiwiaW1nIiwiaSIsImFjdGlvblNlY3Rpb24iLCJnZXRBbGxDYXRlZ29yeSIsInRvRml4ZWQiLCJzYWxlX3ByaWNlIiwicmV0YWlsX3ByaWNlIiwiZmluZCIsImZpZWxkIiwidW5kZWZpbmVkIiwidmFsdWUiLCJhcHBlbmQiLCJjb25maWd1cmVJc290b3BlRm9yQWxsIiwic3RhcnRHbG9iYWwiLCJlcnJvciIsImNhdF9saXN0IiwicHJfY2F0IiwiY2F0Iiwiam9pbiIsImN1c3RvbUdsb2JhbCIsImNzcyIsImhpZGUiLCJncmlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlzbyIsIklzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJsYXlvdXRNb2RlIiwiZ2V0U29ydERhdGEiLCJuYW1lIiwiaXRlbUVsZW0iLCJnZXRBdHRyaWJ1dGUiLCJwcmljZSIsIk51bWJlciIsInJldmlldyIsImJlc3Rfc2VsbGluZyIsIm5ld2VzdCIsImN1c3RvbV9zb3J0X29yZGVyIiwiY2hhbmdlIiwidmFsIiwic3BsaXQiLCJhcnJhbmdlIiwic29ydEJ5Iiwic29ydEFzY2VuZGluZyIsInJhdGluZ19jb3VudCIsImZpbHRlcl9hcnIiLCJpc2ZlYXR1cmVkIiwiY2hlY2tlZCIsInB1c2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInN1YmNhdGVnb3JpZXMiLCJDYXRhbG9nUGFnZSIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJKU09OIiwicGFyc2UiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInBvcCIsInJlZHVjZSIsImFjYyIsImRlZmF1bHRWaWV3VHlwZSIsIm9wcG9zaXRlVmlld1R5cGUiLCJsb2FkaW5nT3ZlcmxheSIsImFkZFRvZ2dsZUV2ZW50cyIsImluaXQiLCJnZXRTdG9yZWRWaWV3VHlwZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInR5cGUiLCJwYWdlVHlwZSIsInN0b3JlVmlld1R5cGUiLCJzZXRJdGVtIiwiZ2V0Q2F0ZWdvcnlQYWdlIiwic2hvdyIsImFwaSIsImdldFBhZ2UiLCJ1cmxVdGlscyIs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QUksQ0FBQ0wsZUFBZSxDQUFDO0lBQ3BELENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUVEQyxJQUFJLEdBQUosZ0JBQU87SUFDSCxJQUFNZ0IsY0FBYyxHQUFHLElBQUksQ0FBQ2YsaUJBQWlCLEVBQUU7SUFFL0MsSUFBSWUsY0FBYyxLQUFLLElBQUksQ0FBQ3BCLGVBQWUsSUFBSSxDQUFDb0IsY0FBYyxFQUFFO01BQzVELE9BQU8sSUFBSSxDQUFDakIsZUFBZSxFQUFFO0lBQ2pDO0lBRUEsSUFBSSxDQUFDUyxlQUFlLENBQUMsSUFBSSxDQUFDWCxnQkFBZ0IsQ0FBQztFQUMvQyxDQUFDO0VBQUE7QUFBQSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gXCJAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlsc1wiO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gXCIuL2NhdGFsb2dcIjtcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSBcIi4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHNcIjtcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gXCIuL2NvbW1vbi9mYWNldGVkLXNlYXJjaFwiO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSBcIi4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHNcIjtcbmltcG9ydCBJVFNDYXRlZ29yeSBmcm9tIFwiLi9jdXN0b20vaXRzLWNhdGVnb3J5XCI7XG5pbXBvcnQgVG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldyBmcm9tIFwiLi9jdXN0b20vdG9nZ2xlLWNhdGVnb3J5LWxpc3Rpbmctdmlld1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IElzb3RvcGUgZnJvbSBcImlzb3RvcGUtbGF5b3V0XCI7XG5pbXBvcnQgY3VzdG9tR2xvYmFsIGZyb20gXCIuL2N1c3RvbS9pdHMtZ2xvYmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG4gICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcblxuICAgIC8qKlxuICAgICAqIEludHVpdFNvbHV0aW9ucyAtIEN1c3RvbSBDYXRlZ29yeVxuICAgICAqL1xuICAgIHRoaXMuSVRTQ2F0ZWdvcnkgPSBuZXcgSVRTQ2F0ZWdvcnkoY29udGV4dCk7XG4gICAgdGhpcy50b2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3ID0gbmV3IFRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXcoY29udGV4dCk7XG4gIH1cblxuICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XG4gICAgJGVsZW1lbnQuYXR0cih7XG4gICAgICByb2xlOiByb2xlVHlwZSxcbiAgICAgIFwiYXJpYS1saXZlXCI6IGFyaWFMaXZlU3RhdHVzLFxuICAgIH0pO1xuICB9XG5cbiAgbWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpIHtcbiAgICBpZiAoISQoXCJbZGF0YS1zaG9wLWJ5LXByaWNlXVwiKS5sZW5ndGgpIHJldHVybjtcblxuICAgIGlmICgkKFwiLm5hdkxpc3QtYWN0aW9uXCIpLmhhc0NsYXNzKFwiaXMtYWN0aXZlXCIpKSB7XG4gICAgICAkKFwiYS5uYXZMaXN0LWFjdGlvbi5pcy1hY3RpdmVcIikuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAkKFwiYS5uYXZMaXN0LWFjdGlvblwiKS5vbihcImNsaWNrXCIsICgpID0+XG4gICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKFxuICAgICAgICAkKFwic3Bhbi5wcmljZS1maWx0ZXItbWVzc2FnZVwiKSxcbiAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgXCJhc3NlcnRpdmVcIlxuICAgICAgKVxuICAgICk7XG4gIH1cbiAgLypcbiAgc2V0VXBJc290b3BlQXR0cmlidXRlKCkge1xuICAgIGxldCBkYXRhID0ge307XG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLmNvbnRleHQucHJvZHVjdExpc3Q7XG4gICAgY29uc3QgYm9keSA9IHRoaXM7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwczovL3N1ZnJpLmFwaS5zdGRsaWIuY29tL2w1dEBkZXYvZ2V0SXRlbUF0dHIvXCIpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIHByb2R1Y3RzLmZvckVhY2goKHByKSA9PiB7XG4gICAgICAgICAgY29uc3QgZWwgPSAkKGAjcHJvZHVjdC0ke3ByLmlkfWApO1xuICAgICAgICAgIGVsLmF0dHIoXG4gICAgICAgICAgICBcInByb2R1Y3QtZGF0ZS1jcmVhdGVkXCIsXG4gICAgICAgICAgICBkYXRhW2Bwcm9kdWN0LSR7cHIuaWR9YF1bXCJkYXRlX2NyZWF0ZWRcIl1cbiAgICAgICAgICApO1xuICAgICAgICAgIGVsLmF0dHIoXCJwcm9kdWN0LWlzLWZlYXR1cmVkXCIsIGRhdGFbYHByb2R1Y3QtJHtwci5pZH1gXVtcImZlYXR1cmVkXCJdKTtcbiAgICAgICAgICBlbC5hdHRyKFxuICAgICAgICAgICAgXCJwcm9kdWN0LWJlc3Qtc2VsbGluZ1wiLFxuICAgICAgICAgICAgZGF0YVtgcHJvZHVjdC0ke3ByLmlkfWBdW1wiYmVzdF9zZWxsaW5nXCJdXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYm9keS5jb25maWd1cmVJc290b3BlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbmZpZ3VyZUlzb3RvcGUoKSB7XG4gICAgJChcIi5ncmlkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJncmlkXCIpO1xuICAgIGxldCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkLWJsb2NrXCIpO1xuICAgIGxldCBpc28gPSBuZXcgSXNvdG9wZShncmlkLCB7XG4gICAgICAvLyBvcHRpb25zLi4uXG4gICAgICBpdGVtU2VsZWN0b3I6IFwiLnByb2R1Y3RcIixcbiAgICAgIGxheW91dE1vZGU6IFwiZml0Um93c1wiLFxuICAgICAgZ2V0U29ydERhdGE6IHtcbiAgICAgICAgbmFtZTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1uYW1lXCIpO1xuICAgICAgICB9LFxuICAgICAgICBwcmljZTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlcihpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtcHJpY2VcIikpO1xuICAgICAgICB9LFxuICAgICAgICByZXZpZXc6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtcmV2aWV3XCIpO1xuICAgICAgICB9LFxuICAgICAgICBjYXRlZ29yeTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1jYXRlZ29yeVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmVzdF9zZWxsaW5nOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtYmVzdC1zZWxsaW5nXCIpKTtcbiAgICAgICAgfSxcbiAgICAgICAgbmV3ZXN0OiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1kYXRlLWNyZWF0ZWRcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHJhdGluZ19jb3VudDogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtcmV2aWV3LWNvdW50XCIpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgICQoXCIjc29ydC1zZWxlY3RcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHZhbCA9ICQodGhpcykudmFsKCkuc3BsaXQoXCItXCIpO1xuICAgICAgY29uc29sZS5sb2codmFsWzBdKTtcbiAgICAgIGlmICh2YWxbMF0gPT09IFwicmV2aWV3XCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWNcIik7XG4gICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICBzb3J0Qnk6IFt2YWxbMF0sIFwicmF0aW5nX2NvdW50XCJdLFxuICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IHtcbiAgICAgICAgICAgIHJldmlldzogZmFsc2UsXG4gICAgICAgICAgICByYXRpbmdfY291bnQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgIHNvcnRCeTogdmFsWzBdLFxuICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IHZhbFsxXSA9PT0gXCJhc2NcIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiI2ZlYXR1cmVkLWNoZWNrYm94XCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtaXMtZmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNvLmFycmFuZ2UoeyBmaWx0ZXI6IFwiKlwiIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsdGVyX2FyciA9IFtdO1xuXG4gICAgJChcIltmaWx0ZXItY2hlY2tib3hdXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIGZpbHRlcl9hcnIucHVzaCgkKHRoaXMpLmF0dHIoXCJkYXRhLWZpbHRlci12YWx1ZVwiKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpbmRleCA9IGZpbHRlcl9hcnIuaW5kZXhPZigkKHRoaXMpLmF0dHIoXCJkYXRhLWZpbHRlci12YWx1ZVwiKSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgLy8gb25seSBzcGxpY2UgYXJyYXkgd2hlbiBpdGVtIGlzIGZvdW5kXG4gICAgICAgICAgZmlsdGVyX2Fyci5zcGxpY2UoaW5kZXgsIDEpOyAvLyAybmQgcGFyYW1ldGVyIG1lYW5zIHJlbW92ZSBvbmUgaXRlbSBvbmx5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHRlbXAgPSAkKHRoaXMpO1xuICAgICAgaWYgKGZpbHRlcl9hcnIubGVuZ3RoID4gMCkge1xuICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgLy8gaXRlbSBlbGVtZW50IHByb3ZpZGVkIGFzIGFyZ3VtZW50XG4gICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1jYXRlZ29yeVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyX2Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAodmFsLmluY2x1ZGVzKGZpbHRlcl9hcnJbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNvLmFycmFuZ2UoeyBmaWx0ZXI6IFwiKlwiIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4qL1xuICBvblJlYWR5KCkge1xuICAgIHRoaXMucG9wdWxhdGVHcmlkUHJvZHVjdCgpO1xuICAgIHRoaXMuYXJyYW5nZUZvY3VzT25Tb3J0QnkoKTtcblxuICAgICQoJ1tkYXRhLWJ1dHRvbi10eXBlPVwiYWRkLWNhcnRcIl0nKS5vbihcImNsaWNrXCIsIChlKSA9PlxuICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcyhcbiAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSxcbiAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgXCJwb2xpdGVcIlxuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKTtcblxuICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgaWYgKCQoXCIjZmFjZXRlZFNlYXJjaFwiKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICBob29rcy5vbihcInNvcnRCeS1zdWJtaXR0ZWRcIiwgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgJChcImEucmVzZXQtYnRuXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzKCQoXCJzcGFuLnJlc2V0LW1lc3NhZ2VcIiksIFwic3RhdHVzXCIsIFwicG9saXRlXCIpXG4gICAgKTtcblxuICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcbiAgICAvLyB0aGlzLnNldFVwSXNvdG9wZUF0dHJpYnV0ZSgpO1xuICB9XG5cbiAgYXJpYU5vdGlmeU5vUHJvZHVjdHMoKSB7XG4gICAgY29uc3QgJG5vUHJvZHVjdHNNZXNzYWdlID0gJChcIltkYXRhLW5vLXByb2R1Y3RzLW5vdGlmaWNhdGlvbl1cIik7XG4gICAgaWYgKCRub1Byb2R1Y3RzTWVzc2FnZS5sZW5ndGgpIHtcbiAgICAgICRub1Byb2R1Y3RzTWVzc2FnZS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXG4gICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxuICAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxuICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoXCIjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoXCIjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZToge1xuICAgICAgICBwcm9kdWN0TGlzdGluZzpcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXcuZ2V0UmVxdWVzdFRlbXBsYXRlVHlwZShcImNhdGVnb3J5XCIpLFxuICAgICAgICBzaWRlYmFyOiBcImNhdGVnb3J5L3NpZGViYXJcIixcbiAgICAgIH0sXG4gICAgICBzaG93TW9yZTogXCJjYXRlZ29yeS9zaG93LW1vcmVcIixcbiAgICB9O1xuXG4gICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2goXG4gICAgICByZXF1ZXN0T3B0aW9ucyxcbiAgICAgIChjb250ZW50KSA9PiB7XG4gICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgJChcImJvZHlcIikudHJpZ2dlckhhbmRsZXIoXCJjb21wYXJlUmVzZXRcIik7XG5cbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW50dWl0U29sdXRpb25zIC0gQ2F0ZWdvcnkgVXBkYXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLklUU0NhdGVnb3J5LmFmdGVyRmFjZXRVcGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgICAgb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICAkKFwiYm9keVwiKS5vbihcInByb2R1Y3RWaWV3TW9kZUNoYW5nZWRcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgTmV3T3B0cyA9IHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOlxuICAgICAgICAgICAgdGhpcy50b2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3LmdldFJlcXVlc3RUZW1wbGF0ZVR5cGUoXCJjYXRlZ29yeVwiKSxcbiAgICAgICAgICBzaWRlYmFyOiBcImNhdGVnb3J5L3NpZGViYXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd01vcmU6IFwiY2F0ZWdvcnkvc2hvdy1tb3JlXCIsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmZhY2V0ZWRTZWFyY2gudXBkYXRlUmVxdWVzdE9wdGlvbnMoTmV3T3B0cyk7XG4gICAgfSk7XG4gIH1cbiAgLyoqIFxuICBnZXRUb2tlbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgVE9LRU46IFwibDZ6cm1obXl2OWI4NnBtNjFzbThoYW1wbWs1N3pnclwiLFxuICAgICAgQVBJX1BBVEg6IFwiaHR0cHM6Ly9hcGkuYmlnY29tbWVyY2UuY29tL3N0b3Jlcy84OWE5bnRwMTYvdjMvXCIsXG4gICAgfTtcbiAgfVxuXG4gIHJlcXVlc3RQcm9kdWN0KCkge1xuICAgIGNvbnN0IEJBU0UgPSB0aGlzLmdldFRva2VuKCk7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IHRoaXMuY29udGV4dC5jYXRlZ29yeUlkO1xuICAgIGNvbnN0IGVuZHBvaW50ID0gXCJjYXRhbG9nL3Byb2R1Y3RzXCI7XG4gICAgY29uc29sZS5sb2coXCJyZXF1ZXN0aW5nXCIpO1xuICAgIGNvbnNvbGUubG9nKEJBU0UpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICB1cmw6IGAke0JBU0UuQVBJX1BBVEh9JHtlbmRwb2ludH1gLFxuICAgICAgcGFyYW1zOiB7IGxpbWl0OiBcIjIwXCIgfSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiWC1BdXRoLVRva2VuXCI6IGAke0JBU0UuVE9LRU59YCxcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBheGlvc1xuICAgICAgLnJlcXVlc3Qob3B0aW9ucylcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbiAgKi9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgcG9wdWxhdGVHcmlkUHJvZHVjdCgpIHtcbiAgICAvLyB0aGlzLnJlcXVlc3RQcm9kdWN0KCk7XG4gICAgY29uc3QgYm9keSA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coXCJib2R5XCIsIGJvZHkpO1xuICAgIGNvbnN0IFVVSURjYXRjID0gdGhpcy5jb250ZXh0LlVVSURjYXRjO1xuICAgIGNvbnN0IGNhdGVnb3J5SWQgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlJZDtcbiAgICBheGlvc1xuICAgICAgLmdldChcImh0dHBzOi8vc3VmcmkuYXBpLnN0ZGxpYi5jb20vbDV0QGRldi9nZXRBbGxQcm9kdWN0L1wiLCB7XG4gICAgICAgIHBhcmFtczogeyBpZDogY2F0ZWdvcnlJZCB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zdCBncmlkQWxsUHJvZHVjdHMgPSAkKFwiI2dyaWQtYWxsLXByb2R1Y3RcIik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhLnByb2R1Y3Q7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gcmVzcG9uc2UuZGF0YS5jYXRlZ29yeTtcblxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZGF0YS5mb3JFYWNoKChwcikgPT4ge1xuICAgICAgICAgIGxldCBpbWcgPSB7fTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJbXCJpbWFnZXNcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcltcImltYWdlc1wiXVtpXVtcImlzX3RodW1ibmFpbFwiXSkge1xuICAgICAgICAgICAgICBpbWcgPSBwcltcImltYWdlc1wiXVtpXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBhY3Rpb25TZWN0aW9uID0gXCJcIjtcbiAgICAgICAgICBpZiAocHJbXCJ2YXJpYW50c1wiXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBhY3Rpb25TZWN0aW9uID0gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBxdWlja3ZpZXcgYnV0dG9uLS1xdWlja3ZpZXdcIiBkYXRhLXByb2R1Y3QtaWQ9XCIke3ByW1wiaWRcIl19XCI+VmlldyBPcHRpb25zPC9idXR0b24+YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aW9uU2VjdGlvbiA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWF0YyBqcy1jYXJkLWF0Y1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hdGNfX3NlY3Rpb24gY2FyZC1hdGNfX3NlY3Rpb24tLXF0eVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjYXJkLWF0Y19fcXR5LSR7cHJbXCJpZFwiXX0tJHtVVUlEY2F0Y31cIiBjbGFzcz1cImNhcmQtYXRjX19sYWJlbCBpcy1zck9ubHlcIj5RdWFudGl0eTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWF0Yy1pbmNyZW1lbnQgY2FyZC1hdGMtaW5jcmVtZW50LS1oYXMtYnV0dG9ucyBqcy1jYXJkLWF0Yy1pbmNyZW1lbnRcIj5cblxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBjbGFzcz1cImZvcm0taW5wdXQgY2FyZC1hdGNfX2lucHV0IGNhcmQtYXRjX19pbnB1dC0tdG90YWwganMtY2FyZC1hdGNfX2lucHV0LS10b3RhbFwiIG5hbWU9XCJjYXJkLWF0Y19fcXR5LSR7cHJbXCJpZFwiXX0tJHtVVUlEY2F0Y31cIiBpZD1cImNhcmQtYXRjX19xdHktJHtwcltcImlkXCJdfS0ke1VVSURjYXRjfVwiIHZhbHVlPVwiMVwiIG1pbj1cIjFcIiBwYXR0ZXJuPVwiWzAtOV0qXCIgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hdGMtYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWljb25cIiBkYXRhLWFjdGlvbj1cImluY1wiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPkluY3JlYXNlIFF1YW50aXR5IG9mIHVuZGVmaW5lZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24td3JhcHBlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljb24tYWRkXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0taWNvblwiIGRhdGEtYWN0aW9uPVwiZGVjXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+RGVjcmVhc2UgUXVhbnRpdHkgb2YgdW5kZWZpbmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi13cmFwcGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1taW51c1wiPjwvdXNlPlBQXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hdGNfX3NlY3Rpb24gY2FyZC1hdGNfX3NlY3Rpb24tLWFjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FyZC1hdGNfX2J1dHRvbiBidXR0b24gYnV0dG9uLS1wcmltYXJ5IGpzLWNhcmQtYXRjX19idXR0b25cIiBpZD1cImNhcmQtYXRjX19hZGQtJHtwcltcImlkXCJdfS0ke1VVSURjYXRjfVwiIGRhdGEtZGVmYXVsdC1tZXNzYWdlPVwiQWRkIHRvIENhcnRcIiBkYXRhLXdhaXQtbWVzc2FnZT1cIkFkZGluZyB0byBjYXJ04oCmXCIgZGF0YS1hZGRlZC1tZXNzYWdlPVwiQWRkIHRvIENhcnRcIiB2YWx1ZT1cIkFkZCB0byBDYXJ0XCIgZGF0YS1jYXJkLWFkZC10by1jYXJ0PVwiL2NhcnQucGhwP2FjdGlvbj1hZGQmYW1wO3Byb2R1Y3RfaWQ9JHtwcltcImlkXCJdfVwiIGRhdGEtZXZlbnQtdHlwZT1cInByb2R1Y3QtY2xpY2tcIj5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zdGF0dXMtbWVzc2FnZSBhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5BZGRpbmcgdG8gY2FydOKApiBUaGUgaXRlbSBoYXMgYmVlbiBhZGRlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICA8ZGl2IGlkPVwicHJvZHVjdC0ke3ByW1wiaWRcIl19XCIgc29ydC1vcmRlcj1cIiR7XG4gICAgICAgICAgICBwcltcInNvcnRfb3JkZXJcIl1cbiAgICAgICAgICB9XCIgY2xhc3M9XCJwcm9kdWN0XCIgcHJvZHVjdC1kYXRhLWNhdGVnb3J5PVwiJHtnZXRBbGxDYXRlZ29yeShcbiAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgcHJbXCJjYXRlZ29yaWVzXCJdXG4gICAgICAgICAgKX1cIiBcbiAgICAgICAgICAgICAgICBwcm9kdWN0LWRhdGEtbmFtZT1cIiR7cHJbXCJmYWtlLWhlYWRpbmdcIl19XCIgXG4gICAgICAgICAgICAgICAgcHJvZHVjdC1kYXRhLXJldmlldz1cIiR7XG4gICAgICAgICAgICAgICAgICBwcltcInJldmlld3NfY291bnRcIl0gPT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogcHJbXCJyZXZpZXdzX3JhdGluZ19zdW1cIl0gLyBwcltcInJldmlld3NfY291bnRcIl1cbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LXJldmlldy1jb3VudD1cIiR7cHJbXCJyZXZpZXdzX2NvdW50XCJdfVwiIFxuICAgICAgICAgICAgICAgIHByb2R1Y3QtZGF0YS1wcmljZT1cIiR7XG4gICAgICAgICAgICAgICAgICBwcltcInZhcmlhbnRzXCJdLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgIDogcHJbXCJjYWxjdWxhdGVkX3ByaWNlXCJdLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICB9XCIgXG4gICAgICAgICAgICAgICAgcHJvZHVjdC1kYXRlLWNyZWF0ZWQ9XCIke3ByW1wiZGF0ZV9jcmVhdGVkXCJdfVwiIFxuICAgICAgICAgICAgICAgIHByb2R1Y3QtaXMtZmVhdHVyZWQ9XCIke1xuICAgICAgICAgICAgICAgICAgcHJbXCJpc19mZWF0dXJlZFwiXVxuICAgICAgICAgICAgICAgIH1cIiBwcm9kdWN0LWJlc3Qtc2VsbGluZz1cIiR7cHJbXCJ0b3RhbF9zb2xkXCJdfVwiXG4gICAgICAgICAgICAgICAgcHJvZHVjdC1jdXN0b20tc29ydC1vcmRlcj1cIiR7cHJbXCJjdXN0b20tc29ydC1vcmRlclwiXX1cIj5cbiAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlclwiPlxuICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZFwiIGRhdGEtdGVzdD1cImNhcmQtJHtwcltcImlkXCJdfVwiPlxuICAgICAgPGZpZ3VyZSBjbGFzcz1cImNhcmQtZmlndXJlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzYWxlLWZsYWctc2FzaFwiIHN0eWxlPVwiZGlzcGxheTogJHtcbiAgICAgICAgICBwcltcInZhcmlhbnRzXCJdWzBdLnNhbGVfcHJpY2UgIT09IDAgPyBcImJsb2NrO1wiIDogXCJub25lO1wiXG4gICAgICAgIH0gXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzYWxlLXRleHRcIj5PbiBTYWxlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgaHJlZj1cIiR7XG4gICAgICAgICAgcHJbXCJjdXN0b21fdXJsXCJdW1widXJsXCJdXG4gICAgICAgIH1cIiBjbGFzcz1cImNhcmQtZmlndXJlX19saW5rXCIgYXJpYS1sYWJlbD1cIiR7cHJbXCJuYW1lXCJdfSwgJCR7XG4gICAgICAgICAgICBwcltcInZhcmlhbnRzXCJdLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgIDogcHJbXCJjYWxjdWxhdGVkX3ByaWNlXCJdLnRvRml4ZWQoMilcbiAgICAgICAgICB9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiBjYXJkLWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXG4gICAgICAgICAgICAke2ltZ1tcInVybF90aHVtYm5haWxcIl19XCIgXG4gICAgICAgICAgICBhbHQ9XCJpbWdbXCJkZXNjcmlwdGlvblwiXVwiIHRpdGxlPVwiJHtcbiAgICAgICAgICAgICAgcHJbXCJmYWtlLWhlYWRpbmdcIl1cbiAgICAgICAgICAgIH1cIiBkYXRhLXNpemVzPVwiYXV0b1wiIFxuICAgICAgICAgICAgc3Jjc2V0PVwiXG4gICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gODB3LCBcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxNjB3LCBcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAzMjB3LCBcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA2NDB3LCBcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA5NjB3LCBcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxMjgwdywgXG4gICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTkyMHcsIFxuICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMjU2MHdcIiBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGF0YS1zcmNzZXQ9XCJcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA4MHcsIFxuICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDE2MHcsIFxuICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDMyMHcsIFxuICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDY0MHcsIFxuICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDk2MHcsIFxuICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDEyODB3LCBcbiAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxOTIwdywgXG4gICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMjU2MHdcIiBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWltYWdlIGxhenlhdXRvc2l6ZXMgbGF6eWxvYWRlZFwiIHNpemVzPVwiMjQ4cHhcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZmlnY2FwdGlvbi1ib2R5XCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RWaWV3LXR5cGUtdGl0bGUgaDRcIiBwcm9kdWN0LW5hbWU9XCJcIj4ke1xuICAgICAgICAgICAgICBwcltcImZha2UtaGVhZGluZ1wiXVxuICAgICAgICAgICAgfTwvcD5cblxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSBcIj5cbiAgICAgICAgICAgICAgPGEgYXJpYS1sYWJlbD1cIiR7cHJbXCJuYW1lXCJdfSwgJCR7XG4gICAgICAgICAgICBwcltcInZhcmlhbnRzXCJdLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgIDogcHJbXCJjYWxjdWxhdGVkX3ByaWNlXCJdLnRvRml4ZWQoMilcbiAgICAgICAgICB9XCIgaHJlZj1cIiR7cHJbXCJjdXN0b21fdXJsXCJdW1widXJsXCJdfVwiPlxuICAgICAgICAgICAgICAgICR7cHJbXCJuYW1lXCJdfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLXRleHQtLXNrdVwiPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICBTS1UjOiAke3ByW1wic2t1XCJdfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHQgY2FyZC10ZXh0LS1wcmljZVwiIGRhdGEtdGVzdC1pbmZvLXR5cGU9XCJwcmljZVwiPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggcnJwLXByaWNlLS13aXRob3V0VGF4IGg0XCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlxuICAgICAgICAgICAgICAgICAgTVNSUDpcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXJycCBoNVwiPlxuICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgcHJbXCJ2YXJpYW50c1wiXVswXS5zYWxlX3ByaWNlICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIiRcIiArIHByW1widmFyaWFudHNcIl1bMF0ucmV0YWlsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheCBoNVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlxuICAgICAgICAgICAgICAgICAgV2FzOlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPlxuXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBoNFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtbGFiZWwgaXMtc3JPbmx5XCI+XG5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS1ub3ctbGFiZWwgaXMtc3JPbmx5XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgTm93OlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JCR7XG4gICAgICAgICAgICAgICAgICBwcltcInZhcmlhbnRzXCJdLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgIDogcHJbXCJjYWxjdWxhdGVkX3ByaWNlXCJdLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgY2FyZC10ZXh0LS1leHRyYVwiIHN0eWxlPVwiZGlzcGxheTogJHtcbiAgICAgICAgICAgICAgcHJbXCJjdXN0b21fZmllbGRzXCJdLmZpbmQoXG4gICAgICAgICAgICAgICAgKGZpZWxkKSA9PiBmaWVsZFtcIm5hbWVcIl0gPT09IFwiX19jYXJkLWV4dHJhLWluZm9cIlxuICAgICAgICAgICAgICApICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IFwicmVsYXRpdmU7XCJcbiAgICAgICAgICAgICAgICA6IFwibm9uZTtcIlxuICAgICAgICAgICAgfSBcIj4gJHtcbiAgICAgICAgICAgIHByW1wiY3VzdG9tX2ZpZWxkc1wiXS5maW5kKFxuICAgICAgICAgICAgICAoZmllbGQpID0+IGZpZWxkW1wibmFtZVwiXSA9PT0gXCJfX2NhcmQtZXh0cmEtaW5mb1wiXG4gICAgICAgICAgICApICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBwcltcImN1c3RvbV9maWVsZHNcIl0uZmluZChcbiAgICAgICAgICAgICAgICAgIChmaWVsZCkgPT4gZmllbGRbXCJuYW1lXCJdID09PSBcIl9fY2FyZC1leHRyYS1pbmZvXCJcbiAgICAgICAgICAgICAgICApLnZhbHVlXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH08L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbi13cmFwcGVyXCI+XG5cbiAgICAgICAgICAgICAgJHthY3Rpb25TZWN0aW9ufVxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgcXVpY2t2aWV3IGJ1dHRvbi0tcXVpY2t2aWV3XCIgZGF0YS1wcm9kdWN0LWlkPVwiJHtcbiAgICAgICAgICAgICAgICBwcltcImlkXCJdXG4gICAgICAgICAgICAgIH1cIj5WaWV3IERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+YDtcbiAgICAgICAgICBncmlkQWxsUHJvZHVjdHMuYXBwZW5kKHRlbXBsYXRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYm9keS5jb25maWd1cmVJc290b3BlRm9yQWxsKCk7XG4gICAgICAgIGJvZHkuc3RhcnRHbG9iYWwoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgLy9lbmQgb2YgZ2V0QWxsUHJvZHVjdCBmb3IgcGFyZW50IGNhdGVnb3J5IHBhZ2VcblxuICAgIGZ1bmN0aW9uIGdldEFsbENhdGVnb3J5KGNhdF9saXN0LCBwcl9jYXQpIHtcbiAgICAgIGxldCBjYXQgPSBcIlwiO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcl9jYXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gY2F0ID1cbiAgICAgICAgLy8gICBjYXQgKyBjYXRfbGlzdFtwcl9jYXRbaV1dID09PSB1bmRlZmluZWRcbiAgICAgICAgLy8gICAgID8gXCJcIlxuICAgICAgICAvLyAgICAgOiBjYXRfbGlzdFtwcl9jYXRbaV1dW1wiY2F0X2lkXCJdID09PSB1bmRlZmluZWRcbiAgICAgICAgLy8gICAgID8gXCIgXCJcbiAgICAgICAgLy8gICAgIDogY2F0X2xpc3RbcHJfY2F0W2ldXVtcImNhdF9pZFwiXS5qb2luKFwiIFwiKSArIFwiIFwiO1xuXG4gICAgICAgIGlmIChjYXRfbGlzdFtwcl9jYXRbaV1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjYXQgPSBjYXQgKyBjYXRfbGlzdFtwcl9jYXRbaV1dW1wiY2F0X2lkXCJdLmpvaW4oXCIgXCIpICsgXCIgXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coY2F0X2xpc3RbcHJfY2F0W2ldXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYXQ7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRHbG9iYWwoKSB7XG4gICAgY3VzdG9tR2xvYmFsKHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBjb25maWd1cmVJc290b3BlRm9yQWxsKCkge1xuICAgICQoXCIuZ3JpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZ3JpZFwiKTtcbiAgICAkKFwiLmxkcy1ibG9ja1wiKS5oaWRlKCk7XG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWQtYWxsLXByb2R1Y3RcIik7XG4gICAgY29uc29sZS5sb2coXCJncmlkXCIsIGdyaWQpO1xuICAgIGxldCBpc28gPSBuZXcgSXNvdG9wZShncmlkLCB7XG4gICAgICAvLyBvcHRpb25zLi4uXG4gICAgICBpdGVtU2VsZWN0b3I6IFwiLnByb2R1Y3RcIixcbiAgICAgIGxheW91dE1vZGU6IFwiZml0Um93c1wiLFxuICAgICAgZ2V0U29ydERhdGE6IHtcbiAgICAgICAgbmFtZTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1uYW1lXCIpO1xuICAgICAgICB9LFxuICAgICAgICBwcmljZTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIE51bWJlcihpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtcHJpY2VcIikpO1xuICAgICAgICB9LFxuICAgICAgICByZXZpZXc6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtcmV2aWV3XCIpO1xuICAgICAgICB9LFxuICAgICAgICBjYXRlZ29yeTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1jYXRlZ29yeVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmVzdF9zZWxsaW5nOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtYmVzdC1zZWxsaW5nXCIpKTtcbiAgICAgICAgfSxcbiAgICAgICAgbmV3ZXN0OiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1kYXRlLWNyZWF0ZWRcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbV9zb3J0X29yZGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtY3VzdG9tLXNvcnQtb3JkZXJcIikpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIGlmICh0aGlzLmNvbnRleHQuc3ViY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcblxuICAgIC8vIH1cblxuICAgICQoXCIjYWxsLXNvcnQtc2VsZWN0XCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCB2YWwgPSAkKHRoaXMpLnZhbCgpLnNwbGl0KFwiLVwiKTtcblxuICAgICAgaWYgKHZhbFswXSA9PT0gXCJyZXZpZXdcIikge1xuICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgc29ydEJ5OiBbdmFsWzBdLCBcInJhdGluZ19jb3VudFwiXSxcbiAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB7XG4gICAgICAgICAgICByZXZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgcmF0aW5nX2NvdW50OiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICBzb3J0Qnk6IHZhbFswXSxcbiAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB2YWxbMV0gPT09IFwiYXNjXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsdGVyX2FyciA9IFtdO1xuXG4gICAgLy8gJChcIiNmZWF0dXJlZC1jaGVja2JveFwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgIC8vICAgICBpZiAoZmlsdGVyX2Fyci5sZW5ndGggPiAwKSB7XG4gICAgLy8gICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgIC8vICAgICAgICAgLy8gaXRlbSBlbGVtZW50IHByb3ZpZGVkIGFzIGFyZ3VtZW50XG4gICAgLy8gICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgIC8vICAgICAgICAgICBjb25zdCB2YWwgPSBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtY2F0ZWdvcnlcIik7XG4gICAgLy8gICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyX2Fyci5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICAgICAgIGlmICh2YWwuaW5jbHVkZXMoZmlsdGVyX2FycltpXSkpIHtcbiAgICAvLyAgICAgICAgICAgICAgIGlmIChpc2ZlYXR1cmVkKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgICAgICAgICAgICAgaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1pcy1mZWF0dXJlZFwiKSA9PT0gXCJ0cnVlXCJcbiAgICAvLyAgICAgICAgICAgICAgICAgKTtcbiAgICAvLyAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIC8vICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgfSk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgIC8vICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAvLyAgICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtaXMtZmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiO1xuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgaWYgKGZpbHRlcl9hcnIubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAvLyAgICAgICAgIC8vIGl0ZW0gZWxlbWVudCBwcm92aWRlZCBhcyBhcmd1bWVudFxuICAgIC8vICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAvLyAgICAgICAgICAgY29uc3QgdmFsID0gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1kYXRhLWNhdGVnb3J5XCIpO1xuICAgIC8vICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcl9hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAodmFsLmluY2x1ZGVzKGZpbHRlcl9hcnJbaV0pKSB7XG4gICAgLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgIH0pO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGlzby5hcnJhbmdlKHsgZmlsdGVyOiBcIipcIiB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgJChcIltjaGVja2JveC1maWx0ZXItYWxsXVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaXNmZWF0dXJlZCA9ICQoXCIjZmVhdHVyZWQtY2hlY2tib3g6Y2hlY2tlZFwiKS5sZW5ndGggPiAwO1xuICAgICAgaWYgKCQodGhpcykuYXR0cihcImlkXCIpICE9PSBcImZlYXR1cmVkLWNoZWNrYm94XCIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgIGZpbHRlcl9hcnIucHVzaCgkKHRoaXMpLmF0dHIoXCJmaWx0ZXItdmFsdWVcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gZmlsdGVyX2Fyci5pbmRleE9mKCQodGhpcykuYXR0cihcImZpbHRlci12YWx1ZVwiKSk7XG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIC8vIG9ubHkgc3BsaWNlIGFycmF5IHdoZW4gaXRlbSBpcyBmb3VuZFxuICAgICAgICAgICAgZmlsdGVyX2Fyci5zcGxpY2UoaW5kZXgsIDEpOyAvLyAybmQgcGFyYW1ldGVyIG1lYW5zIHJlbW92ZSBvbmUgaXRlbSBvbmx5XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWx0ZXJfYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgIC8vIGl0ZW0gZWxlbWVudCBwcm92aWRlZCBhcyBhcmd1bWVudFxuICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtY2F0ZWdvcnlcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcl9hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHZhbC5pbmNsdWRlcyhmaWx0ZXJfYXJyW2ldKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc2ZlYXR1cmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlzLWZlYXR1cmVkXCIpID09PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNmZWF0dXJlZCkge1xuICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlzLWZlYXR1cmVkXCIpID09PSBcInRydWVcIjtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzby5hcnJhbmdlKHsgZmlsdGVyOiBcIipcIiB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmNvbnRleHQuc3ViY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgc29ydEJ5OiBcImN1c3RvbV9zb3J0X29yZGVyXCIsXG4gICAgICAgIHNvcnRBc2NlbmRpbmc6IHRydWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICBzb3J0Qnk6IFwiYmVzdF9zZWxsaW5nXCIsXG4gICAgICAgIHNvcnRBc2NlbmRpbmc6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJVFNDYXRlZ29yeSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIGFmdGVyRmFjZXRVcGRhdGUoKSB7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5kZWZhdWx0Vmlld1R5cGUgPSB0aGlzLmNvbnRleHQuZGVmYXVsdFZpZXdUeXBlO1xuICAgICAgICB0aGlzLm9wcG9zaXRlVmlld1R5cGUgPSB0aGlzLmRlZmF1bHRWaWV3VHlwZSAhPT0gJ2dyaWQnID8gJ2dyaWQnIDogJ2xpc3QnO1xuICAgICAgICB0aGlzLnByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nT3ZlcmxheSA9ICQoJy5sb2FkaW5nT3ZlcmxheS5sb2FkaW5nT3ZlcmxheS0tcHJvZHVjdC1saXN0aW5nJyk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdmYWNldGVkU2VhcmNoUmVmcmVzaCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9nZ2xlRXZlbnRzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGdldFN0b3JlZFZpZXdUeXBlKCkge1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcnktdmlldy10eXBlJykgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0VGVtcGxhdGVUeXBlKHR5cGUpIHtcbiAgICAgICAgY29uc3QgcGFnZVR5cGUgPSB0aGlzLmdldFN0b3JlZFZpZXdUeXBlKCk7XG4gICAgICAgIHJldHVybiAhcGFnZVR5cGUgPyBgJHt0eXBlfS9wcm9kdWN0LWxpc3RpbmdgIDogYGN1c3RvbS9jYXRlZ29yeS0ke3BhZ2VUeXBlfS12aWV3YDtcbiAgICB9XG5cbiAgICBzdG9yZVZpZXdUeXBlKHR5cGUpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY2F0ZWdvcnktdmlldy10eXBlJywgdHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0Q2F0ZWdvcnlQYWdlKHBhZ2VUeXBlKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5wcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYGN1c3RvbS9jYXRlZ29yeS0ke3BhZ2VUeXBlfS12aWV3YCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxvYWRpbmdPdmVybGF5LnNob3coKTtcblxuICAgICAgICBhcGkuZ2V0UGFnZSh1cmxVdGlscy5nZXRVcmwoKSwgY29uZmlnLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJykuaHRtbChjb250ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nT3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RvcmVWaWV3VHlwZShwYWdlVHlwZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkVG9nZ2xlRXZlbnRzKCk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcigncHJvZHVjdFZpZXdNb2RlQ2hhbmdlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRUb2dnbGVFdmVudHMoKSB7XG4gICAgICAgICQoJy5qcy1jYXRlZ29yeV9fdG9nZ2xlLXZpZXcnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9ICQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKCd2aWV3LXR5cGUnKTtcblxuICAgICAgICAgICAgaWYgKCQoZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnYWN0aXZlLWNhdGVnb3J5LXZpZXcnKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmdldENhdGVnb3J5UGFnZSh0eXBlLCB0aGlzLmFkZFRvZ2dsZUV2ZW50cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFZpZXdUeXBlID0gdGhpcy5nZXRTdG9yZWRWaWV3VHlwZSgpO1xuXG4gICAgICAgIGlmIChzdG9yZWRWaWV3VHlwZSA9PT0gdGhpcy5kZWZhdWx0Vmlld1R5cGUgfHwgIXN0b3JlZFZpZXdUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRUb2dnbGVFdmVudHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcnlQYWdlKHRoaXMub3Bwb3NpdGVWaWV3VHlwZSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==