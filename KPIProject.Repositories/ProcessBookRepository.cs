using AutoMapper;
using KPIProject.DataCore.ProcessBookContext;
using KPIProject.DataCore.Models;
using KPIProject.RepositoriesInterfaces;
using Microsoft.EntityFrameworkCore;


namespace KPIProject.Repositories
{
    public class ProcessBookRepository : ReadOnlyRepositoryBase<FGetListOfProcess_Result, FGetListOfProcess_ResultDTO>, IProcessBookRepository
    {
        public ProcessBookRepository(ProcessBookContext context, IMapper mapper) : base(context, mapper)
        {

        }

        public async Task<IEnumerable<FGetListOfProcess_ResultDTO>> GetAll()
        {
            return await mapper.ProjectTo<FGetListOfProcess_ResultDTO>(context.FGetListOfProcess()).ToListAsync();
        }
    }
}



