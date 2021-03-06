/*******************************************************************************
 *
 *    Copyright 2018 Adobe. All rights reserved.
 *    This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License. You may obtain a copy
 *    of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under
 *    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *    OF ANY KIND, either express or implied. See the License for the specific language
 *    governing permissions and limitations under the License.
 *
 ******************************************************************************/

/**
 * Auto generated code based on Swagger definition.
 * Dot not edit manually. Manual changes will be overridden.
 *
 * @version 1.1.2
 */
const MoneyValue = require('./MoneyValue.js').MoneyValue;
const Category = require('./Category.js').Category;
const Asset = require('./Asset.js').Asset;
const Attribute = require('./Attribute.js').Attribute;

class ProductVariant {

    /**
     * Constructs a ProductVariant based on its enclosed builder.
     * @constructor 
     * @param {Builder} builder the ProductVariant builder
     */
    constructor(builder) {

        /**
         * The assets for this product.
         * @type {Asset[]}
         */
        this.assets = undefined;

        /**
         * The attributes for this product.
         * @type {Attribute[]}
         */
        this.attributes = undefined;

        /**
         * Indicates if the product is available or not in the inventory.
         * @type {boolean}
         */
        this.available = builder.available;

        /**
         * The categories for this product.
         * @type {Category[]}
         */
        this.categories = undefined;

        /**
         * The date-time when this object was created. The JSON representation must be in RFC339 / ISO8601 format
         * @type {string}
         */
        this.createdAt = undefined;

        /**
         * The description of the product.
         * @type {string}
         */
        this.description = undefined;

        /**
         * The internal unique ID of the product in the commerce backend system.
         * @type {string}
         */
        this.id = builder.id;

        /**
         * The date-time when this object was last modified. The JSON representation must be in RFC339 / ISO8601 format
         * @type {string}
         */
        this.lastModifiedAt = undefined;

        /**
         * The name of the product.
         * @type {string}
         */
        this.name = builder.name;

        /**
         * The prices for this product.
         * @type {MoneyValue[]}
         */
        this.prices = builder.prices;

        /**
         * The unique SKU of the product variant assigned by the vendor or manufacturer.
         * @type {string}
         */
        this.sku = builder.sku;
    }

    /**
     * Builds a ProductVariant based on API required properties.
     */
    static get Builder() {
        class Builder {

            withAvailable(available) {
                this.available = available;
                return this;
            }

            withId(id) {
                this.id = id;
                return this;
            }

            withName(name) {
                this.name = name;
                return this;
            }

            withPrices(prices) {
                this.prices = prices;
                return this;
            }

            withSku(sku) {
                this.sku = sku;
                return this;
            }

            build() {
                return new ProductVariant(this);
            }
        }
        return Builder;
    }
}
module.exports.ProductVariant = ProductVariant;
