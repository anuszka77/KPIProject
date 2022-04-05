using System;
using System.Collections.Generic;

namespace KPIProject.DataCore.Models
{
    public  class FGetListOfColumToShowByRole_Result
    {
        public short IdDatabaseObiect { get; set; }
        public int IdColumnsToGrid { get; set; }
        public string? ColumnToGridName { get; set; }
        public string? ColumnToGridNamePl { get; set; }

    }
}
