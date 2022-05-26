using AutoMapper;
using KPIProject.DataCore.ProcessBookContext;
using KPIProject.DTO.Dictionary;
using KPIProject.DTO.Menu;
using KPIProject.RepositoriesInterfaces;
using KPIProject.ServicesInterfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KPIProject.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DictionaryController: Controller
    {
        private readonly ProcessBookContext context;
        private readonly IDictionaryService dictService;

        public DictionaryController(ProcessBookContext context, IDictionaryService dictService)
        {
            this.context = context;
            this.dictService = dictService;
        }

       
        [HttpGet]
        [Route("GetDictDimensions")]
        public async Task<IActionResult> FGetListOfProcess()=> Ok(await dictService.GetDimensionsDictionary());

        [HttpGet]
        [Route("GetTierDictionaryToDimension/{idDimension:int}")]
        public async Task<IActionResult> FGetTierListByDim(short? idDimension) => Ok(await dictService.GetTierDictionaryToDimension(idDimension));


        //Proste słowniki_start
        [HttpGet]
        [Route("GetDictListOfNameSimpleDictionary")]
        public async Task<IActionResult> FGetListOfNameSimpleDictionary() => Ok(await dictService.GetListOfNameSimpleDictionary());

        [HttpGet]
        [Route("GetDictActivityHierarchy")]
        public async Task<IActionResult> FGetListOfActivityHierarchyDictionary() => Ok(await dictService.GetListOfActivityHierarchyDictionary());

        [HttpGet]
        [Route("GetDictBussinesValueAdded")]
        public async Task<IActionResult> FGetListOfBussinesValueAddedDictionary() => Ok(await dictService.GetListOfBussinesValueAddedDictionary());
      
        [HttpGet]
        [Route("GetDictCriticalTo")]
        public async Task<IActionResult> FGetListOfCriticalToDictionary() => Ok(await dictService.GetListOfCriticalToDictionary());

        [HttpGet]
        [Route("GetDictDepartment")]
        public async Task<IActionResult> FGetListOfDepartmentDictionary() => Ok(await dictService.GetListOfDepartmentDictionary());

        [HttpGet]
        [Route("GetDictKpi")]
        public async Task<IActionResult> FGetListOfKpiDictionary() => Ok(await dictService.GetListOfKpiDictionary());

        [HttpGet]
        [Route("GetDictSystem")]
        public async Task<IActionResult> FGetListOfSystemDictionary() => Ok(await dictService.GetListOfSystemDictionary());

        //Proste słowniki_end

        [HttpGet]
        [Route("GetLayersBySysDimTier/{systemId:int}/{dimensionId:int}/{tierId:int}")]
        public async Task<IActionResult> FGetLayersBySysDimTier(short systemId, byte dimensionId, byte tierId) => Ok(await dictService.GetLayersBySysDimTier(systemId, dimensionId, tierId));






        [HttpPost]
        [Route("SaveLayers/{systemId:int}")]
        public async Task<IActionResult> SaveLayers([FromBody] List<LayersToAddDTO> layers, int systemId) => Ok(await dictService.SaveLayers(layers, systemId));

        [HttpPost]
        [Route("AddElementToSystemDictionary/{idSystem:int}/{systemName}")]
        public async Task<IActionResult> AddElementToSystemDictionary(short idSystem, string systemName) => Ok(await dictService.AddElementToSystemDictionary(idSystem,systemName));


        [HttpPost]
        [Route("AddElementToDepartmentDictionary/{idDepartment:int}/{departmentName}")]
        public async Task<IActionResult> AddElementToDepartmentDictionary(short idDepartment, string departmentName) => Ok(await dictService.AddElementToDepartmentDictionary(idDepartment, departmentName));


        [HttpPost]
        [Route("AddElementToActivityHierarchyDictionary/{idActivityHierarchy:int}/{activityHierarchyName}")]
        public async Task<IActionResult> AddElementToActivityHierarchyDictionary(byte idActivityHierarchy, string activityHierarchyName) => Ok(await dictService.AddElementToActivityHierarchyDictionary(idActivityHierarchy, activityHierarchyName));


        [HttpPost]
        [Route("AddElementToBussinesValueAddedDictionary/{idBussinesValueAdded:int}/{bussinesValueAddedName}")]
        public async Task<IActionResult> AddElementToBussinesValueAddedDictionary(byte idBussinesValueAdded, string bussinesValueAddedName) => Ok(await dictService.AddElementToBussinesValueAddedDictionary(idBussinesValueAdded, bussinesValueAddedName));


        [HttpPost]
        [Route("AddElementToCriticalToDictionary/{idCriticalTo:int}/{criticalToName}")]
        public async Task<IActionResult> AddElementToCriticalToDictionary(byte idCriticalTo, string criticalToName) => Ok(await dictService.AddElementToCriticalToDictionary(idCriticalTo, criticalToName));


        [HttpPost]
        [Route("AddElementToKpiDictionary/{idKpi:int}/{kpi}")]
        public async Task<IActionResult> AddElementToKpiDictionary(byte idKpi, string kpi) => Ok(await dictService.AddElementToKpiDictionary(idKpi, kpi));

        [HttpPost]
        [Route("ModifySpecificDictionary/{idNameSimpleDictionary:int}/{idOfDictionary:int}/{newNameOfDictionary}")]
        public async Task<IActionResult> ModifySpecificDictionary(byte idNameSimpleDictionary, int idOfDictionary, string newNameOfDictionary) => Ok(await dictService.ModifySpecificDictionary(idNameSimpleDictionary, idOfDictionary, newNameOfDictionary));


        [HttpPost]
        [Route("DeleteSpecificDictionary/{idNameSimpleDictionary:int}/{idOfDictionary}")]
        public async Task<IActionResult> DeleteSpecificDictionary(byte idNameSimpleDictionary, string idOfDictionary) => Ok(await dictService.DeleteSpecificDictionary(idNameSimpleDictionary, idOfDictionary));


        [HttpPost]
        [Route("DeleteSpecificLayer/{systemId:int}/{dimensionId:int}/{tierId:int}/{layerId}")]
        public async Task<IActionResult> DeleteSpecificLayer(short systemId, byte dimensionId, byte tierId, string layerId) => Ok(await dictService.DeleteSpecificLayer(systemId,dimensionId,tierId,layerId));

    }
}
