using System;
using System.Collections.Generic;

namespace KPIProject.DataCore.Models
{
    public  class FGetListOfProcess_Result
    {
        public int IdProcess { get; set; }
        public string? ProcessName { get; set; }
        public string? ProcessVin { get; set; }
        public byte? MainTierId { get; set; }
        public string? MainTierName { get; set; }
        public byte? AreaTierId { get; set; }
        public string? AreaTierName{ get; set; }
		public int? AreaLayerId { get; set; }
		public string? AreaLayerName { get; set; }
		public byte? SubAreaTierId { get; set; }
		public string? SubAreaTierName { get; set; }
		public int? SubAreaLayerId { get; set; }
		public string? SubAreaLayerName { get; set; }
		public byte? CategoryTierId { get; set; }
		public string? CategoryTierName { get; set; }
		public int? CategoryLayerId { get; set; }
		public string? CategoryLayerName { get; set; }
		public byte? SubjectTierId { get; set; }
		public string? SubjectTierName { get; set; }
		public int? SubjectLayerId { get; set; }
		public string? SubjectLayerName { get; set; }
		public byte? ObjectTierId { get; set; }
		public string? ObjectTierName { get; set; }
		public int? ObjectLayerId { get; set; }
		public string? ObjectLayerName { get; set; }
		public byte? AttributeTierId { get; set; }
		public string? AttributeTierName { get; set; }
		public int? AttributeLayerId { get; set; }
		public string? AttributeLayerName { get; set; }
		public int? NextProcessId { get; set; }
		public short? BussinesValueAddedId { get; set; }
		public string? BussinessValueAddedName { get; set; }
		public byte? CriticalToId { get; set; }
		public string? CriticalToName { get; set; }
		public int? Wtd { get; set; }

	}
}
