using KPIProject.DataCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.RepositoriesInterfaces
{
    public interface IProcessBookRepository
    {
        Task<IEnumerable<FGetListOfProcess_ResultDTO>> GetAll();
    }
}
