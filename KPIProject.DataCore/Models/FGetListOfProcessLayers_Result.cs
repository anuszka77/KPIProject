using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.DataCore.Models
{
    public class FGetListOfProcessLayers_Result
    {
        public byte? DimensionId { get; set; }
        public string? DimensionName { get; set; }
        public byte? TierId { get; set; }
        public string? TierName { get; set; }
        public int? LayerId { get; set; }
        public string? LayerName { get; set; }
        public string? PartOfVin { get; set; }
        public short? PositionInVinNumber { get; set; }
    }
}
