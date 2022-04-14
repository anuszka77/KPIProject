using System;
using System.Collections.Generic;

namespace KPIProject.DTO.Menu
{
    public  class FGetListOfProcessLayers_ResultDTO
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
