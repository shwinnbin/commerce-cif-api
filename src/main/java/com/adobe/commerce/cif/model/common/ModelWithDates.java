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

package com.adobe.commerce.cif.model.common;

import java.util.Date;

import io.swagger.annotations.ApiModelProperty;

public class ModelWithDates {

    @ApiModelProperty(
        value = "The date-time when this object was created. The JSON representation must be in RFC339 / ISO8601 format",
        example = "2018-06-05T10:58:18.000Z")
    protected Date createdAt;

    @ApiModelProperty(
        value = "The date-time when this object was last modified. The JSON representation must be in RFC339 / ISO8601 format",
        example = "2018-06-05T10:58:18.000Z")
    protected Date lastModifiedAt;

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getLastModifiedAt() {
        return lastModifiedAt;
    }

    public void setLastModifiedAt(Date lastModifiedAt) {
        this.lastModifiedAt = lastModifiedAt;
    }

}
