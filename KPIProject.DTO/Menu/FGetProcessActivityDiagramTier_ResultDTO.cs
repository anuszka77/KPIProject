using KPIProject.DataCore.Models;
using KPIProject.DTO.XmlType;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.DTO.Menu
{
    public class FGetProcessActivityDiagramTier_ResultDTO
    {
        public byte? TierId { get; set; }

        public List<ProcessDetails> ListProcessActivityXml { get; set; }

    }
}
