#pragma warning disable CS8618, // Non-nullable field is uninitialized.

using ATF.Repository;
using ATF.Repository.Attributes;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.ComponentModel.DataAnnotations;

namespace AdlerQaTrainingApp.Models {
	[ExcludeFromCodeCoverage]
	[Schema("City")]
	public class City: BaseModel {

		#region Schema Columns

		[SchemaProperty("CreatedOn")]
		public DateTime CreatedOn { get; set; }

		[SchemaProperty("CreatedBy")]
		public Guid CreatedById { get; set; }

		[LookupProperty("CreatedBy")]
		public virtual Contact CreatedBy { get; set; }

		[SchemaProperty("ModifiedOn")]
		public DateTime ModifiedOn { get; set; }

		[SchemaProperty("ModifiedBy")]
		public Guid ModifiedById { get; set; }

		[LookupProperty("ModifiedBy")]
		public virtual Contact ModifiedBy { get; set; }

		[Required(ErrorMessage = "The {0} field is required.")]
		[MinLength(1, ErrorMessage = "The {0} field must be a minimum of {1} character long.")]
		[MaxLength(250, ErrorMessage = "The {0} field must be a maximum of {1} character long.")]
		[SchemaProperty("Name")]
		public string Name { get; set; }

		[MaxLength(250, ErrorMessage = "The {0} field must be a maximum of {1} character long.")]
		[SchemaProperty("Description")]
		public string Description { get; set; }

		[SchemaProperty("Country")]
		public Guid CountryId { get; set; }

		[LookupProperty("Country")]
		public virtual Country Country { get; set; }

		[SchemaProperty("Region")]
		public Guid RegionId { get; set; }

		[LookupProperty("Region")]
		public virtual Region Region { get; set; }

		[SchemaProperty("TimeZone")]
		public Guid TimeZoneId { get; set; }

		[LookupProperty("TimeZone")]
		public virtual TimeZone TimeZone { get; set; }

		[SchemaProperty("ProcessListeners")]
		public int ProcessListeners { get; set; }

		#endregion

		#region Details

		/// <summary>
		/// Collection of AccountAddress by column CityId
		/// <remarks>
		/// <see cref="global::AdlerQaTrainingApp.Models.AccountAddress">See more about the AccountAddress model</see>
		/// </remarks>
		/// </summary>
		[DetailProperty(nameof(global::AdlerQaTrainingApp.Models.AccountAddress.CityId))]
		public virtual List<AccountAddress> CollectionOfAccountAddressByCity { get; set; }

		/// <summary>
		/// Collection of Account by column CityId
		/// <remarks>
		/// <see cref="global::AdlerQaTrainingApp.Models.Account">See more about the Account model</see>
		/// </remarks>
		/// </summary>
		[DetailProperty(nameof(global::AdlerQaTrainingApp.Models.Account.CityId))]
		public virtual List<Account> CollectionOfAccountByCity { get; set; }

		/// <summary>
		/// Collection of BaseAddress by column CityId
		/// <remarks>
		/// <see cref="global::AdlerQaTrainingApp.Models.BaseAddress">See more about the BaseAddress model</see>
		/// </remarks>
		/// </summary>
		[DetailProperty(nameof(global::AdlerQaTrainingApp.Models.BaseAddress.CityId))]
		public virtual List<BaseAddress> CollectionOfBaseAddressByCity { get; set; }

		/// <summary>
		/// Collection of ContactAddress by column CityId
		/// <remarks>
		/// <see cref="global::AdlerQaTrainingApp.Models.ContactAddress">See more about the ContactAddress model</see>
		/// </remarks>
		/// </summary>
		[DetailProperty(nameof(global::AdlerQaTrainingApp.Models.ContactAddress.CityId))]
		public virtual List<ContactAddress> CollectionOfContactAddressByCity { get; set; }

		/// <summary>
		/// Collection of Contact by column CityId
		/// <remarks>
		/// <see cref="global::AdlerQaTrainingApp.Models.Contact">See more about the Contact model</see>
		/// </remarks>
		/// </summary>
		[DetailProperty(nameof(global::AdlerQaTrainingApp.Models.Contact.CityId))]
		public virtual List<Contact> CollectionOfContactByCity { get; set; }

		/// <summary>
		/// Collection of SysModuleFolder by column ParentId
		/// <remarks>
		/// <see cref="global::AdlerQaTrainingApp.Models.SysModuleFolder">See more about the SysModuleFolder model</see>
		/// </remarks>
		/// </summary>
		[DetailProperty(nameof(global::AdlerQaTrainingApp.Models.SysModuleFolder.ParentId))]
		public virtual List<SysModuleFolder> CollectionOfSysModuleFolderByParent { get; set; }

		#endregion
	}
}
#pragma warning restore CS8618 // Non-nullable field is uninitialized.
