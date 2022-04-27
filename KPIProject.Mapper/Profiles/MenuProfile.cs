using AutoMapper;
using KPIProject.DataCore.Models;
using KPIProject.DTO.Dictionary;
using KPIProject.DTO.Menu;
using KPIProject.DTO.XmlType;
using KPIProject.Utils;
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

            CreateMap<FGetProcessActivityDiagramTier_Result, FGetProcessActivityDiagramTier_ResultDTO>().ForMember(dest => dest.ListProcessActivityXml, opt => opt.MapFrom(src => src.ProcessActivityXml.DeSerializeFromXML<ProcessDetails>()));

            CreateMap<FGetListOfSystemDictionary_Result, FGetListOfSystemDictionary_ResultDTO>().ReverseMap();
            CreateMap<FGetListOfKpiDictionary_Result, FGetListOfKpiDictionary_ResultDTO>().ReverseMap();
            CreateMap<FGetListOfCriticalToDictionary_Result, FGetListOfCriticalToDictionary_ResultDTO>().ReverseMap();

        }

        #endregion Constructors
    }
}
