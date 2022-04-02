using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.DataCore.Models
{
    public class FGetTierListByDim_Result
    {
        public string? DimensionName { get; set; }
        public byte? TierId { get; set; }
        public string? TierName { get; set; }

    }
}
