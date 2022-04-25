using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace KPIProject.DTO.XmlType
{

    public class ProcessDetails
    {
        public int ProcessId { get; set; }

        public byte TierIdToDiagram { get; set; }

        public byte ActivityTierId { get; set; }

        public int StepId { get; set; }

        public string ActionStepName { get; set; }

    }
}
