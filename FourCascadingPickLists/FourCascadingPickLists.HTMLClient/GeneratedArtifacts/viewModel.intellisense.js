﻿/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditItemFour.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditItemFour
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditItemFour,
            data: lightSwitchApplication.AddEditItemFour,
            value: lightSwitchApplication.AddEditItemFour
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditItemFour,
            data: lightSwitchApplication.AddEditItemFour,
            value: lightSwitchApplication.ItemFour
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditItemFour,
            data: lightSwitchApplication.ItemFour,
            value: lightSwitchApplication.ItemFour
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditItemFour,
            data: lightSwitchApplication.ItemFour,
            value: String
        },
        ItemThree: {
            _$class: msls.ContentItem,
            _$name: "ItemThree",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditItemFour,
            data: lightSwitchApplication.ItemFour,
            value: lightSwitchApplication.ItemThree
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ItemThree",
            screen: lightSwitchApplication.AddEditItemFour,
            data: lightSwitchApplication.ItemThree,
            value: lightSwitchApplication.ItemThree
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditItemFour
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditItemFour, {
        /// <field>
        /// Called when a new AddEditItemFour screen is created.
        /// <br/>created(msls.application.AddEditItemFour screen)
        /// </field>
        created: [lightSwitchApplication.AddEditItemFour],
        /// <field>
        /// Called before changes on an active AddEditItemFour screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditItemFour screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditItemFour],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemFour().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemFour().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemFour().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemFour().findContentItem("Name"); }],
        /// <field>
        /// Called after the ItemThree content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemThree_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemFour().findContentItem("ItemThree"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemFour().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.AddEditItemOne.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditItemOne
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditItemOne,
            data: lightSwitchApplication.AddEditItemOne,
            value: lightSwitchApplication.AddEditItemOne
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditItemOne,
            data: lightSwitchApplication.AddEditItemOne,
            value: lightSwitchApplication.ItemOne
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditItemOne,
            data: lightSwitchApplication.ItemOne,
            value: lightSwitchApplication.ItemOne
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditItemOne,
            data: lightSwitchApplication.ItemOne,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditItemOne
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditItemOne, {
        /// <field>
        /// Called when a new AddEditItemOne screen is created.
        /// <br/>created(msls.application.AddEditItemOne screen)
        /// </field>
        created: [lightSwitchApplication.AddEditItemOne],
        /// <field>
        /// Called before changes on an active AddEditItemOne screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditItemOne screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditItemOne],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemOne().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemOne().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemOne().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemOne().findContentItem("Name"); }]
    });

    lightSwitchApplication.AddEditItemThree.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditItemThree
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditItemThree,
            data: lightSwitchApplication.AddEditItemThree,
            value: lightSwitchApplication.AddEditItemThree
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditItemThree,
            data: lightSwitchApplication.AddEditItemThree,
            value: lightSwitchApplication.ItemThree
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditItemThree,
            data: lightSwitchApplication.ItemThree,
            value: lightSwitchApplication.ItemThree
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditItemThree,
            data: lightSwitchApplication.ItemThree,
            value: String
        },
        ItemTwo: {
            _$class: msls.ContentItem,
            _$name: "ItemTwo",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditItemThree,
            data: lightSwitchApplication.ItemThree,
            value: lightSwitchApplication.ItemTwo
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ItemTwo",
            screen: lightSwitchApplication.AddEditItemThree,
            data: lightSwitchApplication.ItemTwo,
            value: lightSwitchApplication.ItemTwo
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditItemThree
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditItemThree, {
        /// <field>
        /// Called when a new AddEditItemThree screen is created.
        /// <br/>created(msls.application.AddEditItemThree screen)
        /// </field>
        created: [lightSwitchApplication.AddEditItemThree],
        /// <field>
        /// Called before changes on an active AddEditItemThree screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditItemThree screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditItemThree],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemThree().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemThree().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemThree().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemThree().findContentItem("Name"); }],
        /// <field>
        /// Called after the ItemTwo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemTwo_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemThree().findContentItem("ItemTwo"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemThree().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.AddEditItemTwo.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditItemTwo
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditItemTwo,
            data: lightSwitchApplication.AddEditItemTwo,
            value: lightSwitchApplication.AddEditItemTwo
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditItemTwo,
            data: lightSwitchApplication.AddEditItemTwo,
            value: lightSwitchApplication.ItemTwo
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditItemTwo,
            data: lightSwitchApplication.ItemTwo,
            value: lightSwitchApplication.ItemTwo
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditItemTwo,
            data: lightSwitchApplication.ItemTwo,
            value: String
        },
        ItemOne: {
            _$class: msls.ContentItem,
            _$name: "ItemOne",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditItemTwo,
            data: lightSwitchApplication.ItemTwo,
            value: lightSwitchApplication.ItemOne
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ItemOne",
            screen: lightSwitchApplication.AddEditItemTwo,
            data: lightSwitchApplication.ItemOne,
            value: lightSwitchApplication.ItemOne
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditItemTwo
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditItemTwo, {
        /// <field>
        /// Called when a new AddEditItemTwo screen is created.
        /// <br/>created(msls.application.AddEditItemTwo screen)
        /// </field>
        created: [lightSwitchApplication.AddEditItemTwo],
        /// <field>
        /// Called before changes on an active AddEditItemTwo screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditItemTwo screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditItemTwo],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemTwo().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemTwo().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemTwo().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemTwo().findContentItem("Name"); }],
        /// <field>
        /// Called after the ItemOne content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemOne_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemTwo().findContentItem("ItemOne"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditItemTwo().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.AddEditMaster.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditMaster
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.AddEditMaster,
            value: lightSwitchApplication.AddEditMaster
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.AddEditMaster,
            value: lightSwitchApplication.Master
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.Master,
            value: lightSwitchApplication.Master
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.Master,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.Master,
            value: lightSwitchApplication.Master
        },
        SelectedOne: {
            _$class: msls.ContentItem,
            _$name: "SelectedOne",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.Master,
            value: lightSwitchApplication.ItemOne
        },
        ItemOne: {
            _$class: msls.ContentItem,
            _$name: "ItemOne",
            _$parentName: "SelectedOne",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.ItemOne,
            value: lightSwitchApplication.ItemOne
        },
        SelectedTwo: {
            _$class: msls.ContentItem,
            _$name: "SelectedTwo",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.Master,
            value: lightSwitchApplication.ItemTwo
        },
        ItemTwo: {
            _$class: msls.ContentItem,
            _$name: "ItemTwo",
            _$parentName: "SelectedTwo",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.ItemTwo,
            value: lightSwitchApplication.ItemTwo
        },
        SelectedThree: {
            _$class: msls.ContentItem,
            _$name: "SelectedThree",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.Master,
            value: lightSwitchApplication.ItemThree
        },
        ItemThree: {
            _$class: msls.ContentItem,
            _$name: "ItemThree",
            _$parentName: "SelectedThree",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.ItemThree,
            value: lightSwitchApplication.ItemThree
        },
        ItemFour: {
            _$class: msls.ContentItem,
            _$name: "ItemFour",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.Master,
            value: lightSwitchApplication.ItemFour
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ItemFour",
            screen: lightSwitchApplication.AddEditMaster,
            data: lightSwitchApplication.ItemFour,
            value: lightSwitchApplication.ItemFour
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditMaster
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditMaster, {
        /// <field>
        /// Called when a new AddEditMaster screen is created.
        /// <br/>created(msls.application.AddEditMaster screen)
        /// </field>
        created: [lightSwitchApplication.AddEditMaster],
        /// <field>
        /// Called before changes on an active AddEditMaster screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditMaster screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditMaster],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("Name"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("right"); }],
        /// <field>
        /// Called after the SelectedOne content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SelectedOne_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("SelectedOne"); }],
        /// <field>
        /// Called after the ItemOne content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemOne_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("ItemOne"); }],
        /// <field>
        /// Called after the SelectedTwo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SelectedTwo_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("SelectedTwo"); }],
        /// <field>
        /// Called after the ItemTwo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemTwo_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("ItemTwo"); }],
        /// <field>
        /// Called after the SelectedThree content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SelectedThree_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("SelectedThree"); }],
        /// <field>
        /// Called after the ItemThree content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemThree_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("ItemThree"); }],
        /// <field>
        /// Called after the ItemFour content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemFour_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("ItemFour"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditMaster().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseItemFours.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseItemFours
        },
        ItemFourList: {
            _$class: msls.ContentItem,
            _$name: "ItemFourList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseItemFours,
            data: lightSwitchApplication.BrowseItemFours,
            value: lightSwitchApplication.BrowseItemFours
        },
        ItemFour: {
            _$class: msls.ContentItem,
            _$name: "ItemFour",
            _$parentName: "ItemFourList",
            screen: lightSwitchApplication.BrowseItemFours,
            data: lightSwitchApplication.BrowseItemFours,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseItemFours,
                _$entry: {
                    elementType: lightSwitchApplication.ItemFour
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ItemFour",
            screen: lightSwitchApplication.BrowseItemFours,
            data: lightSwitchApplication.ItemFour,
            value: lightSwitchApplication.ItemFour
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseItemFours
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseItemFours, {
        /// <field>
        /// Called when a new BrowseItemFours screen is created.
        /// <br/>created(msls.application.BrowseItemFours screen)
        /// </field>
        created: [lightSwitchApplication.BrowseItemFours],
        /// <field>
        /// Called before changes on an active BrowseItemFours screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseItemFours screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseItemFours],
        /// <field>
        /// Called after the ItemFourList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemFourList_postRender: [$element, function () { return new lightSwitchApplication.BrowseItemFours().findContentItem("ItemFourList"); }],
        /// <field>
        /// Called after the ItemFour content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemFour_postRender: [$element, function () { return new lightSwitchApplication.BrowseItemFours().findContentItem("ItemFour"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseItemFours().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseItemOnes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseItemOnes
        },
        ItemOneList: {
            _$class: msls.ContentItem,
            _$name: "ItemOneList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseItemOnes,
            data: lightSwitchApplication.BrowseItemOnes,
            value: lightSwitchApplication.BrowseItemOnes
        },
        ItemOne: {
            _$class: msls.ContentItem,
            _$name: "ItemOne",
            _$parentName: "ItemOneList",
            screen: lightSwitchApplication.BrowseItemOnes,
            data: lightSwitchApplication.BrowseItemOnes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseItemOnes,
                _$entry: {
                    elementType: lightSwitchApplication.ItemOne
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ItemOne",
            screen: lightSwitchApplication.BrowseItemOnes,
            data: lightSwitchApplication.ItemOne,
            value: lightSwitchApplication.ItemOne
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseItemOnes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseItemOnes, {
        /// <field>
        /// Called when a new BrowseItemOnes screen is created.
        /// <br/>created(msls.application.BrowseItemOnes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseItemOnes],
        /// <field>
        /// Called before changes on an active BrowseItemOnes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseItemOnes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseItemOnes],
        /// <field>
        /// Called after the ItemOneList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemOneList_postRender: [$element, function () { return new lightSwitchApplication.BrowseItemOnes().findContentItem("ItemOneList"); }],
        /// <field>
        /// Called after the ItemOne content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemOne_postRender: [$element, function () { return new lightSwitchApplication.BrowseItemOnes().findContentItem("ItemOne"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseItemOnes().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseItemThrees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseItemThrees
        },
        ItemThreeList: {
            _$class: msls.ContentItem,
            _$name: "ItemThreeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseItemThrees,
            data: lightSwitchApplication.BrowseItemThrees,
            value: lightSwitchApplication.BrowseItemThrees
        },
        ItemThree: {
            _$class: msls.ContentItem,
            _$name: "ItemThree",
            _$parentName: "ItemThreeList",
            screen: lightSwitchApplication.BrowseItemThrees,
            data: lightSwitchApplication.BrowseItemThrees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseItemThrees,
                _$entry: {
                    elementType: lightSwitchApplication.ItemThree
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ItemThree",
            screen: lightSwitchApplication.BrowseItemThrees,
            data: lightSwitchApplication.ItemThree,
            value: lightSwitchApplication.ItemThree
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseItemThrees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseItemThrees, {
        /// <field>
        /// Called when a new BrowseItemThrees screen is created.
        /// <br/>created(msls.application.BrowseItemThrees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseItemThrees],
        /// <field>
        /// Called before changes on an active BrowseItemThrees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseItemThrees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseItemThrees],
        /// <field>
        /// Called after the ItemThreeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemThreeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseItemThrees().findContentItem("ItemThreeList"); }],
        /// <field>
        /// Called after the ItemThree content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemThree_postRender: [$element, function () { return new lightSwitchApplication.BrowseItemThrees().findContentItem("ItemThree"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseItemThrees().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseItemTwoes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseItemTwoes
        },
        ItemTwoList: {
            _$class: msls.ContentItem,
            _$name: "ItemTwoList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseItemTwoes,
            data: lightSwitchApplication.BrowseItemTwoes,
            value: lightSwitchApplication.BrowseItemTwoes
        },
        ItemTwo: {
            _$class: msls.ContentItem,
            _$name: "ItemTwo",
            _$parentName: "ItemTwoList",
            screen: lightSwitchApplication.BrowseItemTwoes,
            data: lightSwitchApplication.BrowseItemTwoes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseItemTwoes,
                _$entry: {
                    elementType: lightSwitchApplication.ItemTwo
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "ItemTwo",
            screen: lightSwitchApplication.BrowseItemTwoes,
            data: lightSwitchApplication.ItemTwo,
            value: lightSwitchApplication.ItemTwo
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseItemTwoes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseItemTwoes, {
        /// <field>
        /// Called when a new BrowseItemTwoes screen is created.
        /// <br/>created(msls.application.BrowseItemTwoes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseItemTwoes],
        /// <field>
        /// Called before changes on an active BrowseItemTwoes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseItemTwoes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseItemTwoes],
        /// <field>
        /// Called after the ItemTwoList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemTwoList_postRender: [$element, function () { return new lightSwitchApplication.BrowseItemTwoes().findContentItem("ItemTwoList"); }],
        /// <field>
        /// Called after the ItemTwo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ItemTwo_postRender: [$element, function () { return new lightSwitchApplication.BrowseItemTwoes().findContentItem("ItemTwo"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseItemTwoes().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseMasters.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMasters
        },
        MasterList: {
            _$class: msls.ContentItem,
            _$name: "MasterList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMasters,
            data: lightSwitchApplication.BrowseMasters,
            value: lightSwitchApplication.BrowseMasters
        },
        Master: {
            _$class: msls.ContentItem,
            _$name: "Master",
            _$parentName: "MasterList",
            screen: lightSwitchApplication.BrowseMasters,
            data: lightSwitchApplication.BrowseMasters,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMasters,
                _$entry: {
                    elementType: lightSwitchApplication.Master
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Master",
            screen: lightSwitchApplication.BrowseMasters,
            data: lightSwitchApplication.Master,
            value: lightSwitchApplication.Master
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMasters
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMasters, {
        /// <field>
        /// Called when a new BrowseMasters screen is created.
        /// <br/>created(msls.application.BrowseMasters screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMasters],
        /// <field>
        /// Called before changes on an active BrowseMasters screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMasters screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMasters],
        /// <field>
        /// Called after the MasterList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MasterList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMasters().findContentItem("MasterList"); }],
        /// <field>
        /// Called after the Master content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Master_postRender: [$element, function () { return new lightSwitchApplication.BrowseMasters().findContentItem("Master"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMasters().findContentItem("RowTemplate"); }]
    });

}(msls.application));