using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace AdlerQaTrainingApp
{

	[EntityEventListener(SchemaName = "UsrBusinessTripEntityListener")]
	public class UsrBusinessTripEntityListenerEventListener: BaseEntityEventListener
	{

		public override void OnSaved(object sender, EntityAfterEventArgs e) {
			base.OnSaved(sender, e);
			var entity = ((Entity)sender);
			var userConnection = entity.UserConnection;
		}

	}
}