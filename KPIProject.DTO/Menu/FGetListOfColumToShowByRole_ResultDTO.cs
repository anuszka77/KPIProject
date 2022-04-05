using System;
using System.Collections.Generic;

namespace KPIProject.DTO.Menu
{
    public  class FGetListOfColumToShowByRole_ResultDTO
    {
        public short IdDatabaseObiect { get; set; }
        public int IdColumnsToGrid { get; set; }
        public string? ColumnToGridName { get; set; }
        public string? ColumnToGridNamePl { get; set; }

    }
}
