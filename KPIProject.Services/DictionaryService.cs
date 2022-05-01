using AutoMapper;
using KPIProject.DataCore.Models;
using KPIProject.DataCore.ProcessBookContext;
using KPIProject.DTO.Dictionary;
using KPIProject.DTO.Menu;
using KPIProject.Services.Helpers;
using KPIProject.ServicesInterfaces;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
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


        public async Task<IEnumerable<FGetListOfSystemDictionary_ResultDTO>> GetListOfSystemDictionary()
        {
            return await mapper.ProjectTo<FGetListOfSystemDictionary_ResultDTO>(context.FGetListOfSystemDictionary()).ToListAsync();
        }

        public async Task<IEnumerable<FGetListOfKpiDictionary_ResultDTO>> GetListOfKpiDictionary()
        {
            return await mapper.ProjectTo<FGetListOfKpiDictionary_ResultDTO>(context.FGetListOfKpiDictionary()).ToListAsync();
        }

        public async Task<IEnumerable<FGetListOfCriticalToDictionary_ResultDTO>> GetListOfCriticalToDictionary()
        {
            return await mapper.ProjectTo<FGetListOfCriticalToDictionary_ResultDTO>(context.FGetListOfCriticalToDictionary()).ToListAsync();
        }


        public async Task<IEnumerable<FGetListOfNameSimpleDictionary_ResultDTO>> GetListOfNameSimpleDictionary()
        {
            return await mapper.ProjectTo<FGetListOfNameSimpleDictionary_ResultDTO>(context.FGetListOfNameSimpleDictionary()).ToListAsync();
        }
        

        public async Task<string> SaveLayers(List<LayersToAddDTO> layers, int systemId)
        {
            List<SqlParameter> parms = new()
            {
                new SqlParameter { ParameterName = "@Input", Value = layers.ToDataTable(), TypeName = "PbApp.IntKIntKVarcharK" },
                new SqlParameter { ParameterName = "@SystemId", Value = systemId },
                new SqlParameter("@ReturnMessage", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 512},
                new SqlParameter("@ReturnStatus", SqlDbType.SmallInt) { Direction = ParameterDirection.Output}
            };

            await context.Database.ExecuteSqlRawAsync("PbApp.AddLayers @Input, @SystemId, @ReturnMessage OUTPUT, @ReturnStatus OUTPUT", parms);
            var message = parms.FirstOrDefault(d => d.ParameterName == "@ReturnMessage").Value;
            return message.ToString();

        }

    }
}
