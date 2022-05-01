using KPIProject.DataCore.Models;
using KPIProject.DTO.Dictionary;
using KPIProject.DTO.Menu;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.ServicesInterfaces
{
    public interface IDictionaryService
    {
        Task<IEnumerable<DimensionsDictionaryDTO>> GetDimensionsDictionary();
        Task<IEnumerable<FGetTierListByDim_ResultDTO>> GetTierDictionaryToDimension(short? dimensionId);
        Task<string> SaveLayers(List<LayersToAddDTO> layers, int systemId);
        Task<IEnumerable<FGetListOfSystemDictionary_ResultDTO>> GetListOfSystemDictionary();
        Task<IEnumerable<FGetListOfKpiDictionary_ResultDTO>> GetListOfKpiDictionary();
        Task<IEnumerable<FGetListOfCriticalToDictionary_ResultDTO>> GetListOfCriticalToDictionary();
        Task<IEnumerable<FGetListOfNameSimpleDictionary_ResultDTO>> GetListOfNameSimpleDictionary();


    }
}
