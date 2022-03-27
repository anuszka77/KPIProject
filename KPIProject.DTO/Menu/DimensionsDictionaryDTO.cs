using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.DTO.Menu
{
    public class DimensionsDictionaryDTO
    {
        public byte IdDimension { get; set; }
        public string DimensionName { get; set; } = null!;
        public string? DimensionDescription { get; set; }
        public byte OverDimensionsId { get; set; }
    }
}
