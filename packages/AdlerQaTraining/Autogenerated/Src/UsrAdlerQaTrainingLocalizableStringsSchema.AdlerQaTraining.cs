namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrAdlerQaTrainingLocalizableStringsSchema

	/// <exclude/>
	public class UsrAdlerQaTrainingLocalizableStringsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrAdlerQaTrainingLocalizableStringsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrAdlerQaTrainingLocalizableStringsSchema(UsrAdlerQaTrainingLocalizableStringsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("88f6383d-f471-4d31-80c3-5a455947ec27");
			Name = "UsrAdlerQaTrainingLocalizableStrings";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c396b9c5-6b9f-4b21-ab29-f3a420bbd525");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,93,144,109,74,196,64,12,134,127,111,161,119,120,47,224,246,0,138,176,255,5,149,213,3,164,179,97,103,112,62,74,50,211,210,93,188,187,113,177,40,66,32,228,235,73,222,52,13,249,140,227,170,149,211,125,223,245,93,166,196,58,145,99,28,78,145,229,149,222,132,66,182,166,195,52,245,221,245,187,101,55,12,3,30,180,165,68,178,62,254,196,207,75,86,216,220,7,157,249,46,242,204,17,163,69,156,79,136,197,81,12,23,26,35,99,166,216,88,81,61,85,120,154,25,185,32,21,49,79,181,9,69,168,243,156,8,101,201,44,123,188,24,13,100,140,82,61,203,86,20,214,210,196,25,71,43,173,88,66,245,70,228,173,124,131,139,109,102,81,20,129,43,217,142,189,109,229,180,223,238,31,254,8,152,218,24,131,131,139,164,138,119,149,127,210,159,126,5,28,171,88,66,109,198,94,177,251,236,59,179,47,193,201,38,211,68,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("88f6383d-f471-4d31-80c3-5a455947ec27"));
		}

		#endregion

	}

	#endregion

}

