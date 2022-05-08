using KPIProject.DataCore.Models;
using KPIProject.DTO.Dictionary;
using KPIProject.DTO.Menu;

namespace KPIProject.ServicesInterfaces
{
    public interface IDictionaryService
    {
        Task<IEnumerable<DimensionsDictionaryDTO>> GetDimensionsDictionary();
        Task<IEnumerable<FGetTierListByDim_ResultDTO>> GetTierDictionaryToDimension(short? dimensionId);
        Task<string> SaveLayers(List<LayersToAddDTO> layers, int systemId);
        //Proste słowniki_start
        Task<IEnumerable<FGetListOfNameSimpleDictionary_ResultDTO>> GetListOfNameSimpleDictionary();
        Task<IEnumerable<FGetListOfActivityHierarchyDictionary_ResultDTO>> GetListOfActivityHierarchyDictionary();
        Task<IEnumerable<FGetListOfBussinesValueAddedDictionary_ResultDTO>> GetListOfBussinesValueAddedDictionary();
        Task<IEnumerable<FGetListOfCriticalToDictionary_ResultDTO>> GetListOfCriticalToDictionary();
        Task<IEnumerable<FGetListOfDepartmentDictionary_ResultDTO>> GetListOfDepartmentDictionary();
        Task<IEnumerable<FGetListOfKpiDictionary_ResultDTO>> GetListOfKpiDictionary();
        Task<IEnumerable<FGetListOfSystemDictionary_ResultDTO>> GetListOfSystemDictionary();
        //Proste słowniki_end

        Task<string> AddElementToSystemDictionary(short idSystem,string systemName);
    }
}
