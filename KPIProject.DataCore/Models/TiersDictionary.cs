using System;
using System.Collections.Generic;

namespace KPIProject.DataCore.Models
{
    public partial class TiersDictionary
    {
        public byte IdTier { get; set; }
        public string TierName { get; set; } = null!;
        public string? TierDescription { get; set; }
        public byte DimensionId { get; set; }
    }
}
