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
 * @version 1.1.1
 */
const InventoryItem = require('./InventoryItem.js').InventoryItem;
const Facet = require('./Facet.js').Facet;

class PagedResponseInventoryItem {

    /**
     * Constructs a PagedResponseInventoryItem based on its enclosed builder.
     * @constructor 
     * @param {Builder} builder the PagedResponseInventoryItem builder
     */
    constructor(builder) {

        /**
         * The actual number of results returned in results.
         * @type {integer}
         */
        this.count = builder.count;

        /**
         * The list of facets for this response.
         * @type {Facet[]}
         */
        this.facets = undefined;

        /**
         * The offset for this response, this is the number of elements skipped, not a page number.
         * @type {integer}
         */
        this.offset = builder.offset;

        /**
         * The results for this response.
         * @type {InventoryItem[]}
         */
        this.results = builder.results;

        /**
         * The total number of results matching the query.
         * @type {integer}
         */
        this.total = builder.total;
    }

    /**
     * Builds a PagedResponseInventoryItem based on API required properties.
     */
    static get Builder() {
        class Builder {

            withCount(count) {
                this.count = count;
                return this;
            }

            withOffset(offset) {
                this.offset = offset;
                return this;
            }

            withResults(results) {
                this.results = results;
                return this;
            }

            withTotal(total) {
                this.total = total;
                return this;
            }

            build() {
                return new PagedResponseInventoryItem(this);
            }
        }
        return Builder;
    }
}
module.exports.PagedResponseInventoryItem = PagedResponseInventoryItem;
