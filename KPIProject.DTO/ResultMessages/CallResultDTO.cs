using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.DTO.ResultMessages
{
    public class CallResultDTO
    {
        public short ReturnStatus { get; set; }

        public string? ReturnMessage { get; set; }

        public bool IsSuccess { get; set; }

    }
}
