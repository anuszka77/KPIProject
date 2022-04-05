using AutoMapper;
using KPIProject.DataCore.ProcessBookContext;
using KPIProject.DTO.Menu;
using KPIProject.ServicesInterfaces;
using Microsoft.EntityFrameworkCore;

namespace KPIProject.Services
{
    public class ProcessBookService: IProcessBookService
    {
        private readonly ProcessBookContext context;
        //private readonly  stockingUpOrderLimitRepository;
        private readonly IMapper mapper;


        public ProcessBookService(ProcessBookContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;

        }

        public async Task<IEnumerable<FGetListOfColumToShowByRole_ResultDTO>> GetListOfColumnToShowByRole(short idDatabaseObject, byte roleId)
        {
            return await mapper.ProjectTo<FGetListOfColumToShowByRole_ResultDTO>(context.FGetListOfColumToShowByRole(idDatabaseObject, roleId)).ToListAsync();
        }
    }
}