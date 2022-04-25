using KPIProject.Utils;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.DataCore.Models
{
    public class FGetProcessActivityDiagramTier_Result
    {
        public byte? TierId { get; set; }
        [Column(TypeName = "xml")]
        public string? ProcessActivityXml { get; set; }
       
    }
}
