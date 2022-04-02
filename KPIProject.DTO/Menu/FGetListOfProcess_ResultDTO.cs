using System;
using System.Collections.Generic;

namespace KPIProject.DataCore.Models
{
    public  class FGetListOfProcess_ResultDTO
    {
        public int IdProcess { get; set; }
        public string? ProcessVin { get; set; }
        public string? ProcessName { get; set; }
    }
}
