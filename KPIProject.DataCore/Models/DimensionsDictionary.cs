using System;
using System.Collections.Generic;

namespace KPIProject.DataCore.Models
{
    public  class DimensionsDictionary
    {
        public byte IdDimension { get; set; }
        public string DimensionName { get; set; } = null!;
        public string? DimensionDescription { get; set; }
        public byte OverDimensionsId { get; set; }
    }
}
