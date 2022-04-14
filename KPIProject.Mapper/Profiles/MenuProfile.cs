using AutoMapper;
using KPIProject.DataCore.Models;
using KPIProject.DTO.Dictionary;
using KPIProject.DTO.Menu;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.Mapper.Profiles
{
    public class MenuProfile: Profile
    {
        #region Constructors

        public MenuProfile()
        {
            CreateMap<DimensionsDictionary, DimensionsDictionaryDTO > ().ReverseMap();
            
            CreateMap<FGetListOfProcess_Result, FGetListOfProcess_ResultDTO>().ReverseMap();
            CreateMap<FGetListOfColumToShowByRole_Result, FGetListOfColumToShowByRole_ResultDTO>().ReverseMap();
            CreateMap<FGetListOfProcessActivity_Result, FGetListOfProcessActivity_ResultDTO>().ReverseMap();

            CreateMap<FGetListOfProcessLayers_Result, FGetListOfProcessLayers_ResultDTO>().ReverseMap();


            CreateMap<FGetTierListByDim_Result, FGetTierListByDim_ResultDTO>().ReverseMap();


        }

        #endregion Constructors
    }
}
