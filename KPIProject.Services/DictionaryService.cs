﻿using AutoMapper;
using KPIProject.DataCore.Models;
using KPIProject.DataCore.ProcessBookContext;
using KPIProject.DTO.Dictionary;
using KPIProject.DTO.Menu;
using KPIProject.DTO.ResultMessages;
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

        //Proste słowniki_start
        public async Task<IEnumerable<FGetListOfNameSimpleDictionary_ResultDTO>> GetListOfNameSimpleDictionary()
        {
            return await mapper.ProjectTo<FGetListOfNameSimpleDictionary_ResultDTO>(context.FGetListOfNameSimpleDictionary()).ToListAsync();
        }
        public async Task<IEnumerable<FGetListOfActivityHierarchyDictionary_ResultDTO>> GetListOfActivityHierarchyDictionary()
        {
            return await mapper.ProjectTo<FGetListOfActivityHierarchyDictionary_ResultDTO>(context.FGetListOfActivityHierarchyDictionary()).ToListAsync();
        }
        public async Task<IEnumerable<FGetListOfBussinesValueAddedDictionary_ResultDTO>> GetListOfBussinesValueAddedDictionary()
        {
            return await mapper.ProjectTo<FGetListOfBussinesValueAddedDictionary_ResultDTO>(context.FGetListOfBussinesValueAddedDictionary()).ToListAsync();
        }
        public async Task<IEnumerable<FGetListOfCriticalToDictionary_ResultDTO>> GetListOfCriticalToDictionary()
        {
            return await mapper.ProjectTo<FGetListOfCriticalToDictionary_ResultDTO>(context.FGetListOfCriticalToDictionary()).ToListAsync();
        }
        public async Task<IEnumerable<FGetListOfDepartmentDictionary_ResultDTO>> GetListOfDepartmentDictionary()
        {
            return await mapper.ProjectTo<FGetListOfDepartmentDictionary_ResultDTO>(context.FGetListOfDepartmentDictionary()).ToListAsync();
        }
        public async Task<IEnumerable<FGetListOfKpiDictionary_ResultDTO>> GetListOfKpiDictionary()
        {
            return await mapper.ProjectTo<FGetListOfKpiDictionary_ResultDTO>(context.FGetListOfKpiDictionary()).ToListAsync();
        }
        public async Task<IEnumerable<FGetListOfSystemDictionary_ResultDTO>> GetListOfSystemDictionary()
        {
            return await mapper.ProjectTo<FGetListOfSystemDictionary_ResultDTO>(context.FGetListOfSystemDictionary()).ToListAsync();
        }
        //Proste słowniki_end

        public async Task<IEnumerable<FGetLayersBySysDimTier_ResultDTO>> GetLayersBySysDimTier(short systemId, byte dimensionId, byte tierId)
        {
            return await mapper.ProjectTo<FGetLayersBySysDimTier_ResultDTO>(context.FGetLayersBySysDimTier(systemId, dimensionId, tierId)).ToListAsync();
        }

        public async Task<CallResultDTO> SaveLayers(List<LayersToAddDTO> layers, int systemId)
        {
                List<SqlParameter> parms = new()
                {
                    new SqlParameter { ParameterName = "@Input", Value = layers.ToDataTable(), TypeName = "PbApp.IntKIntKVarcharK" },
                    new SqlParameter { ParameterName = "@SystemId", Value = systemId },
                    new SqlParameter("@ReturnMessage", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 512 },
                    new SqlParameter("@ReturnStatus", SqlDbType.SmallInt) { Direction = ParameterDirection.Output }
                };

                await context.Database.ExecuteSqlRawAsync("PbApp.AddLayers @Input, @SystemId, @ReturnMessage OUTPUT, @ReturnStatus OUTPUT", parms);
                string message = parms.FirstOrDefault(d => d.ParameterName == "@ReturnMessage").Value.ToString();
                short status =  (short)parms.FirstOrDefault(d => d.ParameterName == "@ReturnStatus").Value;


            return new CallResultDTO
            {
                ReturnStatus = status,
                ReturnMessage = message,
                IsSuccess = status == 1 ? true : false
            };
          
        }

        public async Task<CallResultDTO> AddElementToSystemDictionary( short idSystem,string systemName )
        {
            List<SqlParameter> parms = new()
            {
                new SqlParameter { ParameterName = "@IdSystem", Value = idSystem },
                new SqlParameter { ParameterName = "@SystemName", Value = systemName },
                new SqlParameter("@ReturnMessage", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 512 },
                new SqlParameter("@ReturnStatus", SqlDbType.SmallInt) { Direction = ParameterDirection.Output }
            };

            await context.Database.ExecuteSqlRawAsync("PbApp.AddElementToSystemDictionary @IdSystem,@SystemName, @ReturnMessage OUTPUT, @ReturnStatus OUTPUT", parms);
            string message = parms.FirstOrDefault(d => d.ParameterName == "@ReturnMessage").Value.ToString();
            short status = (short)parms.FirstOrDefault(d => d.ParameterName == "@ReturnStatus").Value;


            return new CallResultDTO
            {
                ReturnStatus = status,
                ReturnMessage = message,
                IsSuccess = status == 1 ? true : false
            };

        }


        public async Task<CallResultDTO> AddElementToDepartmentDictionary(short idDepartment, string departmentName)
        {
            List<SqlParameter> parms = new()
            {
                new SqlParameter { ParameterName = "@IdDepartment", Value = idDepartment },
                new SqlParameter { ParameterName = "@DepartmentName", Value = departmentName },
                new SqlParameter("@ReturnMessage", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 512 },
                new SqlParameter("@ReturnStatus", SqlDbType.SmallInt) { Direction = ParameterDirection.Output }
            };

            await context.Database.ExecuteSqlRawAsync("PbApp.AddElementToDepartmentDictionary @IdDepartment,@DepartmentName, @ReturnMessage OUTPUT, @ReturnStatus OUTPUT", parms);
            string message = parms.FirstOrDefault(d => d.ParameterName == "@ReturnMessage").Value.ToString();
            short status = (short)parms.FirstOrDefault(d => d.ParameterName == "@ReturnStatus").Value;


            return new CallResultDTO
            {
                ReturnStatus = status,
                ReturnMessage = message,
                IsSuccess = status == 1 ? true : false
            };

        }
     
        public async Task<CallResultDTO> AddElementToActivityHierarchyDictionary(byte idActivityHierarchy, string activityHierarchyName)
        {
            List<SqlParameter> parms = new()
            {
                new SqlParameter { ParameterName = "@IdActivityHierarchy", Value = idActivityHierarchy },
                new SqlParameter { ParameterName = "@ActivityHierarchy", Value = activityHierarchyName },
                new SqlParameter("@ReturnMessage", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 512 },
                new SqlParameter("@ReturnStatus", SqlDbType.SmallInt) { Direction = ParameterDirection.Output }
            };

            await context.Database.ExecuteSqlRawAsync("PbApp.AddElementToActivityHierarchyDictionary @IdActivityHierarchy,@ActivityHierarchy, @ReturnMessage OUTPUT, @ReturnStatus OUTPUT", parms);
            string message = parms.FirstOrDefault(d => d.ParameterName == "@ReturnMessage").Value.ToString();
            short status = (short)parms.FirstOrDefault(d => d.ParameterName == "@ReturnStatus").Value;


            return new CallResultDTO
            {
                ReturnStatus = status,
                ReturnMessage = message,
                IsSuccess = status == 1 ? true : false
            };

        }

        public async Task<CallResultDTO> AddElementToBussinesValueAddedDictionary(byte idBussinesValueAdded, string bussinesValueAddedName)
        {
            List<SqlParameter> parms = new()
            {
                new SqlParameter { ParameterName = "@IdBussinesValueAdded", Value = idBussinesValueAdded },
                new SqlParameter { ParameterName = "@BussinesValueAddedName", Value = bussinesValueAddedName },
                new SqlParameter("@ReturnMessage", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 512 },
                new SqlParameter("@ReturnStatus", SqlDbType.SmallInt) { Direction = ParameterDirection.Output }
            };

            await context.Database.ExecuteSqlRawAsync("PbApp.AddElementToBussinesValueAddedDictionary @IdBussinesValueAdded,@BussinesValueAddedName, @ReturnMessage OUTPUT, @ReturnStatus OUTPUT", parms);
            string message = parms.FirstOrDefault(d => d.ParameterName == "@ReturnMessage").Value.ToString();
            short status = (short)parms.FirstOrDefault(d => d.ParameterName == "@ReturnStatus").Value;

            return new CallResultDTO
            {
                ReturnStatus = status,
                ReturnMessage = message,
                IsSuccess = status == 1 ? true : false
            };
        }

        public async Task<CallResultDTO> AddElementToCriticalToDictionary(byte idCriticalTo, string criticalToName)
        {
            List<SqlParameter> parms = new()
            {
                new SqlParameter { ParameterName = "@IdCriticalTo", Value = idCriticalTo },
                new SqlParameter { ParameterName = "@CriticalToName", Value = criticalToName },
                new SqlParameter("@ReturnMessage", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 512 },
                new SqlParameter("@ReturnStatus", SqlDbType.SmallInt) { Direction = ParameterDirection.Output }
            };

            await context.Database.ExecuteSqlRawAsync("PbApp.AddElementToCriticalToDictionary @IdCriticalTo,@CriticalToName, @ReturnMessage OUTPUT, @ReturnStatus OUTPUT", parms);
            string message = parms.FirstOrDefault(d => d.ParameterName == "@ReturnMessage").Value.ToString();
            short status = (short)parms.FirstOrDefault(d => d.ParameterName == "@ReturnStatus").Value;
           
            return new CallResultDTO
            {
                ReturnStatus = status,
                ReturnMessage = message,
                IsSuccess = status == 1 ? true : false
            };

        }

        public async Task<CallResultDTO> AddElementToKpiDictionary(byte idKpi, string kpi)
        {
            List<SqlParameter> parms = new()
            {
                new SqlParameter { ParameterName = "@IdKpi", Value = idKpi },
                new SqlParameter { ParameterName = "@Kpi", Value = kpi },
                new SqlParameter("@ReturnMessage", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 512 },
                new SqlParameter("@ReturnStatus", SqlDbType.SmallInt) { Direction = ParameterDirection.Output }
            };

            await context.Database.ExecuteSqlRawAsync("PbApp.AddElementToKpiDictionary @IdKpi,@Kpi, @ReturnMessage OUTPUT, @ReturnStatus OUTPUT", parms);
            string message = parms.FirstOrDefault(d => d.ParameterName == "@ReturnMessage").Value.ToString();
            short status = (short)parms.FirstOrDefault(d => d.ParameterName == "@ReturnStatus").Value;

            return new CallResultDTO
            {
                ReturnStatus = status,
                ReturnMessage = message,
                IsSuccess = status == 1 ? true : false
            };
        }

        public async Task<CallResultDTO> ModifySpecificDictionary(byte idNameSimpleDictionary, int idOfDictionary, string newNameOfDictionary)
        {
            List<SqlParameter> parms = new()
            {
                new SqlParameter { ParameterName = "@IdNameSimpleDictionary", Value = idNameSimpleDictionary },
                new SqlParameter { ParameterName = "@IdOfDictionary", Value = idOfDictionary },
                new SqlParameter { ParameterName = "@NewNameOfDictionary", Value = newNameOfDictionary },
                new SqlParameter("@ReturnMessage", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 512 },
                new SqlParameter("@ReturnStatus", SqlDbType.SmallInt) { Direction = ParameterDirection.Output }
            };

            await context.Database.ExecuteSqlRawAsync("PbApp.ModifySpecificDictionary @IdNameSimpleDictionary,@IdOfDictionary,@NewNameOfDictionary, @ReturnMessage OUTPUT, @ReturnStatus OUTPUT", parms);
            string message = parms.FirstOrDefault(d => d.ParameterName == "@ReturnMessage").Value.ToString();
            short status = (short)parms.FirstOrDefault(d => d.ParameterName == "@ReturnStatus").Value;

            return new CallResultDTO
            {
                ReturnStatus = status,
                ReturnMessage = message,
                IsSuccess = status == 1 ? true : false
            };
        }

        public async Task<CallResultDTO> DeleteSpecificDictionary(byte idNameSimpleDictionary, string idOfDictionary)
        {
            List<SqlParameter> parms = new()
            {
                new SqlParameter { ParameterName = "@IdNameSimpleDictionary", Value = idNameSimpleDictionary },
                new SqlParameter { ParameterName = "@IdOfDictionary", Value = idOfDictionary },
                new SqlParameter("@ReturnMessage", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 512 },
                new SqlParameter("@ReturnStatus", SqlDbType.SmallInt) { Direction = ParameterDirection.Output }
            };

            await context.Database.ExecuteSqlRawAsync("PbApp.DeleteSpecificDictionary @IdNameSimpleDictionary,@IdOfDictionary,@ReturnMessage OUTPUT, @ReturnStatus OUTPUT", parms);
            string message = parms.FirstOrDefault(d => d.ParameterName == "@ReturnMessage").Value.ToString();
            short status = (short)parms.FirstOrDefault(d => d.ParameterName == "@ReturnStatus").Value;

            return new CallResultDTO
            {
                ReturnStatus = status,
                ReturnMessage = message,
                IsSuccess = status == 1 ? true : false
            };
        }

        public async Task<CallResultDTO> DeleteSpecificLayer(short systemId, byte dimensionId, byte tierId, string layerId)
        {
            List<SqlParameter> parms = new()
            {
                new SqlParameter { ParameterName = "@SystemId", Value = systemId },
                new SqlParameter { ParameterName = "@DimensionId", Value = dimensionId },
                new SqlParameter { ParameterName = "@TierId", Value = tierId },
                new SqlParameter { ParameterName = "@LayerId", Value = layerId },
                new SqlParameter("@ReturnMessage", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 512 },
                new SqlParameter("@ReturnStatus", SqlDbType.SmallInt) { Direction = ParameterDirection.Output }
            };

            await context.Database.ExecuteSqlRawAsync("PbApp.LayerDelete @SystemId,@DimensionId,@TierId,@LayerId,@ReturnMessage OUTPUT, @ReturnStatus OUTPUT", parms);
            string message = parms.FirstOrDefault(d => d.ParameterName == "@ReturnMessage").Value.ToString();
            short status = (short)parms.FirstOrDefault(d => d.ParameterName == "@ReturnStatus").Value;
            
            return new CallResultDTO
            {
                ReturnStatus = status,
                ReturnMessage = message,
                IsSuccess = status == 1 ? true : false
            };
        }

        public async Task<CallResultDTO> LayerModify(short systemId, byte dimensionId, byte tierId, int layerId, string layerName)
        {
            List<SqlParameter> parms = new()
            {
                new SqlParameter { ParameterName = "@SystemId", Value = systemId },
                new SqlParameter { ParameterName = "@DimensionId", Value = dimensionId },
                new SqlParameter { ParameterName = "@TierId", Value = tierId },
                new SqlParameter { ParameterName = "@LayerId", Value = layerId },
                new SqlParameter { ParameterName = "@LayerName", Value = layerName },
                new SqlParameter("@ReturnMessage", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 512 },
                new SqlParameter("@ReturnStatus", SqlDbType.SmallInt) { Direction = ParameterDirection.Output }
            };

            await context.Database.ExecuteSqlRawAsync("PbApp.LayerModify @SystemId,@DimensionId,@TierId,@LayerId,@LayerName, @ReturnMessage OUTPUT, @ReturnStatus OUTPUT", parms);
            string message = parms.FirstOrDefault(d => d.ParameterName == "@ReturnMessage").Value.ToString();
            short status = (short)parms.FirstOrDefault(d => d.ParameterName == "@ReturnStatus").Value;
            
            return new CallResultDTO
            {
                ReturnStatus = status,
                ReturnMessage = message,
                IsSuccess = status == 1 ? true : false
            };
        }

    }
}
