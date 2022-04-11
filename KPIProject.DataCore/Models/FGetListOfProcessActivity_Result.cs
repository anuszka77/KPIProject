using System;
using System.Collections.Generic;

namespace KPIProject.DataCore.Models
{
    public  class FGetListOfProcessActivity_Result
    {
		public int? ProcessId { get; set; }
		public string? ActivityVin { get; set; }
		public byte? ActivityTierId { get; set; }
		public string? ActivityTierName { get; set; }
		public short? ActivityLayerId { get; set; }
		public string? ActivityLayerName { get; set; }
		public int? StepId { get; set; }
		public string? ActionStepName { get; set; }
		public byte? ActivityHierarchId { get; set; }
		public string? ActivityHierarchyName { get; set; }
		public short? DepartmentId { get; set; }
		public string? DepartmentName { get; set; }
		public byte? KpiId { get; set; }
		public string? KpiName { get; set; }
		public byte? BussinesValueAddedId { get; set; }
		public string? BussinesValueAddedName { get; set; }
		public short? LeadTime { get; set; }
		public short? LeadTimeWeight { get; set; }


	}
}
