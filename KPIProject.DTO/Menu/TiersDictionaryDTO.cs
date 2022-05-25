using System;
using System.Collections.Generic;

namespace KPIProject.DTO.Menu
{
    public partial class TiersDictionaryDTO
    {
        public byte IdTier { get; set; }
        public string TierName { get; set; } = null!;
        public string? TierDescription { get; set; }
        public byte DimensionId { get; set; }
    }
}
