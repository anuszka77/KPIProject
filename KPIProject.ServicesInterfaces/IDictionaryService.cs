using KPIProject.DataCore.Models;
using KPIProject.DTO.Dictionary;
using KPIProject.DTO.Menu;
using KPIProject.DTO.ResultMessages;

namespace KPIProject.ServicesInterfaces
{
    public interface IDictionaryService
    {
        Task<IEnumerable<DimensionsDictionaryDTO>> GetDimensionsDictionary();
        Task<IEnumerable<FGetTierListByDim_ResultDTO>> GetTierDictionaryToDimension(short? dimensionId);
        Task<CallResultDTO> SaveLayers(List<LayersToAddDTO> layers, int systemId);
        //Proste słowniki_start
        Task<IEnumerable<FGetListOfNameSimpleDictionary_ResultDTO>> GetListOfNameSimpleDictionary();
        Task<IEnumerable<FGetListOfActivityHierarchyDictionary_ResultDTO>> GetListOfActivityHierarchyDictionary();
        Task<IEnumerable<FGetListOfBussinesValueAddedDictionary_ResultDTO>> GetListOfBussinesValueAddedDictionary();
        Task<IEnumerable<FGetListOfCriticalToDictionary_ResultDTO>> GetListOfCriticalToDictionary();
        Task<IEnumerable<FGetListOfDepartmentDictionary_ResultDTO>> GetListOfDepartmentDictionary();
        Task<IEnumerable<FGetListOfKpiDictionary_ResultDTO>> GetListOfKpiDictionary();
        Task<IEnumerable<FGetListOfSystemDictionary_ResultDTO>> GetListOfSystemDictionary();
        //Proste słowniki_end

        Task<IEnumerable<FGetLayersBySysDimTier_ResultDTO>> GetLayersBySysDimTier(short systemId, byte dimensionId, byte tierId);

        Task<CallResultDTO> AddElementToSystemDictionary(short idSystem,string systemName);
        Task<CallResultDTO> AddElementToDepartmentDictionary(short idDepartment, string departmentName);
        Task<CallResultDTO> AddElementToActivityHierarchyDictionary(byte idActivityHierarchy, string activityHierarchyName);
        Task<CallResultDTO> AddElementToBussinesValueAddedDictionary(byte idBussinesValueAdded, string bussinesValueAddedName);
        Task<CallResultDTO> AddElementToCriticalToDictionary(byte idCriticalTo, string criticalToName);
        Task<CallResultDTO> AddElementToKpiDictionary(byte idKpi, string kpi);
        Task<CallResultDTO> ModifySpecificDictionary(byte idNameSimpleDictionary, int idOfDictionary, string newNameOfDictionary);
        Task<CallResultDTO> DeleteSpecificDictionary(byte idNameSimpleDictionary, string idOfDictionary);

        Task<CallResultDTO> DeleteSpecificLayer(short systemId, byte dimensionId, byte tierId, string layerId);
        Task<CallResultDTO> LayerModify(short systemId, byte dimensionId, byte tierId, int layerId, string layerName);
    }
}
