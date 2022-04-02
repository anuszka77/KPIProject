using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.DTO.Dictionary
{
    public class FGetTierListByDim_ResultDTO
    {
        public string? DimensionName { get; set; }
        public byte? TierId { get; set; }
        public string? TierName { get; set; }
    }
}
