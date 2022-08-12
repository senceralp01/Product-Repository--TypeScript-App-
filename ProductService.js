"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
// Kodumuz class bağımlı değil interface bağımlı oluyor. Avantajları:
// Class'ları ilgili interface'e bağlayarak, interface'de tanımladığımız veri tipleri aracılığıyla oluşabilecek hataların önceden önüne geçiyoruz.
// Ayrıca farklı database'ler ile çalıştığımızda herbir database özelinde aynı interface'e bağlı farklı class'lar üzerinden işlemler yürütmeye imkan tanıyor.
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); }); // Dataları çek ve this.products içine aktar.
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
