using System;

namespace AdlerQaTrainingApp
{

	/// <summary>
	/// Calculates the per diem allowance for a business trip based on the number of days spent at the destination.
	/// </summary>
	public static class UsrBusinessTripAllowance
	{

		public const decimal PerDiemRate = 200m;

		public static decimal CalculatePerDiemAllowance(DateTime arrival, DateTime departure) {
			int days = (departure.Date - arrival.Date).Days;
			return days * PerDiemRate;
		}

	}
}
