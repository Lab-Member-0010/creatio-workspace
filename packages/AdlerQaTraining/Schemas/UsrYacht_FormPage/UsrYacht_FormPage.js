define("UsrYacht_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "47ed3d97-1265-45bf-ab65-4807960e0dd0",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_3uoxvrw",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_3uoxvrw_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"menuItems": [],
					"clickMode": "menu",
					"visible": true
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "MenuItem_uae46fa",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_uae46fa_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrYachtAverageTicketPrice",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					}
				},
				"parentName": "Button_3uoxvrw",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_iizwyg6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrYachtNumber_kros8v5",
					"control": "$PDS_UsrYachtNumber_kros8v5",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_gk702ct",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_gk702ct_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_lweyjlb",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_gk702ct",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_s3tsuzq",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lweyjlb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_0p0nnc0",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_gk702ct",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_akfz5yc",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_nydf85l",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCaptain_nydf85l",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_0p0nnc0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_skwm5b5",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_skwm5b5_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_akfz5yc",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_r5dyfqp",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_r5dyfqp",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"secondaryDisplayValue": "Description",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_0p0nnc0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_vmz81ct",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_jhwznti",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_jhwznti",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": "$ComboBox_vmz81ct_ValueDetails",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_0p0nnc0",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_bxzgzom",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_lk9xm55",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_lk9xm55",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_0p0nnc0",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_3dn431l",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3dn431l_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_bxzgzom",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrGetMaxPriceButton",
				"values": {
					"type": "crt.Button",
					"caption": "Get maximum price",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"clicked": {
						"request": "usr.RunWebServiceRequest"
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_hmbmyu3",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPricePerDay_m1l2sy9",
					"control": "$PDS_UsrPricePerDay_m1l2sy9",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_xsq4vqm",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_dcfju75",
					"control": "$PDS_UsrLength_dcfju75",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_jivjspj",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_xf1kh1r",
					"control": "$PDS_UsrCrewCount_xf1kh1r",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_hcpbhl4",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengerCount_2y6t7oe",
					"control": "$PDS_UsrPassengerCount_2y6t7oe",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_a6zosjh",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_2u1knbw",
					"control": "$PDS_UsrTicketPrice_2u1knbw",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Categories",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(Categories_label)#",
					"recordId": "",
					"recordRelationColumnName": "",
					"selectSchemaName": "UsrCategoryInYacht",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Input_3mrt0h5",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_4g385v8",
					"control": "$PDS_UsrComment_4g385v8",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Button_9n1en10",
				"values": {
					"type": "crt.Button",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"caption": "#ResourceString(Button_9n1en10_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ImageInput_kiof92q",
				"values": {
					"type": "crt.ImageInput",
					"label": "$Resources.Strings.PDS_UsrImage_n8uoqdb",
					"value": "$PDS_UsrImage_n8uoqdb",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"size": "large",
					"borderRadius": "medium",
					"positioning": "cover"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "DataGrid_yrlevix",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_yrlevix",
					"primaryColumnName": "DataGrid_yrlevixDS_Id",
					"columns": [
						{
							"id": "7e0e28f6-0ec6-1dc7-3ab7-5b41ca49e483",
							"code": "DataGrid_yrlevixDS_UsrComment",
							"caption": "#ResourceString(DataGrid_yrlevixDS_UsrComment)#",
							"dataValueType": 30
						},
						{
							"id": "25284159-b242-5bbf-a16e-b49d3e110eec",
							"code": "DataGrid_yrlevixDS_UsrRentalStart",
							"caption": "#ResourceString(DataGrid_yrlevixDS_UsrRentalStart)#",
							"dataValueType": 7
						},
						{
							"id": "ce27b23b-5c72-26ad-40ee-3cb02e030400",
							"code": "DataGrid_yrlevixDS_UsrRentalStart",
							"caption": "#ResourceString(DataGrid_yrlevixDS_UsrRentalStart)#",
							"dataValueType": 7
						},
						{
							"id": "24b15b0d-a9a3-8e94-672a-d2a0a664dbf6",
							"code": "DataGrid_yrlevixDS_UsrRentalEnd",
							"caption": "#ResourceString(DataGrid_yrlevixDS_UsrRentalEnd)#",
							"dataValueType": 7
						},
						{
							"id": "5ff2984b-aad2-815f-b590-d7d1145e55fe",
							"code": "DataGrid_yrlevixDS_UsrCustomer",
							"caption": "#ResourceString(DataGrid_yrlevixDS_UsrCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "0f0983f7-4c45-bcb7-214f-b4ad839e37e4",
							"code": "DataGrid_yrlevixDS_UsrTotalPrice",
							"caption": "#ResourceString(DataGrid_yrlevixDS_UsrTotalPrice)#",
							"dataValueType": 32
						}
					],
					"placeholder": false,
					"layoutConfig": {
						"row": 1,
						"column": 1,
						"rowSpan": 1,
						"colSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrLength_dcfju75": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						}
					},
					"PDS_UsrPricePerDay_m1l2sy9": {
						"modelConfig": {
							"path": "PDS.UsrPricePerDay"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.YTValidator",
								"params": {
									"settingCode": "UsrYachtMinPrice",
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCrewCount_xf1kh1r": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						}
					},
					"PDS_UsrPassengerCount_2y6t7oe": {
						"modelConfig": {
							"path": "PDS.UsrPassengerCount"
						}
					},
					"PDS_UsrCaptain_nydf85l": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrCaptain_nydf85l_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrManager_lk9xm55": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_lk9xm55_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrDriveType_r5dyfqp": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_r5dyfqp_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrStatus_jhwznti": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_jhwznti_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrComment_4g385v8": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrImage_n8uoqdb": {
						"modelConfig": {
							"path": "PDS.UsrImage"
						}
					},
					"PDS_UsrYachtNumber_kros8v5": {
						"modelConfig": {
							"path": "PDS.UsrYachtNumber"
						}
					},
					"ComboBox_vmz81ct_ValueDetails": {
						"modelConfig": {
							"path": "PDS.UsrStatusDescription"
						}
					},
					"Categories_List_Items_Predefined_Filter": {
						"value": null
					},
					"PDS_UsrTicketPrice_2u1knbw": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"DataGrid_yrlevix": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_yrlevixDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_yrlevixDS_UsrComment": {
									"modelConfig": {
										"path": "DataGrid_yrlevixDS.UsrComment"
									}
								},
								"DataGrid_yrlevixDS_UsrRentalStart": {
									"modelConfig": {
										"path": "DataGrid_yrlevixDS.UsrRentalStart"
									}
								},
								"DataGrid_yrlevixDS_UsrRentalEnd": {
									"modelConfig": {
										"path": "DataGrid_yrlevixDS.UsrRentalEnd"
									}
								},
								"DataGrid_yrlevixDS_UsrCustomer": {
									"modelConfig": {
										"path": "DataGrid_yrlevixDS.UsrCustomer"
									}
								},
								"DataGrid_yrlevixDS_UsrTotalPrice": {
									"modelConfig": {
										"path": "DataGrid_yrlevixDS.UsrTotalPrice"
									}
								},
								"DataGrid_yrlevixDS_Id": {
									"modelConfig": {
										"path": "DataGrid_yrlevixDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"DataGrid_yrlevixDS": [
							{
								"attributePath": "UsrYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrStatusDescription": {
									"path": "UsrStatus.Description",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"DataGrid_yrlevixDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrRentalStart": {
									"path": "UsrRentalStart"
								},
								"UsrRentalEnd": {
									"path": "UsrRentalEnd"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrTotalPrice": {
									"path": "UsrTotalPrice"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.RunWebServiceRequest",
				handler: async (request, next) => {
					const typeObject = await request.$context.PDS_UsrDriveType_r5dyfqp;
					if (!typeObject?.value) {
						Terrasoft.showInformation("Select Drive Type first.");
						return next?.handle(request);
					}
					try {
						const client = new sdk.HttpClientService();
						const base = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
						const endpoint = Terrasoft.combinePath(base, "rest", "YachtService", "GetMaxPriceByDriveTypeId");
						const response = await client.post(endpoint, {
							driveTypeId: typeObject.value
						});
						const value = response?.body?.GetMaxPriceByDriveTypeIdResult;
						if (typeof value !== "number" || value < 0) {
							throw new Error("Service returned no valid maximum price.");
						}
						Terrasoft.showInformation(`Maximum afloat yacht price: ${value}`);
					} catch (error) {
						console.error("YachtService call failed", error);
						Terrasoft.showInformation("Maximum price could not be loaded. Check the logs and try again.");
					}
					return next?.handle(request);
				}
			},{ request: "usr.PushButtonRequest", handler: async (request, next) => { Terrasoft.showInformation("My button was pressed."); const price = await request.$context.PDS_UsrPricePerDay_m1l2sy9; console.log("Price per day: " + price); request.$context.PDS_UsrComment_4g385v8 = "comment from JS code!"; return next?.handle(request); } }, { request: "crt.HandleViewModelAttributeChangeRequest", handler: async (request, next) => { if (request.attributeName === "PDS_UsrPricePerDay_m1l2sy9" || request.attributeName === "PDS_UsrPassengerCount_2y6t7oe") { const price = await request.$context.PDS_UsrPricePerDay_m1l2sy9; const passengers = await request.$context.PDS_UsrPassengerCount_2y6t7oe; request.$context.PDS_UsrTicketPrice_2u1knbw = (price > 0 && passengers > 0) ? (price / passengers) : 0; } return next?.handle(request); } }]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
"usr.YTValidator": { validator: function(config) { return async function(control) { let raw = control.value; 
if (raw === undefined) { raw = null; } if (raw === null) { return null; } if (raw === "") { return null; } 
const value = Number(raw); const setting = await new sdk.SysSettingsService().getByCode(config.settingCode); const minValue = Number(setting ? setting.value : NaN); 
if (Number.isFinite(value) === false) { return { "usr.YTValidator": { message: config.message } }; } 
if (Number.isFinite(minValue) === false) { return { "usr.YTValidator": { message: config.message } }; } 
if (value >= minValue) { return null; } return { "usr.YTValidator": { message: config.message } }; }; }, params: [{ name: "settingCode" }, { name: "message" }], async: true },
"usr.DGValidator": { validator: function(config) { return function(control) { let raw = control.value; 
if (raw === undefined) { raw = null; } if (raw === null) { return null; } if (raw === "") { return null; } 
const value = Number(raw); const minValue = Number(config.minValue); if (Number.isFinite(value) === false) { return { "usr.DGValidator": { message: config.message } }; } 
if (value >= minValue) { return null; } return { "usr.DGValidator": { message: config.message } }; }; }, params: [{ name: "minValue" }, { name: "message" }], async: false }
}/**SCHEMA_VALIDATORS*/
	};
});