using System;
using Terrasoft.Core;
using Terrasoft.Core.Configuration;

namespace AdlerQaTrainingApp
{
    /// <summary>
    /// Calculates the per diem allowance for a business trip based on the number of days spent at the destination.
    /// The rate is read from the UsrBusinessTripPerDiemRate system setting delivered with this package.
    /// </summary>
    public static class UsrBusinessTripAllowance
    {
        /// <summary>Code of the system setting that holds the per diem rate.</summary>
        public const string PerDiemRateSettingCode = "UsrBusinessTripPerDiemRate";

        /// <summary>Fallback rate used when the system setting is absent or empty.</summary>
        public const decimal DefaultPerDiemRate = 200m;

        /// <summary>Reads the per diem rate from the system setting, falling back to the default.</summary>
        public static decimal GetPerDiemRate(UserConnection userConnection) {
            if (userConnection == null) {
                return DefaultPerDiemRate;
            }
            return SysSettings.GetValue(userConnection, PerDiemRateSettingCode, DefaultPerDiemRate);
        }

        /// <summary>Calculates the allowance using the rate from the system setting.</summary>
        public static decimal CalculatePerDiemAllowance(UserConnection userConnection, DateTime arrival, DateTime departure) {
            return CalculatePerDiemAllowance(arrival, departure, GetPerDiemRate(userConnection));
        }

        /// <summary>Calculates the allowance using an explicit rate.</summary>
        public static decimal CalculatePerDiemAllowance(DateTime arrival, DateTime departure, decimal perDiemRate) {
            int days = (departure.Date - arrival.Date).Days;
            return days * perDiemRate;
        }
    }
}
