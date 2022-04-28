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


        [HttpPost]
        [Route("SaveLayers/{systemId:int}")]
        public async Task<IActionResult> SaveLayers([FromBody] List<LayersToAddDTO> layers, int systemId) => Ok(await dictService.SaveLayers(layers, systemId));

        [HttpGet]
        [Route("GetDictSystem")]
        public async Task<IActionResult> FGetListOfSystemDictionary() => Ok(await dictService.GetListOfSystemDictionary());

        [HttpGet]
        [Route("GetDictKpi")]
        public async Task<IActionResult> FGetListOfKpiDictionary() => Ok(await dictService.GetListOfKpiDictionary());

        [HttpGet]
        [Route("GetDictCriticalTo")]
        public async Task<IActionResult> FGetListOfCriticalToTo() => Ok(await dictService.GetListOfCriticalToDictionary());
    }
}
