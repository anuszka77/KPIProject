using AutoMapper;
using KPIProject.DataCore.Models;
using KPIProject.DataCore.ProcessBookContext;
using KPIProject.DTO.Dictionary;
using KPIProject.DTO.Menu;
using KPIProject.ServicesInterfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.Services
{
    public class DictionaryService: IDictionaryService
    {
        private readonly ProcessBookContext context;
        private readonly  IMapper mapper;


        public DictionaryService(ProcessBookContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;

        }
        public async Task<IEnumerable<DimensionsDictionaryDTO>> GetDimensionsDictionary()
        {
            return await mapper.ProjectTo<DimensionsDictionaryDTO>(context.DimensionsDictionary).ToListAsync();
        }

        public async Task<IEnumerable<FGetTierListByDim_ResultDTO>> GetTierDictionaryToDimension(short? dimensionId)
        {
            return await mapper.ProjectTo<FGetTierListByDim_ResultDTO>(context.FGetTierListByDim(dimensionId)).ToListAsync();
        }


        //return await mapper.ProjectTo<FGetListOfProcess_ResultDTO>(context.FGetListOfProcess()).ToListAsync();

    }
}
